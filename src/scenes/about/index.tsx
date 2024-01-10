import { SelectedPage } from "@/shared/types";
import Logo from "@/assets/logo-large-transparent-flipped.png";
import Name from "@/assets/name-large-transparent.png";
import { motion } from "framer-motion";
import ConnectButton from "@/shared/ConnectButton";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  const flexSetup = "flex items-center md:justify-between justify-center";

  return (
    <section id={`${SelectedPage.About}`} className="bg-primary-800 py-32">
      <motion.div
        className={`${flexSetup} w-5/6 flex-wrap-reverse mx-auto gap-12`}
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      >
        {/* IMAGE */}
        <div className="flex md:basis-5/12 justify-center md:z-10 md:justify-items-end">
          <img
            className="object-cover max-h-[450px]"
            alt="Logo"
            src={Logo}
          ></img>
        </div>

        {/* ABOUT */}
        <div className="z-10 md:basis-5/12">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 75 },
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
            className="mt-8 flex justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // it triggers when I see 50% of the div
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ConnectButton>
              <p className={`${flexSetup}`}>
                Get Started &nbsp;
                <ArrowLongRightIcon className="h-6 w-6" />
              </p>
            </ConnectButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
