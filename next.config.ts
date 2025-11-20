import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  allowedDevOrigins: [
    "http://192.168.1.10:3000",
    "http://192.168.1.10",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
  ],
};

export default nextConfig;
