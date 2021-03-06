import axios from 'axios';
import { useState } from 'react';

const defaultFormData = {
  title: "",
  body: "", 
}

function Form() {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [formData, setFormData] = useState(defaultFormData)
  const { title, body } = formData

  const onChange = (e) => {
    setFormData((prevForm) => ({
      ...prevForm,
      [e.target.id]: e.target.value
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setFormData(defaultFormData)
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', formData)
      setSuccess(true)
      setError(false)
    } catch (error) {
      setSuccess(false)
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
    <h1>Form</h1>
    <p>Create a post</p>
    <form onSubmit={onSubmit}>
      <label htmlFor="title">Title</label>
      <br />
      <input type="text" id="title" value={title} onChange={onChange} />
      <br />
      <label htmlFor="body">Body</label>
      <br />
      <input type="text" id="body" value={body} onChange={onChange} />
      <br />
      <br />

      <button type="submit">Post</button>
    </form>
    {error && 'Oops! Cannot post the data. Please try again later.'}
    {success && 'Your post is success to proceed!'}
    </>
  )
}

export default Form;
