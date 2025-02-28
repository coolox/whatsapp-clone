import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
	remotePatterns:[
		{hostname:"valuable-otter-367.convex.cloud"}
	]
  }
};

module.exports = {
    eslint: {
        ignoreDuringBuilds: true, // Отключает ESLint при сборке (next build)
    },
};

export default nextConfig;
