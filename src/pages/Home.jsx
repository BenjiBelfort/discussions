import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="flex justify-center flex-wrap gap-8 mt-16">
      <div
        className="w-52 h-40 bg-gray-500 rounded-xl shadow-md flex items-center justify-center font-semibold text-lg cursor-pointer hover:bg-gray-200 transition"
        onClick={() => navigate("/discussions")}
      >
        Card 1
      </div>
      <div className="w-52 h-40 bg-gray-500 rounded-xl shadow-md flex items-center justify-center font-semibold text-lg">
        Card 2
      </div>
      <div className="w-52 h-40 bg-gray-500 rounded-xl shadow-md flex items-center justify-center font-semibold text-lg">
        Card 3
      </div>
    </section>
  );
};

export default Home;
