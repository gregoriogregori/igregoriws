


const Sedi = () => {
    return ( 
    <section id="sedi" className="bg-slate-900  h-full font-bold text-slate-900">
    <div className="border-b border-yellow-600">
        <div className="flex justify-center items-center pt-8">
            <p className=" text-white text-2xl">VIENI A TROVARCI</p>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly items-center p-8 text-xl">
            <div id="sedi1" className="h-[300px] max-w-[350px] flex items-end justify-end rounded-xl">
                <p className="bg-white bg-opacity-75 w-full text-center p-4">Via Marghera 22, Milano</p>
            </div>
            <div id="sedi2" className="h-[300px] max-w-[350px] flex items-end justify-end mt-4 md:mt-0 rounded-xl">
                <p className="bg-white bg-opacity-75 w-full text-center p-4">Piazza Dergano 5, Milano</p>
            </div>
        </div>
    </div>

    </section> );
}
 
export default Sedi;