const { withBlitz } = require("@blitzjs/next");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withBlitz(nextConfig);
