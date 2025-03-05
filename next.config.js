import nextra from "nextra";

const withNextra = nextra({
    latex: {
        renderer: "mathjax",
    },
});

const nextConfig = withNextra();

export default nextConfig;
