import { useEffect, useState } from 'react'

function getWidth() {
  return typeof window !== 'undefined' ? window.innerWidth : 1440
}

export function useViewport() {
  const [width, setWidth] = useState<number>(getWidth)

  useEffect(() => {
    const onResize = () => setWidth(getWidth())
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return {
    width,
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1200,
  }
}
