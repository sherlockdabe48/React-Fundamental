import { useState } from 'react';

const defaultFormData = {
  title: "",
  body: "", 
}

function Form() {
  const [formData, setFormData] = useState(defaultFormData)
  const { title, body } = formData

  const onChange = (e) => {
    setFormData((prevForm) => ({
      ...prevForm,
      [e.target.id]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setFormData(defaultFormData)
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

      <button type="submit">Upload</button>
    </form>
    </>
  )
}

export default Form;
