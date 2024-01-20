import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Price from "./Price";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Pricing = ({ setSelectedPage }: Props) => {
  return (
    <section
      id={`${SelectedPage.Pricing}`}
      className="bg-primary-100 py-10 mt-10"
    >
      <motion.div
        className="w-5/6 mx-auto"
        onViewportEnter={() => setSelectedPage(SelectedPage.Pricing)}
      >
        {/* MAIN TITLE */}
        <motion.div
          className="flex justify-center py-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative">
            <div className="before:absolute before:-bottom-8 before:-left-12 before:content-abstractwaves">
              <p className="font-montserrat text-6xl sm:text-8xl">PRICING</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center gap-24 py-10 flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Price price="0.05" title="1 Week Access" />
          <Price price="0.2" title="1 Month Access" />
          <Price price="1" title="1 Year Access" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Pricing;
