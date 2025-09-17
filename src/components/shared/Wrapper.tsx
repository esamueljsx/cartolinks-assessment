"use client";
import type { ReactNode } from "react";
import { ThemeProvider } from "../common/theme";
import Navbar from "./Navbar";
import { Analytics } from "@vercel/analytics/next";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto w-full max-w-screen p-5">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        {children}
        <Analytics />
      </ThemeProvider>
    </div>
  );
};

export default Wrapper;
