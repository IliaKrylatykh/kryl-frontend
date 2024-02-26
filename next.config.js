/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tigereye.ru"],
  },
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
};

module.exports = nextConfig;
