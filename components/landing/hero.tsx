"use client";
import type React from "react";
import { motion } from "motion/react";
import TailwindCSS from "../icons/tailwindcss";
import { Sparkles } from "lucide-react";
import { BrowseComponentsButton } from "../ui/browse-button";
import { BrowseBlocksButton } from "../ui/browse-block";
import Features from "./feature-block";

export function HeroSection() {
  return (
    <div className="relative mx-auto w-full max-w-7xl min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 md:py-16 lg:py-20">
      
      <div className="w-full flex flex-col items-center text-center space-y-10">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-zinc-900 dark:text-zinc-100">
       Design with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400">
             clarity
            </span>
            <br />
          develop with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-rose-500 dark:from-purple-400 dark:via-fuchsia-400 dark:to-rose-400">
               confidence
            </span>
            .
          </h1>
        
          <p className="mt-6 text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            A curated collection of{" "}
            <span className="font-semibold">100+ premium UI components</span>{" "}
            crafted with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-fuchsia-500 dark:from-rose-400 dark:to-fuchsia-400">
              Tailwind CSS
            </span>{" "}
            and{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-500 dark:from-fuchsia-400 dark:to-purple-400">
              shadcn/ui
            </span>{" "}
            for modern React and Next.js applications.
          </p>
        </motion.div>

        {/* Tailwind update badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-zinc-500 dark:text-zinc-300 pb-3 flex items-center gap-2">
            <TailwindCSS className="w-4 h-4" />
            <span className="flex items-center gap-1.5">
              Now updated for Tailwind CSS 4.0!
              <span className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">
                <Sparkles className="h-3 w-3 mr-1" />
                New
              </span>
            </span>
          </span>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <BrowseComponentsButton />
            <BrowseBlocksButton />
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-4xl "
        >
          <Features />
        </motion.div>
      </div>
    </div>
  );
}