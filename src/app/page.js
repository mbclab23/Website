"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="text-center">Dashboard</h1>
      <div
        className="justify-center m-auto text-center items-center"
        style={{ border: "10px solid blue", height: "100vh" }}
      >
        <h2>{count}</h2>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            style={{ border: "1px solid black" }}
          >
            +1
          </button>

          <button
            onClick={() => {
              setCount(count - 1);
            }}
            style={{ border: "1px solid black" }}
          >
            -1
          </button>
        </div>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1743&q=80"
        width={250}
        height={250}
        alt="placeholder"
      />
    </>
  );
}
