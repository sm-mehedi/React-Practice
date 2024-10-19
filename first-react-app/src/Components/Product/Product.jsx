import { useState } from 'react'; // Import useState at the top

export default function Product({ info }) {
    // Declare state and function at the top level
    const [count, setCount] = useState(0);

    // Define the increment function
    function Icount() {
        setCount(count + 1); // Update state using setCount
    }
    function rcount(){
        setCount(count-1);
    }
    const testr = ()=>{
        console.log("first")
    }

    return (
        <div>
            <p>{info.name}</p>
            <p>{info.id}</p>
            <h1>Meow</h1>
            <button onClick={Icount}>On click</button>
            <button onClick={rcount}>On click</button>
            <h2>Count2: {count}</h2> {/* Display the count */}
            <h2>Reduce {rcount}</h2>
            <button onClick={testr}>hi</button>
        </div>
    );
}
