import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  // iife
  useEffect(() => {

    // Cleanup function to abort the request if the component unmounts
    const controller = new AbortController()

      ;   // if remove (;) you will receive a error(intermediate value is not a function) 

    (async () => {
      try {
        setError(false)
        setLoading(true)
        const response = await axios.get('/api/products?search=' + search,
          { signal: controller.signal } // Pass the abort signal to axios
        )
        console.log(response.data);
        setProducts(response.data)
        setLoading(false)
      } catch (error) {

        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message);
          return; // Exit if the request was canceled
        }
        setError(true)
        console.error('Error fetching products:', error);
        setLoading(false)

      }
      return () => {
        controller.abort() // Abort the request when the component unmounts
      }

    })()
  }, [search])

  return (
    <><h1>App jsx</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error fetching products</h1>}
      <h2>products are {products.length}</h2>

      {/* search product name which match with your product name */}
      <input type="text" placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  )
}

export default App
