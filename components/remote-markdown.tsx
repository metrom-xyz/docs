import { compileMdx } from "nextra/compile";
import { evaluate } from "nextra/evaluate";
import { useMDXComponents as getMDXComponents } from "nextra-theme-docs";

const { wrapper: Wrapper, ...components } = getMDXComponents();

interface RemoteMarkdownProps {
    url: string;
}

export async function RemoteMarkdown(props: RemoteMarkdownProps) {
    const response = await fetch(props.url);
    const data = await response.text();
    const rawJs = await compileMdx(data);
    const MDXContent = evaluate(rawJs, components).default;

    return <MDXContent />;
}
