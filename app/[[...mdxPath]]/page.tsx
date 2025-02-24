/* eslint-disable react-hooks/rules-of-hooks -- false positive, useMDXComponents is not a react hook */

import { useMDXComponents } from "nextra-theme-docs";
import { generateStaticParamsFor, importPage } from "nextra/pages";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export async function generateMetadata(props) {
    const params = await props.params;
    const { metadata } = await importPage(params.mdxPath);
    return metadata;
}

export default async function Page(props) {
    const params = await props.params;
    const result = await importPage(params.mdxPath);
    const { default: MDXContent, metadata } = result;

    const Wrapper = useMDXComponents().wrapper;

    return (
        <Wrapper toc={result.toc} metadata={metadata}>
            <MDXContent {...props} params={params} />
        </Wrapper>
    );
}
