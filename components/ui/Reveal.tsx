"use client";

import { motion, type MotionProps } from "framer-motion";
import React from "react";

type Props = {
    children: React.ReactNode;
    delay?: number;
    y?: number;
    once?: boolean;
    className?: string;
} & MotionProps;

export default function Reveal({
    children,
    delay = 0,
    y = 18,
    once = true,
    className,
    ...rest
}: Props) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
            {...rest}
        >
            {children}
        </motion.div>
    );
}
