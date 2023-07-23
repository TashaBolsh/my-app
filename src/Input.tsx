import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Button} from "./Button";
type InputPropsType={
addTitle:(title:string)=>void
}

export const Input = (props:InputPropsType) => {
    let [title, setTitle] = useState("");
    const onChangeInputHandler= (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    };
    const onClickButtonHandler=()=>{
        props.addTitle(title)
    }
    return (
        <div>
            <label className="label" htmlFor="tentacles">max value:</label>
            <input className="label" type = "number" id="tentacles" name="tentacles"
                   max="5" min="1"  onChange={onChangeInputHandler}/>
            <label className="label" htmlFor="tentacles">start value:</label>
            <input className="label" type = "number" id="tentacles" name="tentacles"
                   min="0" max="5" onChange={onChangeInputHandler}/>
            <button className = "btn" onClick={onClickButtonHandler}>Set</button>
        </div>
    );
};