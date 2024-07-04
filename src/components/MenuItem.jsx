function MenuItem({ id, title, desc, price, image, category, activeCategory }) {
  return (
    <>
      {category === activeCategory && (
        <article key={id} className="flex flex-col gap-4">
          <div className="min-h-[250px] bg-gray-800 rounded p-8 flex justify-center items-center hover:bg-yellow-400 transition-all duration-300">
            <img
              src={`menu/${image}`}
              alt={title}
              className="w-[150px] hover:scale-110 transition-all duration-300"
            />
          </div>
          <div>
            <h4 className="font-bold text-2xl mb-2">{title}</h4>
            <p>{desc}</p>
          </div>
          <h4 className="font-bold text-2xl text-yellow-400">{price}€</h4>
        </article>
      )}
    </>
  );
}

export default MenuItem;
