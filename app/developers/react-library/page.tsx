import { compileMdx } from "nextra/compile";
import { Callout, Tabs } from "nextra/components";
import { evaluate } from "nextra/evaluate";
import { useMDXComponents as getMDXComponents } from "nextra-theme-docs";

const { wrapper: Wrapper, ...components } = getMDXComponents({
    $Tabs: Tabs,
    Callout,
});

export default async function Page() {
    const response = await fetch(
        "https://raw.githubusercontent.com/metrom-xyz/monorepo/blob/b26c3fb56e1465787596c7743362b5c866349f19/packages/react/README.md",
    );
    const data = await response.text();
    const rawJs = await compileMdx(data);
    const { default: MDXContent, toc, metadata } = evaluate(rawJs, components);

    return (
        <Wrapper toc={toc} metadata={metadata}>
            <MDXContent />
        </Wrapper>
    );
}
