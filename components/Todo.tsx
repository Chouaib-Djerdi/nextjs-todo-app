"use client";

import { useTransition } from "react";
import { completeTodo } from "@/utils/actions";
import { start } from "repl";

const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <div
      className={`border border-black cursor-pointer ${
        todo.completed ? "line-through text-gray-900" : ""
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  );
};

export default Todo;
