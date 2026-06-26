import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hpaqwuljvceuwhgiscxe.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  typescript: {
    // We run tsc separately in CI; skip in next build to avoid double-check failures
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
