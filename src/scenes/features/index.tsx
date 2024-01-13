import { FeatureType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Feature from "./Feature";
import { featuresArray } from "./featuresArray";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Features = ({ setSelectedPage }: Props) => {
  return (
    <section
      id={`${SelectedPage.Features}`}
      className="w-5/6 mx-auto py-20 min-h-full"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Features)}
      >
        {/* MAIN TITLE */}
        <motion.div
          className="flex justify-center py-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="font-montserrat text-6xl sm:text-8xl">FEATURES</p>
        </motion.div>

        <div className="flex flex-col items-center gap-16 py-10">
          {/* GRAPHICS AND DESCRIPTION */}
          {featuresArray.map((feature: FeatureType) => (
            <Feature
              isLeftToRight={feature.isLeftToRight}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              listItems={feature.listItems}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
