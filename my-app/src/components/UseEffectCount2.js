import React,{useState, useEffect} from 'react'

function UseEffectCounter2() {
  const [count, setCount] = useState(0);


  useEffect(() => {
    console.log("Count effect")
    document.title = count;
  },[count]);

  const [time, setTime] = useState(0)

  useEffect(() => {
    console.log("Creating Timer")
    const interval = setInterval(() =>{
        setTime(time => time + 1)
    },1000);
    // Now line below will act as cleanup function, this will prevent timer to continue when display is false on UseEffectCounterContainer.js
    // In short below code act as ComponentDidUnmount
    return () => {
        console.log('Cleaning Up!')
        clearInterval(interval)
    }
    // this empty array will make sure that this effect run only once and never again
  },[])

  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>
        Increment Count {count}
      </button>
        <h2>Time is {time}</h2>
    </div>
  )
}

export default UseEffectCounter2