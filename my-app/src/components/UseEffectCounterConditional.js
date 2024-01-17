import React,{useState, useEffect} from 'react'

function UseEffectCounterConditional() {
  const [count, setCount] = useState(0);
  // component did mount and update will be handled in below hook
  useEffect(() => {
    console.log('count effect 1')
    document.title = count;
  },[count]);

  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log('count effect 2')
    document.title = count2;
  },[count2]);
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>
        Increment Count {count}
      </button>

      <button onClick={() => setCount2(count2 => count2 + 1)}>
        Increment Count {count}
      </button>
    </div>
  )
}

export default UseEffectCounterConditional