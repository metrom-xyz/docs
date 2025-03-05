import { compileMdx } from "nextra/compile";
import { evaluate } from "nextra/evaluate";
import { useMDXComponents as getMDXComponents } from "nextra-theme-docs";
import { REMOTE_MDX_BRANCH } from "../commons";

const { wrapper: Wrapper, ...components } = getMDXComponents();

export default async function Page() {
    const response = await fetch(
        `https://raw.githubusercontent.com/metrom-xyz/monorepo/refs/heads/${REMOTE_MDX_BRANCH}/packages/react/README.md`,
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
