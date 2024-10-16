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
};

export default nextConfig;
