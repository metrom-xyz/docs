import nextra from "nextra";

const withNextra = nextra({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.tsx",
    latex: true,
});

const nextConfig = withNextra();

export default nextConfig;
