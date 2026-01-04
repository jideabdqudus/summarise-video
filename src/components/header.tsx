"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full px-4 pt-8 cursor-pointer px-12">
        <div className="text-sm font-bold mb-2">summarise.video</div>

        {isVisible && (
          <div
            className="w-fit flex items-start gap-3 p-4 text-sm text-amber-900 bg-amber-50 border border-amber-200 rounded-lg "
            role="alert"
          >
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p>
              <span className="font-semibold">Warning:</span> This is a beta
              version of the app. Due to YouTube&apos;s API restrictions, the
              app may not work for all videos.
            </p>
            <button
              onClick={() => setIsVisible(false)}
              className="text-amber-500 hover:text-amber-700 hover:bg-amber-100 rounded p-0.5 transition-colors shrink-0 ml-auto bg-white"
              aria-label="Dismiss warning"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </motion.header>
  );
}
