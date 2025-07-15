import Card from "../components/Card";
import { questionPages } from "../routes/questionPages";

const Home = () => {
  return (
    <section className="min-h-screen flex justify-center items-center px-4">
      <div className="grid grid-cols-1 gap-[10px] md:grid-cols-3 md:gap-7 max-w-6xl mx-auto">
        {questionPages.map(({ icon, label, path }, index) => (
          <Card key={index} icon={icon} label={label} path={path} />
        ))}
      </div>
    </section>
  );
};

export default Home;