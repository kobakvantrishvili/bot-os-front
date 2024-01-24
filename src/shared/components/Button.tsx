import { ReactNode } from "react";
import { connectWallet } from "../helpers";

type Props = {
  children: ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <button
      className="transition rounded-md font-montserrat bg-secondary-800 px-10 py-2  hover:bg-tertiary-800 hover:text-white hover:scale-105 duration-300"
      onClick={() => connectWallet()}
    >
      {children}
    </button>
  );
};

export default Button;
