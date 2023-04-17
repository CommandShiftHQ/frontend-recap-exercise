import React, {useState} from 'react'

const Contact = ({img}) => {
    const [formData, setFormData] = useState()

    const handleChange = (e) => {
        setFormData(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

  return (
    <div>
     <h1> Contact page</h1>
     {img && <img src={img} alt='contact' />}

     <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} />
        <button type='submit'>Submit</button>
     </form>

    </div>
  )
}

export default Contact
