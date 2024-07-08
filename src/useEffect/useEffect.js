import { useEffect } from "react";

// const App = () => {
//   useEffect(() => {
//     console.log("렌더링 될때마다 실행"); // 1.har render bulganda 실행
//   });
// };

// const App = () => {
//   useEffect(() => {
//     console.log("맨 처음 렌더링될 때 한 번만 실행"); // 2.faqat eng boshida render bulganda 실행
//   }, []);
// };

export default App;

import React, { useEffect, useState } from "react";

function UseEffect() {
  const [name, setName] = useState("초기 닉네임");

  useEffect(() => {
    console.log("컴포넌트 나타남");
    console.log(name);
    return () => {
      console.log("cleanUp 함수");
    };
  });

  const onClick = () => {
    setName("닉네임 변경");
  };
  return (
    <div>
      {name} <button onClick={onClick}>변경</button>
    </div>
  );
}

export default UseEffect;
