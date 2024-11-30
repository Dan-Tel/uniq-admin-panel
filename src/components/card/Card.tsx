import avatar from "../../assets/images/Avatar-2.svg";

function Card() {
  return (
    <div className="inline-flex flex-col gap-11 pt-[27px] pl-6 pb-6 pr-4 bg-white rounded-xl text-sm leading-[15.4px] text-[#5F6B88] font-medium font-SFProDisplay">
      <p className="text-sm leading-none">Последний преподаватель</p>

      <div className="flex items-center gap-3">
        <img className="w-10 h-10" src={avatar} alt="Байрамов Б.О." />

        <div className="flex flex-col gap-1">
          <p className="text-base leading-4">Байрамов Б.О.</p>
          <p className="text-xs leading-4 text-[#AFB7CA] font-normal font-SFProText">
            08.07.2024&ensp;10:00-11:00
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
