import { newTodo } from "@/utils/actions";

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input name="content" type="text" className="border border-black m-5" />
        <button type="submit" className="border-2 border-black ">
          new todo
        </button>
      </form>
    </div>
  );
};

export default NewTodoForm;
