import Link from "next/link"
import { Home } from "lucide-react"

export function HomeButton() {
    return (
        <Link
            href="/main"
            className="fixed top-4 left-4 bg-rose-500 text-white p-2 rounded-full shadow-lg hover:bg-rose-600 transition-colors"
        >
            <Home size={24} />
        </Link>
    )
}