import React, { useState, useEffect } from "react"

const Card = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bgc = rgb.join(",")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])

  const hexValue = `#${hexColor}`

  return (
    <div
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bgc})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'> copied to clipboard </p>}
    </div>
  )
}

export default Card
