/** @type {import('next').NextConfig} */
const nextConfig = {
   ssr: false,
   render: 'client',
   experimental: {
      ssr: false,
   },
   serverRuntimeConfig: {
      removeExtraAttributesFromHtml: false,
   },
}

module.exports = nextConfig
