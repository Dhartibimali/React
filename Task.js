import React from 'react'

const Task = ({task}) => {
  return (
    <div className='tasks'>
<h3>{task.text} </h3>

    </div>
  )
}

export default Task