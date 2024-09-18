import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: 'class',
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        nexBlack: {
          500: "#111116"
        },
        nexGray: {
          500: "#E7E7E7"
        },
        nexGreen: {
          500: "#81B48C"
        },
        nexDarkCard: {
          500: "#1E1E1E"
        },
        nexLightCard: {
          500: "#FFFFFF"
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
