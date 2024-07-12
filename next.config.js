/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["caulwmenlkplcuddkpha.supabase.co"],
  },
};

module.exports = nextConfig;
