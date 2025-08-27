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
            process.env.CLOUDFLARE_PUBLIC_ACCESS_URL.replace(
              /^https?:\/\//,
              ""
            ), // removes http or https from url
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            process.env.CLOUDFLARE_PUBLIC_ACCESS_URL.replace(
              /^https?:\/\//,
              ""
            ),
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
