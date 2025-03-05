const PRODUCTION = process.env.NODE_ENV === "production";

export const REMOTE_MDX_BRANCH = PRODUCTION ? "main" : "develop";
