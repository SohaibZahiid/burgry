function Widgets() {
  return (
    <section className="grid xl:grid-cols-3 gap-8 mb-32">
      <div className="flex-1 py-4 min-h-[150px] bg-yellow-500 rounded flex items-center gap-4">
        <img src="cheeseburger.png" alt="cheeseburger" width={100} />
        <div>
          <h4 className="font-bold text-4xl uppercase mb-2">Food</h4>
          <p>Lorem ipsum dolor sit.</p>
        </div>
      </div>
      <div className="flex-1 py-4 min-h-[150px] bg-green-700 rounded flex items-center gap-4">
        <img src="QCFS4BS-x.png" alt="cheeseburger" width={100} />
        <div>
          <h4 className="font-bold text-4xl uppercase mb-2">SNACK</h4>
          <p>Lorem ipsum dolor sit.</p>
        </div>
      </div>
      <div className="flex-1 py-4 min-h-[150px] bg-red-500 rounded flex items-center gap-4">
        <img src="PNNSUD7-2.png" alt="cheeseburger" width={100} />
        <div>
          <h4 className="font-bold text-4xl uppercase mb-2">BEVERAGE</h4>
          <p>Lorem ipsum dolor sit.</p>
        </div>
      </div>
    </section>
  );
}

export default Widgets;
