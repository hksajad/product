"use client";
import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaBars, FaTwitter, FaTimes } from "react-icons/fa";
import './navbar.css'
const Navbar = () => {
  const [OpenMenu, setOpenMenu] = useState(false);
  return (
    <main className="navbar flex justify-between items-center my-5 max-lg:flex-col">
      {/* right nav */}
      <nav className="right_nav w-[50%] flex justify-between items-center max-lg:w-[100%] max-lg:flex-row-reverse">
        {/* logo */}
        <div className="logo_page">
          <h1 className="font-bold text-[#303030] font-mono">Online-shop</h1>
        </div>
        {/* menu */}
        <div
          className="nav_toogle md:hidden cursor-pointer text-[25px] text-[#303030]"
          onClick={() => setOpenMenu(!OpenMenu)}
        >
          {OpenMenu ? <FaTimes /> : <FaBars />}
        </div>
        {/* className="menu flex items-center gap-5 flex-1 mr-10 max-lg:flex-none max-md:hidden max-lg:mr-0" */}
        <ul className={
            OpenMenu
              ? "menu flex gap-[27px] items-center flex-1 justify-start mr-5"
              : "menu flex gap-[27px] items-center flex-1 justify-start mr-5 max-[768px]:hidden"
          }>
          <li className="text-[#303030] font-bold text-[20px]">
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li className="text-[#303030] font-bold text-[20px]">
            <Link href="/">فروشگاه</Link>
          </li>
          <li className="text-[#303030] font-bold text-[20px]">
            <Link href="/">درباره ما</Link>
          </li>
          <li className="text-[#303030] font-bold text-[20px]">
            <Link href="/">تماس با ما</Link>
          </li>
        </ul>
      </nav>
      {/* left_nav */}
      <nav className="left_nav w-[50%] flex items-center gap-5 max-lg:mt-5 max-lg:w-full max-lg:gap-2">
        {/* search */}
        <form className="flex justify-between gap-4 bg-[#e9ecef] py-2 rounded-md flex-1 px-3">
          <input
            type="text"
            placeholder="جستجو کنید..."
            className="flex-1 bg-transparent outline-none"
          />
          <button className="cursor-pointer">
            <CiSearch />
          </button>
        </form>
        {/* login */}
        <div className="login">
          <Link href="login-page">
            <FaUser className="cursor-pointer text-[#303030]" />
          </Link>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
