// const checkEnvVariables = require("./check-env-variables")

// checkEnvVariables()

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   reactStrictMode: true,
//   logging: {
//     fetches: {
//       fullUrl: true,
//     },
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "localhost",
//       },
//       {
//         protocol: "https",
//         hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
//       },
//       {
//         protocol: "https",
//         hostname: "medusa-server-testing.s3.amazonaws.com",
//       },
//       {
//         protocol: "https",
//         hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
//       },
//     ],
//   },
// }

// module.exports = nextConfig



const checkEnvVariables = require("./check-env-variables");

checkEnvVariables();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '13.203.111.186',
        port: '9000',
        pathname: '/static/**',
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
