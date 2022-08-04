import React, { useState, useMemo, useEffect } from "react";

function complexCompute(num) {
  //некоторое сложное вычисление,тормозящее приложение
  console.log("complexCompute"); //чтобы отследить как часто вызывается функция
  let i = 0; //создадим искусственную задержку
  while (i < 1000000000) i++;
  return num * 2;
}

function HookMemo() {
  const [number, setNumber] = useState(42); //состояние счетчика
  const [colored, setColored] = useState(false); //состояние цвета текста

  const styles = useMemo(
    () => ({
      color: colored ? "darkred" : "black",
    }),
    [colored]
  ); //оборачиваем объект styles в useMemo,чтобы сохранить объект на следующий рендер

  const computed = useMemo(() => {
    //кэширование,оптимизация
    return complexCompute(number);
  }, [number]); //если значение number не меняется,то функция не вызывается

  useEffect(() => {
    console.log("Styles changed");
  }, [styles]); //следим за изменением стилей

  return (
    <>
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
      <button
        className={"btn btn-success"}
        onClick={() => setNumber((prev) => prev + 1)}
      >
        Добавить
      </button>
      <button
        className={"btn btn-danger"}
        onClick={() => setNumber((prev) => prev - 1)}
      >
        Убрать
      </button>
      <button
        className={"btn btn-warning"}
        onClick={() => setColored((prev) => !prev)}
      >
        Изменить
      </button>
      {/* меняем булеан значение на противоположное в зависимости от исходного состояния */}
    </>
  );
}

export default HookMemo;
