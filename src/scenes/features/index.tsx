import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Feature1 from "@/assets/feature1.png";
import Feature2 from "@/assets/feature2.png";
import Feature3 from "@/assets/feature3.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Features = ({ setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <section id={`${SelectedPage.Features}`}>
      <motion.div
        className={`${flexBetween} w-5/6 mx-auto`}
        onViewportEnter={() => setSelectedPage(SelectedPage.Features)}
      >
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-center md:mt-32 gap-20 md:flex">
          {/* IMAGE */}
          <motion.div
            className="flex md:basis-5/6 justify-center md:z-10 md:justify-items-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img alt="feature1-graphic" src={Feature1} />
          </motion.div>

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <motion.div
              className="md:my-5 md:w-3/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <HText>
                MILLIONS OF HAPPY MEMBERS GETTING{" "}
                <span className="text-primary-500">FIT</span>.
              </HText>
            </motion.div>
            {/* DESCRIPT */}
            <motion.div
              className="md:my-5 md:w-3/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Nisl condimentum id venenatis a. Pellentesque eu tincidunt
                tortor aliquam nulla facilisi. Nisl nunc mi ipsum faucibus
                vitae. Nec nam aliquam sem et tortor consequat id porta nibh.
                Congue eu consequat ac felis donec et odio pellentesque diam.
                Augue ut lectus arcu bibendum at varius vel pharetra. Aenean
                pharetra magna ac placerat vestibulum lectus mauris ultrices.{" "}
              </p>
              <p className="mb-5">
                Eget velit aliquet sagittis id consectetur purus ut faucibus.
                Tristique senectus et netus et malesuada fames ac. Porttitor
                rhoncus dolor purus non enim praesent elementum facilisis.
                Convallis a cras semper auctor neque. Diam quis enim lobortis
                scelerisque.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
