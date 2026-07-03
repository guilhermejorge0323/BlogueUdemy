"use client";
import clsx from "clsx";
import Image from "next/image";

export default function Home() {
    return (
        <h2
            className={clsx(
                "text-blue-500",
                "bg-red-600",
                "transition-all",
                "duration-200",
                "font-bold",
                "italic",
            )}
        >
            Ola word
        </h2>
    );
}
