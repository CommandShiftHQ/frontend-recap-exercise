import React, {useState} from 'react'
import { data } from '../data/aboutInfo'

const About = ({img}) => {
    const [aboutData, setAboutData] = useState(data)

    const handleClick = (id) => {
        const newData = aboutData.map(data => data.id === id ? ({...data, visible: !data.visible }) : data)
        setAboutData(newData)
    }

  return (
    <div>
      <h1>About page</h1>
      {img && <img src={img} alt='about' />}
      <br />
      
        {aboutData.map(aboutSection => (
            <>
            <button onClick={() => handleClick(aboutSection.id)}>{aboutSection.title}</button>
            <p>{aboutSection.visible && aboutSection.description}</p>
            </>
        ))}
    </div>
  )
}

export default About
