// components/NouvelleQuestionButton.jsx
const NouvelleQuestionButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer"
    >
      Nouvelle question
    </button>
  );
};

export default NouvelleQuestionButton;
