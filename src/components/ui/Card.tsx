import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <motion.article
      whileHover={{ y: -4, borderColor: "#ffffff" }}
      transition={{ duration: 0.2 }}
      className={`border border-base-800 bg-base-950 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] ${className}`}
    >
      {children}
    </motion.article>
  );
}
