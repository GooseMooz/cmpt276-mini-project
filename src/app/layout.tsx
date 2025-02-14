import "./globals.css"
import {Inter} from "next/font/google"
import type React from "react"

const inter = Inter({subsets: ["latin"]})

export const metadata = {
    title: "Our Valentine's Day Adventure",
    description: "A special journey through our love",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-pink-50`}>
                <main className="container mx-auto p-4">{children}</main>
            </body>
        </html>
    )
}
