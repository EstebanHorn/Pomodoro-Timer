export default function History() {
  return (
    <div className="bg-[#004280] rounded-xl shadow-lg p-5 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-white">Sesiones completadas</h1>
      <ul className="w-full">
        <li className=" px-40 border-t-2 mt-5 flex flex-col items-center">
            <section className="flex justify-between mt-5 w-full">
                <div className="flex flex-col justify-center items-center ">
            <h1 className="text-2xl font-bold text-white ">Pomodoro</h1>
            <h2 className="text-white font-mono text-5xl font-bold  rounded-xl">
              35:00
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-white ">Descanso</h1>
            <h2 className="text-white font-mono text-5xl font-bold  rounded-xl">
              10:00
            </h2>
          </div>
            </section>
          
          <button className="text-white text-2xl font-bold bg-[#002649] p-2 px-5 rounded-xl hover:bg-[#012C55] w-min">
            Repetir
          </button>
        </li>
      </ul>
    </div>
  );
}
