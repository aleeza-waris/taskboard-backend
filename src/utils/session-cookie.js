const isProduction = process.env.NODE_ENV === "production";

export const refreshCookieOptions = {
    httpOnly: true,
    secure: isProduction,
    // The frontend and API are often on different sites in production, so the
    // browser requires SameSite=None; Secure for credentialed API requests.
    sameSite: isProduction ? "none" : "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
};