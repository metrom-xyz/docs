import { useConfig } from "nextra-theme-docs";

export function Header() {
    const config = useConfig();

    const site = "Metrom";
    const title = config.title ? `${config.title} - ${site}` : site;

    const description = `Metrom documentation portal. Maximize your liquidity mining impact with precise incentives. ${config.frontMatter.description ? config.frontMatter.description : ""}`;

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={config.title} />
            <meta property="og:site_name" content={site} />
            <meta property="og:description" content={description} />
            <meta property="og:locale" content="en_US" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
        </>
    );
}
