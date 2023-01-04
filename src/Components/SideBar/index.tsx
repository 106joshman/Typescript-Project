import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const navList = [
    { id: 0, title: "Calculator", to: "calculator" },
    { id: 1, title: "Player", to: "player" },
    { id: 2, title: "Shopper", to: "shopperlist" },
  ];
  return (
    <div className="p-4 bg-black text-white font-semibold items-center text-center grid place-items-center">
      <ul className="flex flex-col text-justify">
        {navList.map((item, index) => (
          <Link className="py-2 text-xl my-1.5 font-new md:m-3" to={item.to} key={index}>
            {item.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
