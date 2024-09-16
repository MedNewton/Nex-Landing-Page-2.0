"use client";

import MoonIcon from "@/assets/icons/moon";
import SunIcon from "@/assets/icons/sun";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    useEffect(() => setMounted(true), []);

    if (!mounted) return <>...</>;

    if (currentTheme === "dark") {
        return (
            <button className="bg-nexGreen-500 flex flex-row items-center justify-center p-2 rounded-full gap-2" onClick={() => setTheme("light")}>
                <MoonIcon width={24} height={24} mode="dark" />
            </button>
        );
    }

    if (currentTheme === "light") {
        return (
            <button className="bg-nexGreen-500 flex flex-row items-center justify-center p-2 rounded-full gap-2" onClick={() => setTheme("dark")}>
                <SunIcon width={24} height={24} mode="light" />
            </button>
        );
    }
}