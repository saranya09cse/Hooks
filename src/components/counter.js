import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <section className="--flex-center --100vh --bg-primary">
        <div className="container --bg-light --p2 --m2 --center-all">
            <h3>Regular HTML Page</h3>
            <h1 className="count">{count}</h1>
            <div className="buttons --flex-center">
                <button className="--btn --btn-danger" onClick={()=> setCount(count - 1)}>Subtract</button>
                <button className="--btn" onClick={()=> setCount(0)}>Reset</button>
                <button className="--btn --btn-primary" onClick={()=> setCount(count + 1)}>Add</button>
            </div>
        </div>
    </section>
  )
}

export default Counter
