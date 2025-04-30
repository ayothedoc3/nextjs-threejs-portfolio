/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Next.js 15+, you need this to support older React versions
  reactStrictMode: true,
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
};

module.exports = nextConfig;