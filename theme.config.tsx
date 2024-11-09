import { useConfig, type DocsThemeConfig } from "nextra-theme-docs";
import { MetromSquareLogo } from "./components/metrom-square-logo";

const config: DocsThemeConfig = {
    logo: MetromSquareLogo,
    project: {
        link: "https://github.com/metrom-xyz/docs",
    },
    chat: {
        link: "https://t.co/CxuKegMffl",
    },
    sidebar: {
        defaultMenuCollapseLevel: 0,
    },
    docsRepositoryBase: "https://github.com/metrom-xyz/docs",
};

export default config;
