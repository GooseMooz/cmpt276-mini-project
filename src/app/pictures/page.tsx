"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { HomeButton } from "@/components/HomeButton"

export default function Pictures() {
    const pictures = [
        "/pictures/temp1.jpg",
        "/pictures/temp2.jpg",
        "/pictures/temp3.jpg",
        "/pictures/temp4.jpg",
        "/pictures/temp5.jpg",
        "/pictures/temp6.jpg",
        "/pictures/temp7.jpg",
        "/pictures/temp8.jpg",
        "/pictures/temp9.jpg",
        "/pictures/temp10.jpg",
        "/pictures/temp11.jpg",
        "/pictures/temp12.jpg",
    ]

    return (
        <div className="min-h-screen p-8">
            <h1 className="text-3xl font-bold text-rose-600 mb-8 text-center">Our Precious Memories (✿ ♥‿♥)</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {pictures.map((src, index) => (
                    <motion.div
                        key={index}
                        className="relative"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <Image
                            src={src}
                            alt={`Memory ${index + 1}`}
                            width={300}
                            height={200}
                            className="rounded-lg shadow-lg object-cover w-full h-full"
                            style={{ transform: `rotate(${Math.random() * 10 - 5}deg)` }}
                        />
                    </motion.div>
                ))}
            </div>
            <HomeButton />
        </div>
    )
}