import path from 'path';

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(process.cwd(), './src/styles')],
    prependData: `@import "_variables";`,
  },
};

export default nextConfig;
