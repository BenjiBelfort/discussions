// components/RetourButton.jsx
import { useNavigate } from "react-router-dom";

const RetourButton = ({ to = "/" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="absolute top-6 left-1/2 transform -translate-x-1/2 text-3xl text-white hover:text-gray-500 transition cursor-pointer"
      aria-label="Retour"
    >
      &larr; Retour
    </button>
  );
};

export default RetourButton;
