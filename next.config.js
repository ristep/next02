/** @type {import('next').NextConfig} */
const nextConfig = {
   // ssr: false,
   // render: 'client',
   serverRuntimeConfig: {
      removeExtraAttributesFromHtml: true,
   },
}

module.exports = nextConfig
