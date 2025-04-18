
"use client";
import { useState } from "react";
export default function Decrement({ title , onClick }) {
    return (
      <button class="bg-blue-300 text-black font-bold px-10 py-3 m-3 rounded"  onClick={onClick} >
        {title}
      </button>
    );
  }