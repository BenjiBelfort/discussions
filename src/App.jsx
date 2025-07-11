import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <div className="bg-gray-900 text-gray-100 p-[15px] min-h-screen box-border border-4 border-amber-300">
      <AppRouter />
    </div>
  );
};

export default App;
