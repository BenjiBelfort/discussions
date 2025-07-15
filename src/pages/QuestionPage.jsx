// src/pages/QuestionPage.jsx
import useRandomQuestion from "../hooks/useRandomQuestion";
import RetourButton from "../components/RetourButton";
import NouvelleQuestionButton from "../components/NouvelleQuestionButton";

const QuestionPage = ({ data }) => {
  const { question, getRandomQuestion } = useRandomQuestion(data);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative px-4">
      <RetourButton />
      {question && (
        <div className="bg-gray-500 shadow-lg rounded-xl p-8 w-full max-w-xl text-center h-52 flex items-center justify-center">
          <p className="text-lg font-medium">{question.question}</p>
        </div>
      )}
      <NouvelleQuestionButton onClick={getRandomQuestion} />
    </div>
  );
};

export default QuestionPage;
