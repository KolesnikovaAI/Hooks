import React, { useState, useEffect } from "react"; //импортируем необходимые хуки

export default function HookEffect() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]); //пустой массив,
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  // useEffect(() => {
  //   console.log('render')
  // })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`) //users или todos или posts
      .then((response) => response.json())
      .then((json) => setData(json)); //изменяем состояние data
  }, [type]); //deps[]-от чего будет зависеть useEffect. т.е. колбэк из useEffect необходимо вызывать только в том случае,если state type изменился

  const mouseMoveHandler = (event) => {
    //изменение состояния
    setPos({
      x: event.clientX, //присвоение текущих координат
      y: event.clientY,
    });
  };

  useEffect(() => {
    console.log("ComponentDidMount");

    window.addEventListener("mousemove", mouseMoveHandler); //добавляем событие отслеживания движения мыши

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler); //удаляем событие отслеживания движения мыши
    };
  }, []);

  return (
    <div>
      <h1>Ресурс: {type}</h1> {/*Ресурс: {текст состояние} */}
      <button onClick={() => setType("users")}>Пользователи</button>{" "}
      {/*onClick={функция, меняющая состояние 'Ресурс: users')}*/}
      <button onClick={() => setType("todos")}>Todos</button>
      <button onClick={() => setType("posts")}>Посты</button>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/*отображение полученного объекта из fetch*/}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}
