import type { StrapiApp } from "@strapi/strapi/admin";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  Essentials,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  ImageResize,
  ImageInsert,
  ImageTextAlternative,
  Link,
  LinkImage,
  AutoLink,
  List,
  TodoList,
  Paragraph,
  Alignment,
  BlockQuote,
  CodeBlock,
  Code,
  Table,
  TableToolbar,
  TableProperties,
  TableCellProperties,
  HorizontalLine,
  RemoveFormat,
  FindAndReplace,
  FontSize,
  FontFamily,
  FontColor,
  FontBackgroundColor,
  Indent,
  IndentBlock,
  PasteFromOffice,
  WordCount,
  SourceEditing,
} from "ckeditor5";

import {
  type PluginConfig,
  type Preset,
  setPluginConfig,
  StrapiMediaLib,
  StrapiUploadAdapter,
} from "@_sh/strapi-plugin-ckeditor";

// 完善的富文本编辑器预设配置
const myCustomPreset: Preset = {
  name: "完善富文本编辑器",
  description: "HTML",
  editorConfig: {
    licenseKey: "GPL",
    plugins: [
      // 基础功能
      Essentials,
      Paragraph,
      Heading,

      // 文本格式化
      Bold,
      Italic,
      Underline,
      Strikethrough,
      Subscript,
      Superscript,
      Code,
      RemoveFormat,

      // 字体和颜色
      FontSize,
      FontFamily,
      FontColor,
      FontBackgroundColor,

      // 对齐和缩进
      Alignment,
      Indent,
      IndentBlock,

      // 列表
      List,
      TodoList,

      // 链接相关
      Link,
      LinkImage,
      AutoLink,

      // 图片相关
      Image,
      ImageCaption,
      ImageStyle,
      ImageToolbar,
      ImageUpload,
      ImageResize,
      ImageInsert,
      ImageTextAlternative,

      // 表格
      Table,
      TableToolbar,
      TableProperties,
      TableCellProperties,

      // 特殊内容
      BlockQuote,
      CodeBlock,
      HorizontalLine,

      // 实用工具
      FindAndReplace,
      PasteFromOffice,
      WordCount,
      SourceEditing,

      // Strapi 集成
      StrapiMediaLib,
      StrapiUploadAdapter,
    ],
    toolbar: {
      items: [
        // 第一行：标题和基础格式
        "heading",
        "|",
        "fontSize",
        "fontFamily",
        "|",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "|",
        "fontColor",
        "fontBackgroundColor",
        "|",
        "removeFormat",

        // 第二行：对齐和列表
        "alignment",
        "|",
        "bulletedList",
        "numberedList",
        "todoList",
        "|",
        "outdent",
        "indent",
        "|",
        "blockQuote",
        "|",
        "link",

        // 第三行：媒体和特殊内容
        // "strapiMediaLib",
        "insertImage",
        "insertTable",
        "|",
        "code",
        "codeBlock",
        "|",
        "subscript",
        "superscript",
        "|",
        "horizontalLine",

        // 第四行：工具
        "findAndReplace",
        "|",
        "sourceEditing",
        "|",
        "undo",
        "redo",
      ],
      shouldNotGroupWhenFull: true, // 防止工具栏项目在空间不足时被分组
    },

    // 标题配置
    heading: {
      options: [
        { model: "paragraph", title: "段落", class: "ck-heading_paragraph" },
        {
          model: "heading1",
          view: "h1",
          title: "标题 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "标题 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "标题 3",
          class: "ck-heading_heading3",
        },
        {
          model: "heading4",
          view: "h4",
          title: "标题 4",
          class: "ck-heading_heading4",
        },
        {
          model: "heading5",
          view: "h5",
          title: "标题 5",
          class: "ck-heading_heading5",
        },
        {
          model: "heading6",
          view: "h6",
          title: "标题 6",
          class: "ck-heading_heading6",
        },
      ],
    },

    // 字体大小配置
    fontSize: {
      options: [
        9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36,
      ],
    },

    // 字体系列配置
    fontFamily: {
      options: [
        "default",
        "Arial, Helvetica, sans-serif",
        "Courier New, Courier, monospace",
        "Georgia, serif",
        "Lucida Sans Unicode, Lucida Grande, sans-serif",
        "Tahoma, Geneva, sans-serif",
        "Times New Roman, Times, serif",
        "Trebuchet MS, Helvetica, sans-serif",
        "Verdana, Geneva, sans-serif",
        "微软雅黑, Microsoft YaHei, sans-serif",
        "宋体, SimSun, serif",
        "黑体, SimHei, sans-serif",
      ],
    },

    // 图片工具栏配置
    image: {
      toolbar: [
        "imageTextAlternative",
        "toggleImageCaption",
        "|",
        "imageStyle:inline",
        "imageStyle:wrapText",
        "imageStyle:breakText",
        "|",
        "resizeImage",
      ],
      styles: {
        options: [
          "inline",
          "alignLeft",
          "alignRight",
          "alignCenter",
          "alignBlockLeft",
          "alignBlockRight",
          "block",
          "side",
        ],
      },
      resizeOptions: [
        {
          name: "resizeImage:original",
          label: "原始大小",
          value: null,
        },
        {
          name: "resizeImage:50",
          label: "50%",
          value: "50",
        },
        {
          name: "resizeImage:75",
          label: "75%",
          value: "75",
        },
      ],
      // 图片插入配置 - 支持通过 URL 插入图片
      insert: {
        integrations: [
          "url", // 启用通过 URL 插入图片功能
        ],
      },
    },

    // 表格配置
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableProperties",
        "tableCellProperties",
      ],
    },

    // 链接配置
    link: {
      // 添加协议支持
      addTargetToExternalLinks: true,
      defaultProtocol: "https://",
      // 链接装饰器
      decorators: {
        openInNewTab: {
          mode: "manual",
          label: "在新标签页中打开",
          attributes: {
            target: "_blank",
            rel: "noopener noreferrer",
          },
        },
        downloadable: {
          mode: "manual",
          label: "可下载",
          attributes: {
            download: "file",
          },
        },
        linkIsExternal: {
          mode: "automatic",
          callback: (url: string | null) =>
            url ? /^(https?:)?\/\/.+/.test(url) : false,
          attributes: {
            class: "external-link",
            target: "_blank",
            rel: "noopener noreferrer",
          },
        },
      },
    },

    // 代码块语言配置
    codeBlock: {
      languages: [
        { language: "plaintext", label: "Plain text" },
        { language: "c", label: "C" },
        { language: "cs", label: "C#" },
        { language: "cpp", label: "C++" },
        { language: "css", label: "CSS" },
        { language: "diff", label: "Diff" },
        { language: "html", label: "HTML" },
        { language: "java", label: "Java" },
        { language: "javascript", label: "JavaScript" },
        { language: "php", label: "PHP" },
        { language: "python", label: "Python" },
        { language: "ruby", label: "Ruby" },
        { language: "typescript", label: "TypeScript" },
        { language: "xml", label: "XML" },
        { language: "json", label: "JSON" },
        { language: "sql", label: "SQL" },
        { language: "bash", label: "Bash" },
      ],
    },

    // 字数统计配置
    wordCount: {
      onUpdate: (stats: any) => {
        // 可以在这里处理字数统计更新
        console.log(`字符数: ${stats.characters}, 单词数: ${stats.words}`);
      },
    },
  },
};

const myConfig: PluginConfig = {
  /**
   * Note that since provided `presets` includes only `myCustomPreset`
   * this configuration will overwrite default presets.
   */
  presets: [myCustomPreset],
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
