import arrowUpIcon from "../../assets/images/Arrow-up-icon.svg";
import hourglassIcon from "../../assets/images/Hourglass-icon.svg";
import editIcon from "../../assets/images/Edit-icon.svg";
import deleteIcon from "../../assets/images/Delete-icon.svg";
import warningIcon from "../../assets/images/Warning-icon.svg";
import moreDetailsIcon from "../../assets/images/More-details-icon.svg";
import dropdownIcon from "../../assets/images/Dropdown-icon.svg";
import declineIcon from "../../assets/images/Decline-icon.svg";
import messageIcon from "../../assets/images/Message-icon.svg";
import avatar1 from "../../assets/images/Avatar-1.svg";
import avatar2 from "../../assets/images/Avatar-2.svg";
import avatar3 from "../../assets/images/Avatar-3.svg";

function Table() {
  return (
    <div className="flex gap-4 w-[1276px] h-[868px] bg-white p-4 pr-2 rounded-xl">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 p-2 bg-[#F0F3FA80] rounded-xl">
          <div className="flex items-center gap-4 p-4 text-[15px] leading-[19.5px] font-medium font-SFProDisplay">
            <button className="flex items-center justify-center w-9 h-9 rounded-md bg-[#0068FF]">
              <img className="w-6 h-6" src={arrowUpIcon} alt="Arrow Up Icon" />
            </button>

            <h3 className="w-[340px] text-[#1A1A1A]">
              Дело №1. Распитие алкоголя в университете 19.11.2024
            </h3>

            <div className="flex items-center gap-2 w-[180px] text-[#AFB7CA]">
              <img
                className="w-6 h-6"
                src={hourglassIcon}
                alt="Hourglass Icon"
              />
              На рассмотрении
            </div>

            <div className="w-[150px] text-[#5F6B88]">
              Выговоров в деле: <span className="text-[#1A1A1A]">3</span>
            </div>

            <div className="flex gap-2 flex-grow justify-end">
              <button className="flex items-center gap-2 px-4 py-[6px] text-[#5F6B88] border-[1px] border-[#AFB7CA] rounded-lg">
                <img className="w-6 h-6" src={editIcon} alt="Edit Icon" />
                Редактировать
              </button>

              <button className="flex items-center gap-2 px-4 py-[6px] text-[#F12D2D] border-[1px] border-[#F12D2D] rounded-lg">
                <img className="w-6 h-6" src={deleteIcon} alt="Edit Icon" />
                Удалить
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg text-[#5F6B88] font-SFProDisplay">
            <div className="flex gap-8 p-4 text-sm leading-[15.4px] font-medium">
              <h4 className="w-[350px]">Тип выговора</h4>
              <h4 className="w-[220px]">Студент</h4>
              <h4 className="w-[200px] text-center">Дата создания</h4>
              <h4 className="w-[140px]">Статус</h4>
            </div>

            <div className="flex items-center gap-8 px-4 py-3 border-t-[1px] border-t-[#F0F3FA] text-[15px] leading-[19.5px]">
              <h4 className="w-[350px] text-[#1A1A1A]">
                Распитие алкоголя в университете
              </h4>

              <div className="flex items-center gap-3 w-[220px] text-[#1A1A1A]">
                <img src={avatar1} alt="Аружан Барушева" />
                Аружан Барушева
              </div>

              <h4 className="w-[200px] text-center">14.11.2024</h4>

              <div className="flex items-center gap-2 w-[140px] text-[#F58500]">
                <img className="w-6 h-6" src={warningIcon} alt="Warning Icon" />
                Действует
              </div>

              <button className="flex items-center gap-2 px-4 py-[6px] border-[1px] border-[#AFB7CA] rounded-lg">
                <img
                  className="w-6 h-6"
                  src={moreDetailsIcon}
                  alt="More Details Icon"
                />
                Подробнее
              </button>
            </div>

            <div className="flex items-center gap-8 px-4 py-3 border-t-[1px] border-t-[#F0F3FA] text-[15px] leading-[19.5px]">
              <h4 className="w-[350px] text-[#1A1A1A]">
                Распитие алкоголя в университете
              </h4>

              <div className="flex items-center gap-3 w-[220px] text-[#1A1A1A]">
                <img src={avatar2} alt="Аманай Балат" />
                Аманай Балат
              </div>

              <h4 className="w-[200px] text-center">14.11.2024</h4>

              <div className="flex items-center gap-2 w-[140px] text-[#F58500]">
                <img className="w-6 h-6" src={warningIcon} alt="Warning Icon" />
                Действует
              </div>

              <button className="flex items-center gap-2 px-4 py-[6px] border-[1px] border-[#AFB7CA] rounded-lg">
                <img
                  className="w-6 h-6"
                  src={moreDetailsIcon}
                  alt="More Details Icon"
                />
                Подробнее
              </button>
            </div>

            <div className="flex items-center gap-8 px-4 py-3 border-t-[1px] border-t-[#F0F3FA] text-[15px] leading-[19.5px]">
              <h4 className="w-[350px] text-[#1A1A1A]">
                Распитие алкоголя в университете
              </h4>

              <div className="flex items-center gap-3 w-[220px] text-[#1A1A1A]">
                <img src={avatar3} alt="Данила Дементьев" />
                Данила Дементьев
              </div>

              <h4 className="w-[200px] text-center">14.11.2024</h4>

              <div className="flex items-center gap-2 w-[140px] text-[#F58500]">
                <img className="w-6 h-6" src={warningIcon} alt="Warning Icon" />
                Действует
              </div>

              <button className="flex items-center gap-2 px-4 py-[6px] border-[1px] border-[#AFB7CA] rounded-lg">
                <img
                  className="w-6 h-6"
                  src={moreDetailsIcon}
                  alt="More Details Icon"
                />
                Подробнее
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-2 bg-[#F0F3FA80] rounded-xl">
          <div className="flex items-center gap-4 p-4 text-[15px] leading-[19.5px] font-medium font-SFProDisplay">
            <button className="flex items-center justify-center w-9 h-9 rounded-md border-[1px] border-[#AFB7CA]">
              <img className="w-6 h-6" src={dropdownIcon} alt="Arrow Up Icon" />
            </button>

            <h3 className="w-[340px] text-[#1A1A1A]">
              Дело №2. Курение 19.11.2024
            </h3>

            <div className="flex items-center gap-2 w-[180px] text-[#F12D2D]">
              <img className="w-6 h-6" src={declineIcon} alt="Decline Icon" />
              Отклонено
              <button className="flex items-center justify-center w-6 h-6 bg-[#F0F3FA] rounded-md">
                <img className="w-5 h-5" src={messageIcon} alt="Message Icon" />
              </button>
            </div>

            <div className="w-[150px] text-[#5F6B88]">
              Выговоров в деле: <span className="text-[#1A1A1A]">1</span>
            </div>

            <div className="flex gap-2 flex-grow justify-end">
              <button className="flex items-center gap-2 px-4 py-[6px] text-[#5F6B88] border-[1px] border-[#AFB7CA] rounded-lg">
                <img className="w-6 h-6" src={editIcon} alt="Edit Icon" />
                Редактировать
              </button>

              <button className="flex items-center gap-2 px-4 py-[6px] text-[#F12D2D] border-[1px] border-[#F12D2D] rounded-lg">
                <img className="w-6 h-6" src={deleteIcon} alt="Edit Icon" />
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[6px] h-full bg-[#F0F3FA80] rounded-full overflow-hidden">
        <div className="w-full h-[301px] bg-[#E4E8F2]"></div>
      </div>
    </div>
  );
}

export default Table;
