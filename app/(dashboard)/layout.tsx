const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <h1>Todos</h1>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
