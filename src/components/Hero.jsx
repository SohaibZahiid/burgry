import { PiForkKnifeFill } from "react-icons/pi";

function Hero() {
  return (
    <section
      className="flex flex-col xl:flex-row gap-12 items-center py-32"
      id="home"
    >
      <div className="flex-1 flex justify-center">
        <img
          src="N2HMMGN-2.png"
          alt="burger image"
          className="w-[400px] max-w-[500px] hover:-translate-y-5 transition-all duration-300"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-6xl font-bold mb-8">
          ENJOY BURGRY MAKE YOUR TUMMY HAPPY
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </p>
        <div className="flex gap-24 mt-16">
          <div className="flex flex-col justify-center items-center">
            <PiForkKnifeFill color="yellow" size={60} />
            <h4>Delicious</h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <PiForkKnifeFill color="yellow" size={60} />
            <h4>Fresh</h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <PiForkKnifeFill color="yellow" size={60} />
            <h4>Organic</h4>
          </div>
        </div>
        <a
          href="#"
          className="px-8 py-4 bg-yellow-400 text-black rounded block w-max mt-16"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}

export default Hero;
