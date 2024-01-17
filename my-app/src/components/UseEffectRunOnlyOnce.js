import React,{useState, useEffect} from 'react'

function UseEffectRunOnlyOnce() {
  const [count, setCount] = useState(0);


  useEffect(() => {
    console.log("Count effect")
    document.title = count;
  },[count]);

  const [time, setTime] = useState(0)

  useEffect(() => {
    console.log("Timer effect")
    const interval = setInterval(() =>{
        setTime(time => time + 1)
    },1000)
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

export default UseEffectRunOnlyOnce