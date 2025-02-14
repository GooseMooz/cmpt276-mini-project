"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { HomeButton } from "@/components/HomeButton"

const restaurants = [
    {
        name: "Peaked Pies",
        image: "/eating_pictures/temp1.jpg",
        description: "Our first lunch :0",
        link: "https://maps.app.goo.gl/dtWk8g1UDXQXZSWV8",
    },
    {
        name: "Beest",
        image: "/eating_pictures/temp2.jpg",
        description: "My favorite ramen :P",
        link: "https://maps.app.goo.gl/81msN7X4jkqtCuPr7",
    },
    {
        name: "Casa Molina",
        image: "/eating_pictures/temp3.jpg",
        description: "Cute and cozy Spain :3",
        link: "https://maps.app.goo.gl/kLHQon6RdPfFNMANA",
    },
    {
        name: "Sopra Sotto",
        image: "/eating_pictures/temp4.jpg",
        description: "Italian APPROVED :D",
        link: "https://maps.app.goo.gl/ysG5g49JWfxStRPX7",
    },
    {
        name: "Sura",
        image: "/eating_pictures/temp5.jpg",
        description: "Our Korean place .3.",
        link: "https://maps.app.goo.gl/hkhzwgdJzZyQA1758",
    },
    {
        name: "Home",
        image: "/eating_pictures/temp6.jpg",
        description: "LET ME COOK >:3",
        link: "https://www.youtube.com/watch?v=elaSoKe1gFw&list=PL4y51Lv1VE0cry_eahgWj0xU3xTg_kDyA",
    },
]

export default function Eating() {
    const [selected, setSelected] = useState<string | null>(null)

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
            <h1 className="text-3xl font-bold text-rose-600 mb-8 text-center">Choose Our Romantic Dinner Spot ♨(⋆‿⋆)♨</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
                {restaurants.map((restaurant, index) => (
                    <motion.div
                        key={index}
                        className={`bg-white rounded-lg shadow-lg overflow-hidden ${selected === restaurant.name ? "ring-4 ring-rose-500" : ""}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={() => setSelected(restaurant.name)}
                    >
                        <Image
                            src={restaurant.image}
                            alt={restaurant.name}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2 text-black">{restaurant.name}</h2>
                            <p className="text-gray-600 mb-4">{restaurant.description}</p>
                            <a
                                href={restaurant.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-rose-500 hover:underline"
                            >
                                Link!
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
            {selected && (
                <motion.p
                    className="text-center text-xl text-rose-600 mt-8"
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                >
                    Of course :P {selected} it is! (◕‿◕)♡
                </motion.p>
            )}
            <HomeButton />
            <Image
                src={"/cat_drawings/MUNCH.png"}
                alt="Eating Cat"
                width={200}
                height={200}
                className="absolute object-cover top-20"
            />
        </div>
    )
}