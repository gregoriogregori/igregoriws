const Sedi = () => {
  return (
    <section id="sedi" className="bg-slate-900 h-full font-bold text-slate-900">
      <div className="border-b border-yellow-600">
        <div className="flex justify-center items-center pt-8">
          <p className="text-white text-3xl font-normal">VIENI A TROVARCI</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8 items-center p-8 text-xl">
          <a
            href="https://goo.gl/maps/efygMvXhfqDiTK9C6"
            target="_blank"
            id="sedi1"
            className="block h-[300px] max-w-[350px] flex items-end justify-end rounded-xl"
          >
            <div className="bg-white bg-opacity-75 rounded-b-xl">
              <p className="w-full text-center p-4">Via Marghera 22, Milano</p>
            </div>
          </a>
          <a
            href="https://goo.gl/maps/g5gpzGkdkh2JYB2o8"
            target="_blank"
            id="sedi2"
            className="block h-[300px] max-w-[350px] flex items-end justify-end mt-4 md:mt-0 rounded-xl"
          >
            <div className="bg-white bg-opacity-75 rounded-b-xl">
              <p className=" w-full text-center p-4">
                Piazza Dergano 5, Milano
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sedi;
