import React, { useState } from "react"; //

function computeInitialCounter() {
  //если первоначальное состояние результат другой функции
  console.log("Some calculations...");
  return Math.trunc(Math.random() * 20);
}

function HookState() {
  // const [counter, setCounter] = useState(0)//[состояние, функция, меняющая состояние] = useState(первое состояние)
  // const [counter, setCounter] = useState(computeInitialCounter())//таким образом функция будет вызвана дважды(здесь и в декременте/инкременте)
  const [counter, setCounter] = useState(() => {
    //возвращаем результат функции,чтобы дважды ее не вызывать
    return computeInitialCounter();
  });

  const [state, setState] = useState({
    //пример,когда состояние-объект
    title: "Счетчик",
    date: Date.now(),
  });

  function increment() {
    // setCounter(counter + 1)
    setCounter((prevCounter) => {
      //prevCounter-предыдущее состояние
      return prevCounter + 1;
    });
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function updateTitle() {
    //в функциональных компонентах если передать только title: 'Новое название' объект полностью замещается на новый,
    setState((prev) => {
      //не совмещаясь с изначальным объектом(т.е. будут только новые указанные поля)
      return {
        //Поэтому обращаемся к предыдудщему состоянию, возвращаем новый объект, которые вмещяет предыдущее состояние+измененное поле
        ...prev,
        title: "Новое название",
      };
    });
  }

  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment} className="btn btn-success">
        Добавить
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Убрать
      </button>
      <button onClick={updateTitle} className="btn btn-default">
        Изменить название
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default HookState;
