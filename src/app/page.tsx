"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Onboarding() {
  return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <motion.h1
            className="text-4xl font-bold text-rose-600 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
          {`Welcome to Our Valentine's Day Adventure! (♥ω♥*)`}
        </motion.h1>
        <motion.p
            className="text-xl text-rose-500 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
        >
          {`Are you ready to embark on a journey filled with love and surprises?`}
        </motion.p>
        <Link href="/main">
          <motion.button
              className="bg-rose-500 text-white px-6 py-3 rounded-full text-xl font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
          >
            {`Let's Begin Our Adventure! ♡(ӦｖӦ｡)`}
          </motion.button>
        </Link>
      </div>
  )
}