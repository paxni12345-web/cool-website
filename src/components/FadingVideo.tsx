import { useEffect, useRef, useState } from 'react'

interface FadingVideoProps {
  src: string | string[]
  className?: string
  style?: React.CSSProperties
}

export default function FadingVideo({ src, className = '', style }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [opacity, setOpacity] = useState(0)
  const [srcIndex, setSrcIndex] = useState(0)

  const sources = Array.isArray(src) ? src : [src]
  const currentSrc = sources[srcIndex % sources.length]

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const fadeIn = () => {
      const start = performance.now()
      const duration = 500
      const animate = (now: number) => {
        const t = Math.min((now - start) / duration, 1)
        setOpacity(t)
        if (t < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }

    const fadeOut = (cb: () => void) => {
      const start = performance.now()
      const duration = 550
      const animate = (now: number) => {
        const t = Math.min((now - start) / duration, 1)
        setOpacity(1 - t)
        if (t < 1) requestAnimationFrame(animate)
        else cb()
      }
      requestAnimationFrame(animate)
    }

    const onLoaded = () => fadeIn()

    const onTimeUpdate = () => {
      if (video.duration - video.currentTime <= 0.55 && opacity > 0.5) {
        fadeOut(() => {
          if (sources.length === 1) {
            video.currentTime = 0
            video.play()
            fadeIn()
          } else {
            setSrcIndex((i) => (i + 1) % sources.length)
          }
        })
      }
    }

    const onEnded = () => {
      if (sources.length === 1) {
        video.currentTime = 0
        video.play()
        fadeIn()
      } else {
        setSrcIndex((i) => (i + 1) % sources.length)
      }
    }

    video.addEventListener('loadeddata', onLoaded)
    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('ended', onEnded)

    return () => {
      video.removeEventListener('loadeddata', onLoaded)
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('ended', onEnded)
    }
  }, [currentSrc, sources.length, opacity])

  return (
    <video
      ref={videoRef}
      src={currentSrc}
      className={className}
      style={{ ...style, opacity }}
      autoPlay
      muted
      playsInline
      preload="auto"
    />
  )
}