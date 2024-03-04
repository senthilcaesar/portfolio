/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',
  reactStrictMode: true,
  images:{
    loader:"akamai",
    unoptimized: true,
    path:"",
  }
}

module.exports = nextConfig
