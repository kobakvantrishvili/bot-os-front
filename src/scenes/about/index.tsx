import { SelectedPage } from "@/shared/types";
import Logo from "@/assets/logo-large-transparent-flipped.png";
import Security from "@/assets/security.png";
import Speed from "@/assets/speed.png";
import Intuitivity from "@/assets/intuitivity.png";
import Name from "@/assets/name-large-transparent.png";
import { motion } from "framer-motion";
import Button from "@/shared/Button";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  const flexSetup = "flex items-center md:justify-between justify-center";
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id={`${SelectedPage.About}`}
      className="bg-primary-800 md:h-full py-10"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
        className={`${flexSetup} w-5/6 flex-wrap-reverse mx-auto gap-12 md:h-5/6`}
      >
        {/* IMAGE */}
        <motion.div
          className="flex md:basis-5/12 justify-center md:z-10 md:justify-items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img className="object-cover max-h-[450px]" alt="Logo" src={Logo} />
        </motion.div>

        {/* ABOUT */}
        <div className="z-10 md:basis-5/12 mt-20 md:mt-0">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img alt="Name" src={Name} />
            <p className="mt-8 text-base text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. At
              varius vel pharetra vel turpis nunc eget lorem dolor. Sed augue
              lacus viverra vitae congue. Id venenatis a condimentum vitae
              sapien pellentesque habitant. Enim eu turpis egestas pretium. Sed
              augue lacus viverra vitae congue. Id venenatis a condimentum vitae
              sapien pellentesque habitant. Enim eu turpis egestas pretium.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // it triggers when I see 50% of the div
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Button>
              <p className={`${flexSetup}`}>
                Get Started &nbsp;
                <ArrowLongRightIcon className="h-6 w-6" />
              </p>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-300">
          <div className="mx-auto w-5/6">
            <motion.div
              className="h-[150px] flex w-3/5 items-center gap-32 justify-between font-montserrat text-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} // it triggers when I see 50% of the div
              transition={{ delay: 0.3, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="flex items-center gap-8">
                <img className="max-h-[80px]" alt="speed-logo" src={Speed} />
                <p>Fast</p>
              </div>
              <div className="flex items-center gap-8">
                <img
                  className="max-h-[80px]"
                  alt="security-logo"
                  src={Security}
                />
                <p>Secure</p>
              </div>
              <div className="flex items-center gap-8">
                <img
                  className="max-h-[80px]"
                  alt="intuitivity-logo"
                  src={Intuitivity}
                />
                <p>Intuitive</p>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
