const nextConfig = {
  images: {
    domains: ['image.tmdb.org'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/list/1',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
