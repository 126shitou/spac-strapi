export default [
  "strapi::logger",
  "strapi::errors",
  // 自定义安全中间件配置，允许Cloudflare R2域名
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            // 安全检查：确保环境变量存在后再调用 replace 方法
            process.env.CLOUDFLARE_PUBLIC_ACCESS_URL?.replace(
              /^https?:\/\//,
              ""
            ) || "", // 如果环境变量未定义，使用空字符串作为默认值
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            // 安全检查：确保环境变量存在后再调用 replace 方法
            process.env.CLOUDFLARE_PUBLIC_ACCESS_URL?.replace(
              /^https?:\/\//,
              ""
            ) || "", // 如果环境变量未定义，使用空字符串作为默认值
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
