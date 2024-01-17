import React,{useState, useEffect} from 'react'

function UseEffectCounter() {
  const [count, setCount] = useState(0);
  // component did mount and update will be handled in below hook
  useEffect(() => {
    document.title = count;
  });
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>
        Increment Count {count}
      </button>
    </div>
  )
}

export default UseEffectCounter