'use client'
import { useEffect, useRef } from 'react'

interface EntropyProps {
  className?: string
  size?: number
}

export function Entropy({ className = "", size = 400 }: EntropyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')! as CanvasRenderingContext2D
    if (!ctx) return

    // 基础设置
    const dpr = window.devicePixelRatio || 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    canvas.style.width = `${size}px`
    canvas.style.height = `${size}px`
    ctx.scale(dpr, dpr)

    // 使用黑色主题
    const particleColor = '#ffffff'

    let mouse = { x: -1000, y: -1000 }
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = (e.clientX - rect.left) * (size / rect.width)
      mouse.y = (e.clientY - rect.top) * (size / rect.height)
    }
    
    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    class Particle {
      x: number
      y: number
      size: number
      velocity: { x: number; y: number }
      originalX: number
      originalY: number
      neighbors: Particle[]

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.originalX = x
        this.originalY = y
        this.size = 1.5 + Math.random() * 1.5
        this.velocity = {
          x: (Math.random() - 0.5) * 1.5,
          y: (Math.random() - 0.5) * 1.5
        }
        this.neighbors = []
      }

      update() {
        // Random wandering
        this.velocity.x += (Math.random() - 0.5) * 0.1
        this.velocity.y += (Math.random() - 0.5) * 0.1
        
        // Mouse follow logic
        const dxMouse = mouse.x - this.x
        const dyMouse = mouse.y - this.y
        const distMouse = Math.hypot(dxMouse, dyMouse)
        
        const interactionRadius = 250
        
        if (distMouse < interactionRadius && distMouse > 0) {
          const force = (interactionRadius - distMouse) / interactionRadius
          // Attract towards mouse
          this.velocity.x += (dxMouse / distMouse) * force * 0.4
          this.velocity.y += (dyMouse / distMouse) * force * 0.4
        } else {
          // Gently pull back towards center if very far, or just let them wander
          // Let's add a very very gentle pull to original positions to keep a nice uniform distribution
          const dxOrig = this.originalX - this.x
          const dyOrig = this.originalY - this.y
          this.velocity.x += dxOrig * 0.0001
          this.velocity.y += dyOrig * 0.0001
        }

        // Friction to prevent infinite acceleration
        this.velocity.x *= 0.96
        this.velocity.y *= 0.96
        
        this.x += this.velocity.x
        this.y += this.velocity.y

        // Boundaries handling
        if (this.x < 0 || this.x > size) {
          this.velocity.x *= -1
          this.x = Math.max(0, Math.min(size, this.x))
        }
        if (this.y < 0 || this.y > size) {
          this.velocity.y *= -1
          this.y = Math.max(0, Math.min(size, this.y))
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `${particleColor}80` // 50% opacity white
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // 创建粒子网格
    const particles: Particle[] = []
    const gridSize = Math.max(1, Math.floor(size / 55))
    const spacing = size / gridSize

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const x = spacing * i + spacing / 2 + (Math.random() - 0.5) * spacing
        const y = spacing * j + spacing / 2 + (Math.random() - 0.5) * spacing
        particles.push(new Particle(x, y))
      }
    }

    // 更新邻居关系
    function updateNeighbors() {
      particles.forEach(particle => {
        particle.neighbors = particles.filter(other => {
          if (other === particle) return false
          const distance = Math.hypot(particle.x - other.x, particle.y - other.y)
          return distance < 120
        })
      })
    }

    let time = 0
    let animationId: number
    
    function animate() {
      ctx.clearRect(0, 0, size, size)

      // 更新邻居关系 periodically for performance
      if (time % 10 === 0) {
        updateNeighbors()
      }

      // 更新和绘制所有粒子
      particles.forEach(particle => {
        particle.update()
        particle.draw(ctx)

        // 绘制连接线
        particle.neighbors.forEach(neighbor => {
          const distance = Math.hypot(particle.x - neighbor.x, particle.y - neighbor.y)
          if (distance < 120) {
            const alpha = 0.3 * (1 - distance / 120)
            ctx.strokeStyle = `${particleColor}${Math.round(alpha * 255).toString(16).padStart(2, '0')}`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(neighbor.x, neighbor.y)
            ctx.stroke()
          }
        })
      })

      time++
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [size])

  return (
    <div className={`relative bg-transparent ${className}`} style={{ width: size, height: size }}>
      <canvas
        ref={canvasRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  )
}
