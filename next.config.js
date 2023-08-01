/** @type {import('next').NextConfig} */

const nextConfig = {
   // ssr: false,
   // render: 'client',
   serverRuntimeConfig: {
      removeExtraAttributesFromHtml: false,
   },
}

module.exports = nextConfig
