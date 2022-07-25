import React from 'react'

const Alert = ({children}) => {
  return (
    <div className=' text-center my-4 bg-red-600 text-white font-bold uppercase p-3'>
        {children}
    </div>
  )
}

export default Alert