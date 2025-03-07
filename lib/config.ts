const config = {
  env: {
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    prodApiEndpoint: process.env.NEXT_PUBLIC_PROD_API_ENPOINT!,
    imageKit: {
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    },
    databaseUrl: process.env.DATABASE_URL!,
    upstash: {
      redisUrl: process.env.UPSTASH_REDIS_URL!,
      redisToken: process.env.UPSTASH_REDIS_REST_TOKEN!,
      qStashUrl: process.env.QSTASH_URL!,
      qStashToken: process.env.QSTASH_TOKEN!,
      qStashSigningKey: process.env.QSTASH_CURRENT_SIGNING_KEY!,
      qStashNextSigningKey: process.env.QSTASH_NEXT_SIGNING_KEY!,
    },
  },
};

export default config;
