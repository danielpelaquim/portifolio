import { useEffect, useRef } from 'react'

const glyphs = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*+-<>='

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const frameInterval = 72
    let frameId = 0
    let lastFrame = 0
    let fontSize = 20
    let drops: number[] = []
    let speeds: number[] = []

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.round(window.innerWidth * pixelRatio)
      canvas.height = Math.round(window.innerHeight * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      fontSize = window.innerWidth < 600 ? 22 : 20
      context.font = `${fontSize}px monospace`
      const columns = Math.ceil(window.innerWidth / fontSize)
      drops = Array.from(
        { length: columns },
        () => Math.random() * (window.innerHeight / fontSize),
      )
      speeds = Array.from({ length: columns }, () => 0.45 + Math.random() * 1.35)
    }

    const draw = (time: number) => {
      if (time - lastFrame < frameInterval) {
        frameId = window.requestAnimationFrame(draw)
        return
      }
      lastFrame = time
      context.fillStyle = 'rgba(3, 6, 5, 0.12)'
      context.fillRect(0, 0, window.innerWidth, window.innerHeight)

      for (let column = 0; column < drops.length; column += 1) {
        const glyph = glyphs[Math.floor(Math.random() * glyphs.length)]
        context.fillStyle = Math.random() > 0.985 ? '#b7ffd0' : '#00a84b'
        context.globalAlpha = 0.22 + Math.random() * 0.42
        context.fillText(glyph, column * fontSize, drops[column] * fontSize)
        context.globalAlpha = 1

        if (drops[column] * fontSize > window.innerHeight && Math.random() > 0.975) {
          drops[column] = 0
        } else {
          drops[column] += speeds[column]
        }
      }

      frameId = window.requestAnimationFrame(draw)
    }

    const stop = () => {
      window.cancelAnimationFrame(frameId)
      frameId = 0
    }

    const start = () => {
      if (motionPreference.matches || document.hidden || frameId !== 0) return
      lastFrame = 0
      frameId = window.requestAnimationFrame(draw)
    }

    const handleVisibilityChange = () => {
      if (document.hidden) stop()
      else start()
    }

    const handleMotionChange = () => {
      stop()
      context.clearRect(0, 0, window.innerWidth, window.innerHeight)
      if (!motionPreference.matches) start()
    }

    resize()
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    motionPreference.addEventListener('change', handleMotionChange)
    start()

    return () => {
      stop()
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      motionPreference.removeEventListener('change', handleMotionChange)
    }
  }, [])

  return <canvas ref={canvasRef} className="matrix-backdrop" aria-hidden="true" />
}
