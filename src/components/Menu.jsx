import { useState } from "react";
import MenuItem from "./MenuItem";

const data = [
  {
    id: 1,
    title: "REGULAR BEEF BURGER",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 42.0,
    image: "PX7A955.png",
    category: "food",
  },
  {
    id: 2,
    title: "BLACK BEEF BURGER",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 45.0,
    image: "P6GMEWP-x.png",
    category: "food",
  },
  {
    id: 3,
    title: "BIG MEETY",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 15.0,
    image: "PEDKKTH.png",
    category: "food",
  },
  {
    id: 4,
    title: "CHICKEN BURGER",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 15.0,
    image: "ZXDPWRF.png",
    category: "food",
  },
  {
    id: 5,
    title: "FRENCH FRIES",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 15.0,
    image: "PW7Q8J6.png",
    category: "snack",
  },
  {
    id: 6,
    title: "BEEF CHEESE BURGER",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 15.0,
    image: "5K4DHPU.png",
    category: "snack",
  },
  {
    id: 7,
    title: "COLA",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 15.0,
    image: "P44F4RZ-1.png",
    category: "beverage",
  },
  {
    id: 8,
    title: "SWEET SMOOTHIE",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 15.0,
    image: "PNNSUD7-2.png",
    category: "beverage",
  },
];

function Menu() {
  const [activeCategory, setActiveCategory] = useState("food");
  const buttons = ["food", "snack", "beverage"];

  return (
    <section className="mb-16" id="menu">
      <h2 className="font-bold text-4xl text-center mb-8">Our best menu</h2>
      <p className="text-center max-w-[600px] mx-auto">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa.
      </p>
      <div>
        <div className="flex justify-center gap-8 mb-10">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => setActiveCategory(btn)}
              className={`flex-1 md:flex-none w-40 px-8 py-4 rounded block mt-16  capitalize
                ${
                  activeCategory === btn
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-800 text-white"
                }`}
            >
              {btn}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
          {data.map((item) => (
            <MenuItem key={item.id} {...item} activeCategory={activeCategory} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
