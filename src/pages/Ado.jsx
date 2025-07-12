import { useEffect, useState } from "react";
import adoData from "../data/ado.json";
import RetourButton from "../components/RetourButton";
import NouvelleQuestionButton from "../components/NouvelleQuestionButton";

const Ado = () => {
  const [question, setQuestion] = useState(null);

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * adoData.length);
    setQuestion(adoData[randomIndex]);
  };

  useEffect(() => {
    getRandomQuestion();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative px-4">
      {/* Flèche de retour */}
      <RetourButton />

      {/* Card avec hauteur fixe */}
      {question && (
        <div className="bg-gray-500 shadow-lg rounded-xl p-8 w-full max-w-xl text-center h-52 flex items-center justify-center">
          <p className="text-lg font-medium">{question.question}</p>
        </div>
      )}

      {/* Bouton pour changer de question */}
      <NouvelleQuestionButton onClick={getRandomQuestion} />
    </div>
  );
};

export default Ado;
