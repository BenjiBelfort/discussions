import { useNavigate } from "react-router-dom";

const Card = ({ icon: Icon, label, path }) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-52 h-40 bg-gray-500 rounded-xl shadow-md flex flex-col items-center justify-center font-semibold text-lg cursor-pointer hover:bg-gray-200 hover:text-black transition"
      onClick={() => navigate(path)}
    >
      {Icon && <Icon className="text-3xl mb-2" />}
      {label}
    </div>
  );
};

export default Card;
