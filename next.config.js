/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['rb.gy', 'image.tmdb.org'],
  },
}
// module.exports = withTM({
//   reactStrictMode: true,
//   images: {
//     domains: ['rb.gy', 'image.tmdb.org'],
//   },
// })