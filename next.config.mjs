/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
  trailingSlash: true,
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) {
    return {
      '/': { page: '/' },
    };
  },
  output: 'export',
};

export default nextConfig;
