import { useEffect, useState } from 'react'

export function useDebounce(val: string, delay: number) {
  const [debouncedVal, setDebouncedVal] = useState(val)

  useEffect(() => {
    const timeOutHandler = setTimeout(() => setDebouncedVal(val), delay * 1000)

    return () => clearTimeout(timeOutHandler)
  }, [delay, val])

  return debouncedVal
}
