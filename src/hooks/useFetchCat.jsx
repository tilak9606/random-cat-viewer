import { useState, useEffect, useCallback } from 'react'

const API_URL = 'https://api.freeapi.app/api/v1/public/cats/cat/random'

export function useFetchCat() {
  const [cat, setCat] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchCat = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(API_URL)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      if (!result.success) {
        throw new Error(result.message || 'Failed to fetch cat')
      }

      setCat(result.data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchCat()
  }, [fetchCat])

  return { cat, loading, error, fetchCat }
}