import React from 'react'

function Greeting({ children, firstName, lastName }) {
  return (<>{children}
    <div>
      <h3>{firstName} {lastName}</h3>
      </div>
  </>
  )
}

export default Greeting;