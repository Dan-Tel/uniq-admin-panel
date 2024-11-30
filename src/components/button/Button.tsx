import QRIcon from "../../assets/images/QR-icon.svg";

function Button() {
  return (
    <button className="flex items-center gap-2 px-3 py-2 bg-[#1A1A1A] rounded-lg text-[15px] leading-[18px] text-white font-bold font-SFProDisplay">
      <img className="w-6 h-6" src={QRIcon} alt="QR icon" />
      QR-код
    </button>
  );
}

export default Button;
