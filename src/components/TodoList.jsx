import TodoItem from "./TodoItem";

export default function TodoList({ isDone }) {
  console.log(isDone)
  return (
    <section>
      <h2>{!isDone? 'Working...':"Done list"}</h2>
      <ul>
        <TodoItem isDone={isDone}/>
      </ul>
    </section>
  );
}
