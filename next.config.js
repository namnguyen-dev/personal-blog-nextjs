/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com',
      '**.airtableusercontent.com',
      'v5.airtableusercontent.com',
      'images.unsplash.com',
      'i.ibb.co',
      'i.postimg.cc',
    ],
  },
};

module.exports = nextConfig;
