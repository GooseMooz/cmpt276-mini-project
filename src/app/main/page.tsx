"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import PageTransition from "../../components/PageTransition"

export default function MainHub() {

    const buttons = [
        { href: "/pictures", text: "Our Memories (◕‿◕)♡" },
        { href: "/eating", text: "Dinner Plans ♨(⋆‿⋆)♨" },
        { href: "/scheduling", text: "Plan Our Date (づ￣ ³￣)づ" },
        { href: "/surprise", text: "A Special Surprise ✧◝(⁰▿⁰)◜✧" },
    ]

    return (
        <PageTransition>
            <div className="min-h-screen flex flex-col items-center justify-center text-center relative">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center mb-8">
                        <motion.h1
                            className="text-4xl font-bold text-rose-600 mr-4"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Happy Valentine's Day, My Love! ♡(ӦｖӦ｡)
                        </motion.h1>
                        <Link href="/fun">
                            <motion.button
                                className="bg-rose-300 text-rose-700 p-2 rounded-full"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                📷
                            </motion.button>
                        </Link>
                    </div>
                    <motion.p
                        className="text-xl text-rose-500 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Let's celebrate our love with these special activities:
                    </motion.p>
                    <div className="grid grid-cols-2 gap-4">
                        {buttons.map((button, index) => (
                            <Link href={button.href} key={index}>
                                <motion.button
                                    className="bg-rose-500 text-white px-4 py-2 rounded-full text-lg font-bold w-full"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {button.text}
                                </motion.button>
                            </Link>
                        ))}
                    </div>
                </div>
                        <Image
                            src={"/cat_drawings/ICONIC.png"}
                            alt="Cute Cat"
                            width={200}
                            height={200}
                            className="absolute object-cover inset-y-1/4"
                        />
            </div>
        </PageTransition>
    )
}