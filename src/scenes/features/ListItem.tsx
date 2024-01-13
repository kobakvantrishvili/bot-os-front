import { CheckIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ListItem = ({ children }: Props) => {
  return (
    <li className="flex flex-row gap-4 justify-start items-center">
      <div className=" bg-primary-100 p-1 rounded-full border border-primary-800">
        <CheckIcon className="h-5 w-5 text-primary-800" />
      </div>
      <p>{children}</p>
    </li>
  );
};

export default ListItem;
