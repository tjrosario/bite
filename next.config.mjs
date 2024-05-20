/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.admin.getabite.co',
      },
      {
        protocol: 'https',
        hostname: 'getbite.com',
      },
    ],
  },
};

export default nextConfig;
