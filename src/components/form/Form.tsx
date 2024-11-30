import uploadIcon from "../../assets/images/Upload-icon.svg";
import visibleIcon from "../../assets/images/Visible-icon.svg";
import notVisibleIcon from "../../assets/images/Not-visible-icon.svg";
import returnIcon from "../../assets/images/Return-icon.svg";
import acceptIcon from "../../assets/images/Accept-icon.svg";
import closeIcon from "../../assets/images/Close-icon.svg";
import dropdownIcon from "../../assets/images/Dropdown-icon.svg";

function Form() {
  return (
    <div className="relative flex flex-col gap-8 w-[660px] p-8 bg-white rounded-xl font-SFProDisplay">
      <button className="absolute top-2 right-2">
        <img className="w-6 h-6" src={closeIcon} alt="Close Icon" />
      </button>

      <h2 className="text-2xl leading-[26.4px] text-[#1A1A1A]">
        Создание клуба
      </h2>

      <div className="flex flex-col gap-6">
        <div className="flex gap-6">
          <div>
            <h3 className="text-sm leading-[15.4px] font-medfium text-[#5F6B88] mb-2">
              Логотип клуба
            </h3>
            <label
              htmlFor="drop-file"
              className="flex items-center justify-center gap-2 w-52 h-28 text-[#0068FF] text-[15px] leading-[18px] font-bold font-SFProDisplay border-[1px] border-[#0068FF] border-dashed rounded-lg"
            >
              <img className="w-6 h-6" src={uploadIcon} alt="Upload Icon" />
              Загрузить логотип
              <input id="drop-file" className="hidden" type="file" />
            </label>
            <p className="text-xs leading-[14.4px] text-[#AFB7CA]">
              JPG, PNG, SVG
              <br />
              Не более 600x600px, 5MB
            </p>
          </div>

          <div className="flex flex-col w-full gap-6">
            <div>
              <h3 className="text-sm leading-[15.4px] font-medium text-[#5F6B88] mb-2">
                Название клуба
              </h3>
              <input
                className="w-full outline-none bg-[#F0F3FA] px-4 py-3 text-[#AFB7CA] rounded-lg text-[15px] leading-[19.5px] font-SFProText"
                type="text"
                placeholder="Введите название клуба"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                className="w-5 h-5 border-[1px] rounded-[3px] border-[#AFB7CA] appearance-none"
                type="checkbox"
              />
              <h3 className="text-sm leading-[15.4px] font-medium text-[#5F6B88]">
                Главный клуб
              </h3>
            </div>

            <div>
              <h3 className="text-sm leading-[15.4px] font-medium text-[#5F6B88] mb-2">
                Администратор клуба
              </h3>

              <div className="relative">
                <select className="mb-4 form-select flex items-center w-full h-[62px] outline-none bg-[#F0F3FA] bg-no-repeat appearance-none px-4 py-3 text-[#AFB7CA] rounded-lg text-[15px] leading-[19.5px] font-SFProText">
                  <option value="">Выберите главного администратора</option>
                  <option value="">Наймите меня</option>
                  <option value="">Наймите меня</option>
                  <option value="">Наймите меня</option>
                </select>

                <img
                  className="absolute top-[50%] translate-y-[-50%] right-4"
                  src={dropdownIcon}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm leading-[15.4px] font-medium text-[#5F6B88] mb-2">
            Краткое описание
          </h3>

          <div className="flex flex-col">
            <textarea
              className="w-full h-[119px] outline-none bg-[#F0F3FA] px-4 py-3 text-[#AFB7CA] rounded-lg text-[15px] leading-[19.5px] font-SFProText"
              placeholder="Текст описания"
            ></textarea>

            <p className="text-xs leading-[14.4px] text-[#AFB7CA] ml-4">
              0/300
            </p>
          </div>
        </div>

        <div className="flex gap-[10px]">
          <div className="flex-1">
            <h3 className="text-sm leading-[15.4px] font-medium text-[#5F6B88] mb-2">
              Категория
            </h3>
            <input
              className="w-full outline-none bg-[#F0F3FA] px-4 py-3 text-[#AFB7CA] rounded-lg text-[15px] leading-[19.5px] font-SFProText"
              type="text"
            />
          </div>

          <div>
            <h3 className="text-sm leading-[15.4px] font-medium text-[#5F6B88] mb-2">
              Видимость
            </h3>

            <div className="flex gap-1 outline-none bg-[#F0F3FA] p-[3px] border-[1px] border-[#AFB7CA] rounded-lg font-SFProText">
              <button className="flex items-center gap-2 bg-[#0068FF] px-4 py-2 rounded-md text-white text-[15px] leading-[19.5px]">
                <img
                  className="w-[19px] h-[19px]"
                  src={visibleIcon}
                  alt="Visible Icon"
                />
                Видимый
              </button>

              <button className="flex items-center gap-2 px-4 py-2 rounded-md text-[#0068FF] text-[15px] leading-[19.5px]">
                <img
                  className="w-[19px] h-[19px]"
                  src={notVisibleIcon}
                  alt="Not visible Icon"
                />
                Заблокирован
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex items-center justify-center gap-2 flex-1 py-3 bg-[#5F6B88] rounded-lg text-white text-[15px] leading-[18px]">
          <img className="w-6 h-6" src={returnIcon} alt="Return Icon" />
          Вернуться
        </button>

        <button className="flex items-center justify-center gap-2 flex-1 py-3 bg-[#3BBC30] rounded-lg text-white text-[15px] leading-[18px]">
          <img className="w-6 h-6" src={acceptIcon} alt="Accept Icon" />
          Создать клуб
        </button>
      </div>
    </div>
  );
}

export default Form;
