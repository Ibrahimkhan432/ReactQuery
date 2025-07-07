import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  // iife
  useEffect(() => {
    (async () => {
      try {
        setError(false)
        setLoading(true)
        const response = await axios.get('/api/products')
        console.log(response.data);
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        setError(true)
        console.error('Error fetching products:', error);
        setLoading(false)
      }
    })()
  }, [])

  if (error) {
    return <h1>Error fetching products</h1>
  }

if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <><h1>App jsx</h1>
      <h2>products are {products.length}</h2>
    </>
  )
}

export default App
