import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <div className="bg-gray-800 text-gray-100 p-[15px] min-h-screen box-border border-12 border-gray-900">
      <AppRouter />
    </div>
  );
};

export default App;
