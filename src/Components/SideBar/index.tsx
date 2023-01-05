import React from "react";
import { Link } from "react-router-dom";
import { ImCalculator, ImMusic, ImTable2 } from "react-icons/im";

const SideBar = () => {
  const navList = [
    {
      id: 0,
      title: "Calculator",
      to: "calculator",
      icon: <ImCalculator className="mr-2" />,
    },
    {
      id: 1,
      title: "Player",
      to: "player",
      icon: <ImMusic className="mr-2" />,
    },
    {
      id: 2,
      title: "Shopper",
      to: "shopperlist",
      icon: <ImTable2 className="mr-2" />,
    },
  ];
  return (
    <div className="p-1.5 md:p-4 bg-black text-white font-semibold items-center text-center grid place-items-center">
      <ul className="flex flex-col text-justify">
        {navList.map((item, index) => (
          <Link
            className="py-2 text-xl my-1.5 flex font-new items-center md:m-3"
            to={item.to}
            key={index}
          >
            <span className="md:hidden">{item.icon}</span>
            <span className="hidden md:flex"> {item.title} </span>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
