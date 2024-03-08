import NewTodoForm from "@/components/NewTodoForm";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <h1>Todos</h1>
        <NewTodoForm />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
