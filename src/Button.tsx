import React from "react";
import './App.css';

type PropsType = {
    name: string,
    callBask:()=>void
    disabled:boolean
}

export const Button = (props:PropsType)=>{
const onClickHandler=()=>{
    props.callBask()
}
return (
    <div>
        <div>
            <button className = "btn" onClick={onClickHandler}>{props.name}</button>
        </div>
    </div>
)
};