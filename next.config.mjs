import path from 'path';

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')],
    prependData: `@import "variables";`,
  },
};

export default nextConfig;
