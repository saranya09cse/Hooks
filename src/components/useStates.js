import React from 'react'

const useStates = () => {
    const [text,setText] = useStates("Hello World")
    handleClick = () =>{
        setText("Text Changed")
    }
  return (
    <section className="--flex-center --100vh">
        <div className="container --center-all">
            <h3>Regular HTML Page</h3>
            <h1 className="text">{text}</h1>
            <button className="--btn --btn-primary" onclick={handleClick}>Change text</button>
        </div>
    </section>
    
  )
}

export default useStates
