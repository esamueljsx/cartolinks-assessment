"use client";
import React, { ReactNode } from "react";
import { ThemeProvider } from "../common/theme";
import Navbar from "./Navbar";
import { ThemeSwitcher } from "../common/theme-toggle";
// import Footer from "./Footer";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto w-full max-w-screen p-5">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Navbar />
        {children}
        {/* <ThemeSwitcher /> */}
      </ThemeProvider>
      {/* <Footer />  */}
    </div>
  );
};

export default Wrapper;
