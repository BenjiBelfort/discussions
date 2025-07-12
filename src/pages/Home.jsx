import { useNavigate } from "react-router-dom";
import { RiSpeakFill } from "react-icons/ri";
import { FaHeart, FaReact } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex justify-center items-center flex-wrap gap-8 px-4">
      <div
        className="w-52 h-40 bg-gray-500 rounded-xl shadow-md flex flex-col items-center justify-center font-semibold text-lg cursor-pointer hover:bg-gray-200 hover:text-black transition"
        onClick={() => navigate("/discussions")}
      >
        <RiSpeakFill className="text-3xl mb-2" />
        Discussions
      </div>
      <div
        className="w-52 h-40 bg-gray-500 rounded-xl shadow-md flex flex-col items-center justify-center font-semibold text-lg cursor-pointer hover:bg-gray-200 hover:text-black transition"
        onClick={() => navigate("/amour")}
      >
        <FaHeart className="text-3xl mb-2" />
        Amour
      </div>
      <div
        className="w-52 h-40 bg-gray-500 rounded-xl shadow-md flex flex-col items-center justify-center font-semibold text-lg cursor-pointer hover:bg-gray-200 hover:text-black transition"
        onClick={() => navigate("/resoudre")}
      >
        <FaReact className="text-3xl mb-2" />
        Résoudre
      </div>
    </section>
  );
};

export default Home;
