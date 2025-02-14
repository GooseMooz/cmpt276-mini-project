"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import { HomeButton } from "@/components/HomeButton"

export default function Surprise() {
    useEffect(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        })
    }, [])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
            <motion.h1
                className="text-4xl font-bold text-rose-600 mb-8 text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Surprise! ✧◝(⁰▿⁰)◜✧
            </motion.h1>
            <motion.p
                className="text-2xl text-rose-500 mb-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                SEALS IN REAL LIFE!!!
            </motion.p>
            <motion.img
                src="/silly_seal.jpg"
                alt="Cute Seals"
                className="rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
            />
            <HomeButton />
        </div>
    )
}