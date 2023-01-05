import React, { Children } from 'react';

function TodoTemplate({children}) {
  return (
    <div className='todo-template'>{children}</div>
  )
}

export default TodoTemplate