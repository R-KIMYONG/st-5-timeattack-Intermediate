import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";
import { nanoid } from "nanoid";
export default function TodoForm() {
  const dispatch = useDispatch();

  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodocontent] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          addTodo({ id: nanoid(), todoTitle, todoContent, isDone: false })
        );
        setTodoTitle("");
        setTodocontent("");
      }}
    >
      <label>제목: </label>
      <input
        type="text"
        value={todoTitle}
        onChange={(e) => {
          setTodoTitle(e.target.value);
        }}
      />
      <label>내용: </label>
      <input
        type="text"
        value={todoContent}
        onChange={(e) => {
          setTodocontent(e.target.value);
        }}
      />
      <button>추가</button>
    </form>
  );
}
