import { useEffect } from 'react'
import { clockCursor } from 'cursor-effects'

export default function Cursor() {
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (!finePointer.matches || reducedMotion.matches) return undefined

    const styleCanvas = () => {
      const canvas = document.body.querySelector('canvas[style*="pointer-events: none"]')
      if (!canvas) return
      canvas.style.zIndex = '400'
      const context = canvas.getContext('2d')
      if (context) context.font = '600 11px "Space Grotesk", sans-serif'
    }

    const effect = clockCursor({
      dateColor: '#6c4cff',
      faceColor: '#ff4f6d',
      secondsColor: '#b9ff3d',
      minutesColor: '#ff4f6d',
      hoursColor: '#6c4cff',
    })
    styleCanvas()

    // Re-style the canvas if it is recreated after reduced-motion changes.
    reducedMotion.addEventListener('change', styleCanvas)

    return () => {
      reducedMotion.removeEventListener('change', styleCanvas)
      effect.destroy()
    }
  }, [])

  return null
}
