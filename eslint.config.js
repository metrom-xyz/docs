import nextVitals from "eslint-config-next/core-web-vitals";
import prettierConfig from "eslint-config-prettier/flat";
import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default defineConfig(
    { ignores: ["public/_pagefind/**"] },
    ...nextVitals,
    prettierConfig,
    eslint.configs.recommended,
    tseslint.configs.recommended,
    {
        settings: {
            next: { rootDir: import.meta.dirname },
            // FIXME: remove once this is solved https://github.com/vercel/next.js/issues/89764
            react: { version: "19.2" },
        },
        plugins: { prettier: prettierPlugin },
        rules: { "prettier/prettier": ["error", { endOfLine: "auto" }] },
    },
);
