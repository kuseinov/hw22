import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { get, removeLcol } from "./midler";

function Form() {
  const { users } = useSelector((state) => state);
  console.log(users);
  const dispatch = useDispatch();
  // const todos=useSelector((state)=>state.todos)

  function resetHandler() {
    dispatch(get());
  }
  function remove(itemId) {
    dispatch(removeLcol(itemId));
  }

  return (
    <div>
      <button onClick={resetHandler}>reset</button>
      <button>delete</button>
      {users.map((item) => {
        return (
          <div>
            <ul>
              <li>{item.id}</li>
              <li>{item.name}</li>
              <li>{item.email}</li>
              <button onClick={() => remove(item.id)}>delete</button>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Form;
