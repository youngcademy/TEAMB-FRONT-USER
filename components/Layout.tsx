import React from "react";
import Head from "next/head";
import AppNavbar from "./AppNavbar";
import Mainheader from "./Mainheader";
import Mainbody from "./Mainbody";
import Mainfooter from "./Mainfooter";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Mainheader />
      <Mainbody />
      <Mainfooter />
    </>
  );
}

export default Layout;
