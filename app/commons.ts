const PRODUCTION = process.env.NEXT_PUBLIC_PRODUCTION === "true";

export const REMOTE_MDX_BRANCH = PRODUCTION ? "main" : "develop";
