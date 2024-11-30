import avatar from "../../assets/images/Avatar-2.svg";

function Card() {
  return (
    <div className="inline-flex flex-col gap-11 pt-7 pl-6 pb-6 pr-4 rounded-xl bg-white text-slate-500 font-medium font-SFProDisplay">
      <p className="text-sm leading-none">Последний преподаватель</p>

      <div className="flex items-center gap-3">
        <img className="w-10 h-10" src={avatar} alt="Байрамов Б.О." />

        <div className="gap-1">
          <p className="text-base leading-4">Байрамов Б.О.</p>
          <p className="text-xs leading-4 text-gray-400 font-normal font-SFProText">
            08.07.2024&ensp;10:00-11:00
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
