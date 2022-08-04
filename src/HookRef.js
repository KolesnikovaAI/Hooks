import React, { useState, useEffect, useRef } from "react"; //импортируем необходимые хуки

export default function HookRef() {
  // const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState("initial");
  const renderCount = useRef(1); //renderCount-объект, у которого есть свойство current, изначальное значение которого 1
  const inputRef = useRef(null); //привязка к DOM-элементу
  const prevValue = useRef(""); //для получения значения предыдущего состояния

  useEffect(() => {
    renderCount.current++; //обращаемся не к объекту,а к свойству current
    //console.log(inputRef.current.value) //выведем в консоль содержимое инпута с ссылкой ref={inputRef}
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]); //как только меняется значение состояния

  const focus = () => inputRef.current.focus(); //inputRef.current-необходимый инпут

  return (
    <div>
      <h1>Количество рендеров: {renderCount.current}</h1>
      <h2>Прошлое состояние: {prevValue.current}</h2>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="btn btn-success" onClick={focus}>
        Фокус
      </button>
    </div>
  );
}
