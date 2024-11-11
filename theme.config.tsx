import { type DocsThemeConfig } from "nextra-theme-docs";
import { MetromSquareLogo } from "./components/assets/logos/metrom-square";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

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
    head: Header,
    footer: {
        content: Footer,
    },
};

export default config;
