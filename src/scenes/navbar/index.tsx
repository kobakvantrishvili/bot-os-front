import Logo from "@/assets/logo-small-transparent.png";
import Name from "@/assets/name-small-transparent.png";
import ConnectButton from "@/shared/ConnectButton";
import { SelectedPage } from "@/shared/types";
import Link from "@/scenes/navbar/Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const flexBetween = "flex items-center justify-between";
  const navbarBackground = !isTopOfPage && "drop-shadow-md";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav>
      <div
        className={`${navbarBackground} fixed top-0 z-30 w-full py-6 bg-primary-800`}
      >
        <div className={`${flexBetween} mx-auto w-5/6 gap-16`}>
          {/* LEFT SIDE */}
          <div className={`${flexBetween} gap-2`}>
            <img alt="logo" src={Logo} />
            <img alt="name" src={Name} />
          </div>

          {/* RIGHT SIDE */}
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} mx-auto gap-12`}>
                <Link
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Features"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Pricing"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <ConnectButton>Connect</ConnectButton>
              </div>
            </div>
          ) : (
            <button
              // className=" rounded-2xl bg-secondary-800 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3BottomRightIcon className="h-10 w-10" />
            </button>
          )}
        </div>
      </div>

      {/* MOBILE MENU MODEL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <motion.div
          className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-800 drop-shadow-xl"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-10 w-10 text-primary-100" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Features"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Pricing"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <div className="flex justify-center mt-10 text-2xl">
            <ConnectButton>Connect</ConnectButton>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
