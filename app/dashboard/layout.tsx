const DashBoardLayout = ({
  children,
  analytics,
  history,
  user,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  history: React.ReactNode;
  user: React.ReactNode;
}) => {
  return (
    <main className="flex gap-24 px-24">
      <section>
        <div>{children}</div>
      </section>
      <section>
        <div>{analytics}</div>
        <div>{history}</div>
        <div>{user}</div>
      </section>
    </main>
  );
};

export default DashBoardLayout;
