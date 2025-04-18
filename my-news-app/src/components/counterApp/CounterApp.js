"use client"
import React, { useState } from "react";
function  CounterApp(){
    const [value,setValue]=useState(0)
    const increment=()=>{
        setValue(value+1)
    }
    const decrement=()=>{
        setValue(value-1)
    }
    const Reset=()=>{
        setValue(0)
    }
      return (<div className="text-center py-20">
        <h1 className="text-red-300 text-xl font-semibold py-5">Counter App</h1>
         <button className="bg-gray-300 rounded-full px-6 py-2 mx-5 text-black" onClick={increment}>+</button>
         {value}
         <button className="bg-gray-300 rounded-full px-6 py-2 mx-5 text-black" onClick={decrement}>-</button>
         <button className="bg-gray-300 rounded-full px-6 py-2 mx-5 text-black" onClick={Reset}>Reset</button>
      </div>)
}
export default CounterApp