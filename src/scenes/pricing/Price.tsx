import HText from "@/shared/HText";
import EyeSmall from "@/assets/alt-logo-medium-transparent-dark-yellow.png";
import Eth from "@/assets/eth.png";
import Button from "@/shared/Button";

type Props = {
  price: string;
  title: string;
};

const Price = ({ price, title }: Props) => {
  return (
    <div className="transition flex flex-col justify-center items-center min-w-[280px] h-full bg-white rounded-xl sm:w-[350px] hover:scale-105 duration-500 hover:border-primary-800 hover:border hover:shadow-lg">
      <div className="flex justify-center w-full rounded-t-xl py-8 bg-primary-800">
        <HText>{title}</HText>
      </div>
      <div className="flex flex-col justify-center items-center py-12 gap-12 sm:py-16 sm:gap-16">
        <div className="w-[120px]">
          <img alt="ethereum-img" src={EyeSmall} />
        </div>
        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="flex flex-row justify-center items-center gap-2">
            <p className=" font-montserrat text-2xl">{price}</p>
            <div className="w-[40px]">
              <img alt="ethereum-img" src={Eth} />
            </div>
          </div>

          <Button> CHOOSE </Button>
        </div>
      </div>
    </div>
  );
};

export default Price;
