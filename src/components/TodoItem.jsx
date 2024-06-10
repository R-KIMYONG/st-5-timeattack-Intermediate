import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/slices/todoSlice";

// Hint: TodoItem 컴포넌트는 props 를 받습니다.
export default function TodoItem({ isDone }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onhandleTodolist = (itemId, currentIsDone) => {
    dispatch(toggleTodo({ itemId, currentIsDone }));
  };

  const deletTodolist = (itemId) => {
    dispatch(deleteTodo(itemId));
  };
  return (
    <>
      {todos
        .filter((item) => (isDone ? item.isDone : !item.isDone))
        .map((item) => (
          <li
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              border: "1px solid black",
              width: "500px",
              height: "150px",
            }}
            key={item.id}
          >
            <section>
              <p>제목: {item.todoTitle}</p>
              <p>내용: {item.todoContent}</p>
            </section>
            <section>
              <button
                onClick={() => {
                  onhandleTodolist(item.id, item.isDone);
                }}
              >
                완료
              </button>
              <button
                onClick={() => {
                  deletTodolist(item.id);
                }}
              >
                삭제 
              </button>
            </section>
          </li>
        ))}
    </>
  );
}
