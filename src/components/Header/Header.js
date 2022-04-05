import React from "react";
import { useLocation } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  let p;
  if (
    pathname === "/" ||
    pathname === "/home" ||
    pathname === "/about" ||
    pathname === "/review" ||
    pathname === "/dashboard" ||
    pathname === "/blog"
  ) {
    p = true;
  } else {
    p = false;
  }
  return (
    <div className="mb-10">
      <nav
        style={p ? { display: "flex" } : { display: "none" }}
        className=" justify-center font-semibold mt-12 pt-16 md:text-2xl text-xs mr-8 ml-8 font-serif"
      >
        <CustomLink to={"/"}>HOME</CustomLink>
        <CustomLink to={"/review"}>REVIEWS</CustomLink>
        <CustomLink to={"/dashboard"}>DASHBOARD</CustomLink>
        <CustomLink to={"/blog"}>BLOG</CustomLink>
        <CustomLink to={"/about"}>ABOUT</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
