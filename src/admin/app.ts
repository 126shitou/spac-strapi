import type { StrapiApp } from "@strapi/strapi/admin";
import {
  setPluginConfig,
  type PluginConfig,
} from "@_sh/strapi-plugin-ckeditor";
import { htmlPreset, markdownPreset } from "./config";

const myConfig: PluginConfig = {
  /**
   * Use presets from config.ts
   */
  presets: [htmlPreset, markdownPreset],
};

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      "zh-Hans",
      // 'zh',
    ],
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
  register() {
    setPluginConfig(myConfig);
  },
};
