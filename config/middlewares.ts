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
          "script-src": ["'self'","192.168.*", "*.tinymce.com", "*.tiny.cloud", "https:"],

          "connect-src": [
            "'self'",
            "https:",
            "*.tinymce.com",
            "*.tiny.cloud",
            "blob:",
            "*.strapi.io",
            "192.168.*",
          ],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "*.tinymce.com",
            "*.tiny.cloud",
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
          "style-src": [
            "'self'",
            "'unsafe-inline'",
            "*.tinymce.com",
            "*.tiny.cloud",
            "192.168.*",
          ],
          "font-src": ["'self'", "*.tinymce.com", "*.tiny.cloud"],
        },
        upgradeInsecureRequests: null,
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
