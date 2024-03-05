import TodoList from "@/components/TodoList";
import db from "@/utils/db";

const getData = async () => {
  const todos = await db.todo.findMany({});
  console.log(todos);
  return todos;
};

const Page = async () => {
  const todos = await getData();

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default Page;
