"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { HomeButton } from "@/components/HomeButton"

export default function Fun() {
    const [photoTaken, setPhotoTaken] = useState(false)
    const [flashActive, setFlashActive] = useState(false)

    const takePhoto = () => {
        setPhotoTaken(true)
        setFlashActive(true)
        setTimeout(() => {
            setFlashActive(false)
        }, 300)
    }

    useEffect(() => {
        if (flashActive) {
            document.body.style.backgroundColor = "white"
        } else {
            document.body.style.backgroundColor = ""
        }
    }, [flashActive])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
            {!photoTaken && (
                <motion.h1
                    className="text-4xl font-bold text-rose-600 mb-8 text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Could we please take a photo? :3
                </motion.h1>
            )}
            {!photoTaken ? (
                <motion.button
                    className="bg-rose-500 text-white px-6 py-3 rounded-full text-xl font-bold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={takePhoto}
                >
                    Yes
                </motion.button>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src="/cat_drawings/ICONIC.png"
                        alt="Cute Cat"
                        width={300}
                        height={300}
                        className=""
                    />
                </motion.div>
            )}
            <HomeButton />
            {flashActive && <div className="fixed inset-0 bg-white opacity-100 z-50" />}
        </div>
    )
}