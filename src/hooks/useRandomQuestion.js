import { useState, useEffect } from "react";

// Fonction utilitaire pour mélanger un tableau
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const useRandomQuestion = (questionsData) => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [question, setQuestion] = useState(null);

  // Mélange initial au chargement ou si questionsData change
  useEffect(() => {
    if (questionsData?.length > 0) {
      const newShuffled = shuffleArray(questionsData);
      setShuffledQuestions(newShuffled);
      setCurrentIndex(0);
      setQuestion(newShuffled[0]);
    }
  }, [questionsData]);

  const getRandomQuestion = () => {
    if (shuffledQuestions.length === 0) return;

    const nextIndex = currentIndex + 1;

    if (nextIndex < shuffledQuestions.length) {
      setCurrentIndex(nextIndex);
      setQuestion(shuffledQuestions[nextIndex]);
    } else {
      // Toutes les questions ont été montrées : reshuffle
      const newShuffled = shuffleArray(questionsData);
      setShuffledQuestions(newShuffled);
      setCurrentIndex(0);
      setQuestion(newShuffled[0]);
    }
  };

  return { question, getRandomQuestion };
};

export default useRandomQuestion;
