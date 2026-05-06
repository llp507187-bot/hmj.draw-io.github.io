import type { NextConfig } from "next";

const backendBaseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8091/api/v1").replace(/\/+$/, "");

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: `${backendBaseUrl}/:path*`,
      },
    ];
  },
};

export default nextConfig;
