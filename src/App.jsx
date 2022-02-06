import axios from "axios"
import { useEffect, useState } from "react"

export default function App() {
  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

useEffect(() => {
  const fetchPosts = async () => {
    setLoading(true)
    
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(response.data)
      setError(false)
      setLoading(false)
    } catch(error) {
      setError(true)
      setLoading(false)
    }
  }

  fetchPosts()
}, [])

  return <>
  {loading && 'Loading...'}
  {error && 'Oops! cannot load posts from the server..., please try again later.'}

  {posts && posts.map(post => {
    const { id, title, body } = post
    return <article key={id}>
      id: {id}<br />
      title: {title}<br />
      body: {body}<br />
      <br />
    </article>
  })}
  </>
}