function Promos() {
  return (
    <section className="flex flex-col md:flex-row gap-8 mb-32">
      <article className="flex flex-col-reverse items-center xl:flex-row bg-gray-800 p-8 rounded gap-8">
        <div className="">
          <small className="text-yellow-400">Payday promo</small>
          <h4 className="font-bold text-2xl uppercase mb-2">
            GET A 10% DISCOUNT ON PAYDAY WEEK
          </h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <img
            src="flying-burger-isolated-on-white-background.png"
            alt="burger"
            className="w-[200px] hover:-translate-y-2 transition-all duration-300"
          />
        </div>
      </article>
      <article className="flex flex-col-reverse items-center xl:flex-row bg-gray-800 p-8 rounded gap-8">
        <div>
          <small className="text-yellow-400">Payday promo</small>
          <h4 className="font-bold text-2xl uppercase mb-2">
            BUY 1 COKE GET MORE FREE 1 COKE
          </h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <img
            src="P44F4RZ-1.png"
            alt="burger"
            className="w-[200px] hover:-translate-y-2 transition-all duration-300"
          />
        </div>
      </article>
    </section>
  );
}

export default Promos;
