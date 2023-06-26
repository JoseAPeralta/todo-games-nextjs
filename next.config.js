/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.rawg.io",
        port: "",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async redirects() {
    return [
      {
        source: "/games",
        destination: "/games/1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
