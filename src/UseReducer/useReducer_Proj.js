import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  console.log("reducer ishlayapti", state, action); // reducer ikkita narsani oz ichiga oladi, 1-state -> money "현재 state kiradi."  2-action -> 요구 내용

  // return state + action.payload; // bitta depasitni faqat chiqaradi.
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    default:
      return state;
  }
};

const App = () => {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0); // useReducer o'z ichiga reducer bn 조기 값ni oladi.
  // tepadagi moneyni faqat tepadagi func reducer orqali 수정 qilib buladi.

  return (
    <div>
      <h2>useReducer~! WELCOME TO THE BANK</h2>
      <p>잔고: {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: "deposit", payload: number }); // buyerda dispatchni chaqirsa reducer chaqirilgan buladi.
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: "withdraw", payload: number }); // buyerda dispatchni chaqirsa reducer chaqirilgan buladi.
        }}
      >
        출금
      </button>
    </div>
  );
};

export default App;
