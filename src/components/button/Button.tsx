import QRIcon from "../../assets/images/QR-icon.svg";

function Button() {
  return (
    <button className="flex gap-2 px-3 py-2 bg-black text-white font-bold font-SFProDisplay rounded-lg">
      <img className="w-6 h-6" src={QRIcon} alt="QR icon" />
      QR-код
    </button>
  );
}

export default Button;
