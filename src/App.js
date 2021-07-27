import React, { useState } from "react"
import Card from "./components/Card"
import Values from "values.js"

const App = () => {
  const [code, setCode] = useState("")
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values("#f15025").all(10))

  const handleChange = (e) => {
    e.preventDefault()
    try {
      setList(new Values(code).all(10))
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className='input-info'>
        <h2>Color Generator</h2>
        <input
          type='text'
          value={code}
          placeholder='#f15025'
          onChange={(e) => {
            setCode(e.target.value)
          }}
          className={`${error ? "error" : null}`}
        ></input>
        <button onClick={handleChange}>Submit</button>
      </section>
      <div className='colors'>
        {list.map((color, index) => {
          return (
            <Card key={index} {...color} index={index} hexColor={color.hex} />
          )
        })}
      </div>
    </>
  )
}

export default App
