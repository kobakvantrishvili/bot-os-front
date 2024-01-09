type Props = {
  children: string;
};

const ConnectButton = ({ children }: Props) => {
  const toggleChooseWalletScreen = () => {};

  return (
    <button
      className="rounded-md font-montserrat bg-secondary-800 px-10 py-2 hover:bg-tertiary-800 hover:text-white"
      onClick={() => toggleChooseWalletScreen()}
    >
      {children}
    </button>
  );
};

export default ConnectButton;
