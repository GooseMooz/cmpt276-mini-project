import { motion } from "framer-motion"
import type React from "react"

const PageTransition = ({ children }: { children: React.ReactNode }) => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
        {children}
    </motion.div>
)

export default PageTransition