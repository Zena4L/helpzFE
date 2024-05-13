import React from "react";
import { HiHome, HiUserGroup } from "react-icons/hi";
import { BsCalendar2Event, BsChat } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import ButtonPrimary from "./ButtonPrimary";

const NavBar: React.FC = () => {
  return (
    <div className=" bg-white border-indigo-200 border-b-2  ">
      <div className="container flex  w-full md:w-auto mx-auto text-center  items-center px-7 py-5">
        <Logo text="HELPz" />
        <ul className="flex gap-4 mx-auto w-[1360px] items-center justify-center">
          <li className="flex group">
            <NavLink
              to="/"
              className="flex  justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
            >
              <span className="block px-1 pt-1 pb-1">
                <HiHome className="mx-auto" />
                <span className="block text-xs pb-2">Home</span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
              </span>
            </NavLink>
          </li>
          <li className="flex group ">
            <NavLink
              to="/events"
              className="flex justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
            >
              <span className="block px-1 pt-1 pb-1">
                <BsCalendar2Event className="mx-auto" />
                <span className="block text-xs pb-2">Events</span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
              </span>
            </NavLink>
          </li>
          <li className="flex group ">
            <NavLink
              to="/community"
              className="flex justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
            >
              <span className="block px-1 pt-1 pb-1">
                <HiUserGroup className="mx-auto" />
                <span className="block text-xs pb-2">Community</span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
              </span>
            </NavLink>
          </li>
          <li className="flex group">
            <SearchBar />
          </li>

          <li className="flex group">
            <NavLink
              to="/chat"
              className="flex justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
            >
              <span className="block px-1 pt-1 pb-1">
                <BsChat className="mx-auto" />
                <span className="block text-xs pb-2">Message</span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
              </span>
            </NavLink>
          </li>
          <li className="flex group ">
            <NavLink
              to="/notification"
              className="flex  justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
            >
              <span className="block px-1 pt-1 pb-1">
                <IoIosNotificationsOutline className="mx-auto" />
                <span className="block text-xs pb-2">Notification</span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/me">
              <img
                alt="tania andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                className="relative inline-block h-[40px] w-[40px] cursor-pointer rounded object-cover object-center"
                data-popover-target="profile-menu"
              />

              <span className="mx-3 text-gray-400">Clement</span>
            </NavLink>
          </li>
          <li>
            <ButtonPrimary text="Signup" path="/signup" />
          </li>
          <li>
            <ButtonPrimary text="Login" path="/login" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
