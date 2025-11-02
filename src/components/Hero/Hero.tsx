import heroImg from "@/assets/images/hero.png";
import { Button } from "../ui/button";
const Hero = () => {
  return (
    <section className="mt-6">
      <div className="max-w-[1400px] mx-auto px-3 lg:px-10 grid grid-cols-1 lg:grid-cols-2">
        {/* contenu du hero */}
        <div>
          <span className=" bg-orange-100 text-primary px-5 py-1 text-center items-center rounded-full">
            Meilleure qualité...
          </span>
          <h1 className="text-5xl md:text-7xl font-bold">
            Découvre la nouvelle génération de{" "}
            <span className="text-primary">sneakers</span>
          </h1>
          <p className="text-xl mt-6 text-muted-foreground">
            Confort, style et durabilité réunis pour t’accompagner à chaque pas.
          </p>
          <Button className="bg-primary mt-5">Découvrir nos offre</Button>
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
