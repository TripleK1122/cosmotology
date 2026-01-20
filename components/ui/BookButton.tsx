"use client";

import Link from "next/link";

type Props = {
    label?: string;
    className?: string;
};

export default function BookButton({ label = "Book Now", className }: Props) {
    return (
        <Link href="/booking" className={className} style={{ textDecoration: "none" }}>
            {label}
        </Link>
    );
}
