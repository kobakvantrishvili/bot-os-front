import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ConnectButton = ({ children }: Props) => {
  const toggleChooseWalletScreen = () => {};

  return (
    <button
      className="transition rounded-md font-montserrat bg-secondary-800 px-10 py-2  hover:bg-tertiary-800 hover:text-white hover:scale-105 duration-300"
      onClick={() => toggleChooseWalletScreen()}
    >
      {children}
    </button>
  );
};

export default ConnectButton;
