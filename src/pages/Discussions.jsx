import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import discussionsData from "../data/discussions.json";

const Discussions = () => {
  const [question, setQuestion] = useState(null);
  const navigate = useNavigate();

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * discussionsData.length);
    setQuestion(discussionsData[randomIndex]);
  };

  useEffect(() => {
    getRandomQuestion();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative px-4">
      {/* Flèche de retour */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-1/2 transform -translate-x-1/2 text-3xl text-white hover:text-gray-500 transition"
        aria-label="Retour"
      >
        &larr; Retour
      </button>

      {/* Card avec hauteur fixe */}
      {question && (
        <div className="bg-gray-500 shadow-lg rounded-xl p-8 w-full max-w-xl text-center h-52 flex items-center justify-center">
          <p className="text-lg font-medium">{question.question}</p>
        </div>
      )}

      {/* Bouton pour changer de question */}
      <button
        onClick={getRandomQuestion}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Nouvelle question
      </button>
    </div>
  );
};

export default Discussions;
