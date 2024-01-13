import HText from "@/shared/HText";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import ListItem from "./ListItem";

type Props = {
  isLeftToRight: boolean;
  image: string;
  title: ReactNode;
  description: string;
  listItems: Array<string>;
};

const Feature = (props: Props) => {
  return (
    <div
      className={`flex flex-col-reverse justify-center gap-12 md:w-full md:items-center md:gap-24 md:flex-row ${
        !props.isLeftToRight && "md:flex-row-reverse flex-col"
      }`}
    >
      {/* IMAGE */}
      <div className="flex justify-center items-center z-10 p-2 w-full bg-primary-100 rounded-xl border-2 border-primary-800 md:basis-2/5 md:min-w-[400px] sm:p-8">
        <img className="rounded-md" alt="feature1-graphic" src={props.image} />
      </div>

      {/* DESCRIPTION */}
      <div className="basis-2/5 flex flex-col items-start justify-center">
        {/* TITLE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <HText>{props.title}</HText>
        </motion.div>
        {/* DESCRIPT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="my-5 text-left">{props.description}</p>
          <ul className="gap-4 flex flex-col">
            {props.listItems.map((listItem: string) => (
              <ListItem>{listItem}</ListItem>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;
