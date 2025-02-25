import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/ibm-plex-mono/500.css";

import "./style.css";
import "nextra-theme-docs/style.css";

import { Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { pageMap as integrationPageMap } from "./remote/[[...slug]]/page";
import { MetromSquareLogo } from "../components/assets/logos/metrom-square";
import { Footer } from "../components/footer";

export const metadata = {
    title: "Metrom",
    description:
        "Metrom documentation portal. Maximize your liquidity mining impact with precise incentives",
};

export default async function RootLayout({ children }) {
    const navbar = (
        <Navbar
            logo={<MetromSquareLogo />}
            chatLink="https://discord.com/invite/uRer2D4Pdf"
            projectLink="https://github.com/metrom-xyz/docs"
        />
    );

    const pageMap = [
        ...(await getPageMap()),
        {
            name: "remote",
            route: "/remote",
            children: [integrationPageMap],
        },
    ];

    return (
        <html lang="en" dir="ltr" suppressHydrationWarning>
            <Head>
                <meta name="description" content={metadata.description} />
                <meta property="og:title" content={metadata.title} />
                <meta property="og:site_name" content={metadata.title} />
                <meta
                    property="og:description"
                    content={metadata.description}
                />
                <meta property="og:locale" content="en_US" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <body>
                <Layout
                    navbar={navbar}
                    footer={<Footer />}
                    docsRepositoryBase="https://github.com/metrom-xyz/docs"
                    sidebar={{
                        defaultMenuCollapseLevel: 1,
                        toggleButton: false,
                    }}
                    feedback={{ content: null }}
                    editLink={null}
                    pageMap={pageMap}
                    themeSwitch={{}}
                >
                    {children}
                </Layout>
            </body>
        </html>
    );
}
