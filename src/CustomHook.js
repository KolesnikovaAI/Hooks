import React, { useEffect, useState } from "react";

function useLogger(value) {
  //хук, отслеживающий изменение value
  useEffect(() => {
    console.log("Value changed: ", value);
  }, [value]);
}

function useInput(initialValue) {
  // Ранее наш  инпут принимал два параметра name и handler. Создаем хук инициализирующий состояние
  const [value, setValue] = useState(initialValue); //инициализирующий состояние

  const onChange = (event) => {
    //меняющий состояние на значение из инпута
    setValue(event.target.value);
  };

  return {
    value,
    onChange, //возвращаем объект с двумя полями value, onChange
    //   bind: {value, onChange}, //можно сгруппировать в отдельный объект
    //   value,
  };
}

export default function CustomHook() {
  // const [name, setName] = useState('');
  // const [lastName, setLastName] = useState('');

  // const changeHandler = event =>{//функция,получающая значение из инпута и меняющая состояние name
  //    setName(event.target.value)
  // }

  // const lastNameHandler = event =>{//функция,получающая значение из инпута и меняющая состояние lastName
  //    setLastName(event.target.value)
  // }
  //получается однотипный код
  const input1 = useInput(""); //с помощью нашего хука создаем новый объект с двумя ключами соответственно value, onChange
  const input2 = useInput(""); //с помощью нашего хука создаем новый объект с двумя ключами соответственно value, onChange

  useLogger(input1.value);

  return (
    <div className={"container pt-3"}>
      {/* <input type = 'text' value = {name} onChange = {changeHandler}/>
      <input type = 'text' value = {lastName} onChange = {lastNameHandler}/> */}

      <input type="text" value={input1.value} onChange={input1.onChange} />
      <input type="text" value={input2.value} onChange={input2.onChange} />

      {/* <input type="text" {...input.bind} /> спред оператор */}

      {/* <h1>{name}</h1>
      <h1>{lastName}</h1> */}
      <h1>{input1.value}</h1>
      <h1>{input2.value}</h1>
    </div>
  );
}
