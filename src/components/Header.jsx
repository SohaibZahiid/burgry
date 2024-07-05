function header() {
  const links = [
    {
      id: 1,
      name: "home",
    },
    {
      id: 2,
      name: "about",
    },
    {
      id: 3,
      name: "menu",
    },
    {
      id: 4,
      name: "contact",
    },
  ];

  return (
    <header className="flex justify-between items-center h-20">
      <h2 className="font-bold text-4xl text-white uppercase">
        Bur<span className="text-yellow-400">gry</span>
      </h2>
      <ul className="gap-12 text-md hidden md:flex">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.name}`}
              className="capitalize hover:text-yellow-400 transition-all"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default header;
