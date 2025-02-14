"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { HomeButton } from "@/components/HomeButton"
import PageTransition from "@/components/PageTransition"

export default function Fun() {
    const [stage, setStage] = useState<"initial" | "cheese" | "final">("initial")
    const [flashActive, setFlashActive] = useState(false)

    const startPhotoProcess = () => {
        setStage("cheese")
        setTimeout(() => {
            setStage("final")
            setFlashActive(true)
            setTimeout(() => {
                setFlashActive(false)
            }, 700)
        }, 2000)
    }

    return (
        <PageTransition>
            <div className="min-h-screen flex flex-col items-center justify-center p-8">
                <AnimatePresence mode="wait">
                    {stage === "initial" && (
                        <motion.h1
                            key="initial-text"
                            className="text-4xl font-bold text-rose-600 mb-8 text-center"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.5 }}
                        >
                            Could we please take a photo? :3
                        </motion.h1>
                    )}
                    {stage === "cheese" && (
                        <motion.h1
                            key="cheese-text"
                            className="text-4xl font-bold text-rose-600 mb-8 text-center"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.5 }}
                        >
                            Say CHEESE! (◕‿◕)♡
                        </motion.h1>
                    )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    {stage === "initial" && (
                        <motion.button
                            className="bg-rose-500 text-white px-6 py-3 rounded-full text-xl font-bold"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={startPhotoProcess}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.5 }}
                        >
                            Yes
                        </motion.button>
                    )}
                    {stage === "final" && (
                        <motion.div
                            initial={{opacity: 0, scale: 0.5}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.5}}
                        >
                            <Image
                                src="/cat_drawings/ICONIC.png"
                                alt="Cute Cat"
                                width={300}
                                height={300}
                                className="bg-white shadow-lg rounded-lg"
                            />
                            <motion.p
                                className="text-2xl font-bold text-rose-500 text-center mt-8"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.5, duration: 0.5}}
                            >
                                Nice picture! (≧◡≦) ♡
                            </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <HomeButton/>
                {flashActive && <div className="fixed inset-0 bg-white opacity-100 z-50"/>}
            </div>
        </PageTransition>
    )
}