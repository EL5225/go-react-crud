const MainLayout = ({ children }) => {
  return (
    <main className="flex flex-col w-full h-full justify-center">
      {children}
    </main>
  );
};

export default MainLayout;
