/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8484/api/:path*', // 실제 API 주소
      },
    ];
  },
  webpack(config){
    config.module.rules.push({
      test: /\.glsl$/,
      use: 'raw-loader',
    });
    return config;

  },






};

export default nextConfig;
