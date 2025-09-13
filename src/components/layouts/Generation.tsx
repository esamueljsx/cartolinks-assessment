"use client";
import { tools } from "@/data";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";

export default function Generation() {
  const [showAll, setShowAll] = useState(false);

  const visibleTools = showAll ? tools : tools.slice(0, 4);

  return (
    <section className="py-10">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold dark:text-white">Generate</h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center justify-center space-x-0.5 text-sm font-medium text-blue-600 hover:underline"
        >
          <span>{showAll ? <ArrowUp /> : <ArrowDown />}</span>
          <span>{showAll ? " Show less " : " Show all "}</span>
        </button>
      </div>

      {/* Grid of Tools */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        {visibleTools.map((tool, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[1fr_auto] items-start gap-4 rounded-xl p-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {/* First grid column (Icon and Text) */}
            <div className="grid grid-cols-[auto_1fr] items-start gap-3">
              {/* <div
                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${tool.bg}`}
              >
                {tool.icon}
              </div> */}

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {tool.title}
                  </h3>

                  {tool.isNew && (
                    <span className="rounded-md bg-blue-700 px-2 py-0.5 text-xs font-semibold text-white dark:bg-blue-900/50 dark:text-blue-300">
                      New
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {tool.description}
                </p>
              </div>
            </div>

            {/* Second grid column (Button) */}
            <button className="bg-primary-gray-200 flex-shrink-0 rounded-2xl px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
              {tool.action}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
