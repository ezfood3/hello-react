import React, { useState } from "react";

const IterateComFunc = () => {
  const [names, setNames] = useState([
    { id: 1, text: "김영진" },
    { id: 2, text: "이영진" },
    { id: 3, text: "박영진" },
  ]);
  const [inputTag, setInputTag] = useState("");
  const [nextId, setNextId] = useState(4);

  const onChange = (e) => {
    setInputTag(e.target.value);
    // console.log(inputTag);
  };

  const RmItem = (id) => {
    const newNames = names.filter((name, index) => {
      return name.id !== id;
    });
    setNames(newNames);
  };
  const namesList = names.map((name, index) => {
    return (
      <li
        key={name.id}
        onDoubleClick={(e) => {
          RmItem(name.id);
        }}
      >
        {name.text}
      </li>
    );
  });
  const onClick = (e) => {
    // 상태불변성 : push()는 처리 안됨 -> concat()으로 해야함
    const newNames = names.concat({ id: nextId, text: inputTag });
    // setNames(names.push({ id: nextId, text: inputTag }));
    setNames(newNames);
    setNextId(nextId + 1);
    setInputTag("");
  };
  return (
    <>
      <input type="text" value={inputTag} onChange={onChange}></input>
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterateComFunc;
