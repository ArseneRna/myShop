import heroImg from "@/assets/images/hero.png";
import { Button } from "../ui/button";
const Hero = () => {
  return (
    <section className="mt-10">
      <div className="max-w-[1400px] mx-auto px-3 lg:px-10 grid grid-cols-1 lg:grid-cols-2">
        {/* contenu du hero */}
        <div className="mt-4 md:mt-8">
          <span className=" bg-orange-100 text-primary px-4 py-1 text-center items-center rounded-full">
            Meilleure qualité...
          </span>
          <h1 className="text-3xl md:text-7xl font-bold mt-4">
            Découvre la nouvelle génération de{" "}
            <span className="text-primary">sneakers</span>
          </h1>
          <p className="text-md md:text-xl mt-6 md:mt-4 text-muted-foreground max-w-[500px]">
            Confort, style et durabilité réunis pour t’accompagner à chaque pas.
          </p>
          <Button className="bg-primary mt-5 cursor-pointer">Découvrir nos offre</Button>
        </div>
        {/* Image de Hero */}
        <div>
          <img src={heroImg} alt="Hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
