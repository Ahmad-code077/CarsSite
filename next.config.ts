/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Ensure this is enabled for the App Router
  },
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination: '/api/:path*',
    },
  ],
};

export default nextConfig;
