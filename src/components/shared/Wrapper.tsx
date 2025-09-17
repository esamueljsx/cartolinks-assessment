"use client";
import type { ReactNode } from "react";
import { ThemeProvider } from "../common/theme";
import Navbar from "./Navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto w-full max-w-screen p-5">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Analytics />
        <SpeedInsights />
        <Navbar />
        {children}
      </ThemeProvider>
    </div>
  );
};

export default Wrapper;
