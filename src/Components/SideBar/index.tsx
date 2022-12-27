import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const navList = [
    { id: 0, title: "Calculator", to: "calculator" },
    { id: 1, title: "Player", to: "player" },
    { id: 2, title: "Shopper", to: "shopperlist" },
  ];
  return (
    <div className="p-4 bg-red-700 items-center text-center grid place-items-center">
      <ul className="flex flex-col text-justify">
        {navList.map((item, index) => (
          <Link className="py-2" to={item.to} key={index}>
            {item.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
