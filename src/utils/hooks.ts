import { useState, useEffect } from "react"

export function useScroll() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    function listener() {
      setScrollY(document.body.getBoundingClientRect().top)
    }

    window.addEventListener("scroll", listener)
    return () => window.removeEventListener("scroll", listener)
  })

  return -scrollY
}
