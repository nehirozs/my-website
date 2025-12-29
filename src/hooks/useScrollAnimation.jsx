import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1), default 0.1
 * @param {number} options.delay - Animation delay in seconds, default 0
 * @param {string} options.rootMargin - Root margin for intersection observer, default '0px 0px -50px 0px'
 * @returns {[React.RefObject, boolean]} - [ref, isVisible]
 */
export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.1,
    delay = 0,
    rootMargin = '0px 0px -50px 0px'
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Once animated, we can stop observing
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin])

  return [elementRef, isVisible]
}

