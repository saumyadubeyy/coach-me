/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.dituniversity.edu.in', 'www.shutterstock.com']
  }
}

module.exports = nextConfig
