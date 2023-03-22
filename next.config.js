/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["localhost", "*"],
  },
};

const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
};

// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
//   webpack5: true,
//   webpack: (config) => {
//     config.resolve.fallback = { fs: false };

//     return config;
//   },
// };

// module.exports = nextConfig;
