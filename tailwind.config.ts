import { type Config } from "tailwindcss";
import { tailwindPreset } from "@metrom-xyz/ui";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    presets: [tailwindPreset],
    theme: {
        extend: {
            transitionProperty: {
                colors: "border-radius, color, background-color, border-color, text-decoration-color, fill, stroke",
            },
        },
    },
};

export default config;
