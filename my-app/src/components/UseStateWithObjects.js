import React, { useState } from 'react'

function UseStateWithObjects() {
    const [name, setName] = useState({ firstName: "", lastName: "" });

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({
                    // spread the current value of the 
                    // name property into the object we’re pushing into the state with the setName function.
                    // By doing this, the entire name object will be copied into the new object,  
                    // and the appropriate properties will just be replaced with their new values.
                        ...name,
                        firstName: e.target.value,
                    })}
                />
                <input
                    type="text"
                    value={name.lastName}
                    onChange={e => setName({
                    // spread the current value of the 
                    // name property into the object we’re pushing into the state with the setName function.
                    // By doing this, the entire name object will be copied into the new object,  
                    // and the appropriate properties will just be replaced with their new values.
                        ...name,
                        lastName: e.target.value,
                    })}
                />
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default UseStateWithObjects