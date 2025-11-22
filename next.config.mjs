/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  },
  i18n: {
    locales: ["ar-DZ"],
    defaultLocale: "ar-DZ",
    localeDetection: false
  }
};

export default nextConfig;
