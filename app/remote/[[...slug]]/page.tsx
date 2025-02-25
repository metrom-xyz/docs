/* eslint-disable react-hooks/rules-of-hooks -- false positive, useMDXComponents are not react hooks */

import { notFound } from "next/navigation";
import { compileMdx } from "nextra/compile";
import { Callout, Tabs } from "nextra/components";
import { evaluate } from "nextra/evaluate";
import {
    convertToPageMap,
    mergeMetaWithPageMap,
    normalizePageMap,
} from "nextra/page-map";
import { useMDXComponents } from "../../../mdx-components";

const filePaths = ["README.md", "index.mdx"];

const { mdxPages, pageMap: _pageMap } = convertToPageMap({
    filePaths,
    basePath: "remote",
});

// @ts-expect-error -- fixme
export const [metromReactPage] = _pageMap[0].children;

const metromReactPageMap = mergeMetaWithPageMap(metromReactPage, {
    index: "Introduction",
});

export const pageMap = normalizePageMap(metromReactPageMap);

const { wrapper: Wrapper, ...components } = useMDXComponents({
    $Tabs: Tabs,
    Callout,
});

export default async function Page(props) {
    const params = await props.params;
    const route = (params.slug || []).join("/");
    const filePath = mdxPages[route];

    console.log("params", params);

    if (!filePath) notFound();

    const response = await fetch(
        `https://raw.githubusercontent.com/metrom-xyz/monorepo/refs/heads/main/packages/react/${filePath}`,
    );
    const data = await response.text();
    const rawJs = await compileMdx(data, { filePath });
    const { default: MDXContent, toc, metadata } = evaluate(rawJs, components);

    return (
        <Wrapper toc={toc} metadata={metadata}>
            <MDXContent />
        </Wrapper>
    );
}

export function generateStaticParams() {
    const params = Object.keys(mdxPages).map((route) => ({
        ...(route && { slug: route.split("/") }),
    }));

    return params;
}
