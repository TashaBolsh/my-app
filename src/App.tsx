import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button";
import {Input} from "./Input";


function App() {
    let [count, setCount] = useState<number>(0)
    const addTitle = (title:string)=> {
    console.log(title);
    }
    const countInc = ()=> {
        if(count < 5)
        {
           setCount(count + 1);
        }
    }

    const countReset = ()=> {setCount(0);}

    return (
        <div className="App">
            <Input addTitle={addTitle}/>
            <div>{count}</div>
            <Button name = {"Inc"} callBask={countInc} disabled = {count === 5}/>
            <Button name = {"Reset"} callBask={countReset} disabled = {count === 0}/>
        </div>
    );
}

export default App;
