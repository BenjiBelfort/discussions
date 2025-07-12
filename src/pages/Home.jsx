import { RiSpeakFill } from "react-icons/ri";
import { FaHeart, FaReact } from "react-icons/fa";
import { GiBilledCap, GiVomiting } from "react-icons/gi";

import Card from "../components/Card";

const Home = () => {
  const cards = [
    { icon: RiSpeakFill, label: "Discussions", path: "/discussions" },
    { icon: FaHeart, label: "Amour", path: "/amour" },
    { icon: FaReact, label: "Résoudre", path: "/resoudre" },
    { icon: GiBilledCap, label: "Ado", path: "/ado" },
    { icon: GiVomiting, label: "Trash", path: "/trash" },
  ];

  return (
    <section className="min-h-screen flex justify-center items-center flex-wrap gap-8 px-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          label={card.label}
          path={card.path}
        />
      ))}
    </section>
  );
};

export default Home;
