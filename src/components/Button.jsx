import React from 'react'

function Button({children}) {
  return (
    <button className='btn taskbtn' data-bs-toggle="modal" data-bs-target="#task">{children}</button>
  )
}

export default Button
