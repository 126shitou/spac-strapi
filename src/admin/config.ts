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
  ImageUpload,
  ImageInsert,
  Link,
  List,
  TodoList,
  Paragraph,
  Alignment,
  BlockQuote,
  CodeBlock,
  Code,
  Table,
  TableToolbar,
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
  Markdown,
} from "ckeditor5";

import {
  type Preset,
  StrapiMediaLib,
  StrapiUploadAdapter,
} from "@_sh/strapi-plugin-ckeditor";

// HTML预设配置 - 完善的富文本编辑器
export const htmlPreset: Preset = {
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

      // 链接和媒体（Markdown兼容）
      Link,
      Image,
      ImageCaption,
      ImageUpload,
      ImageInsert,

      // 表格（基础Markdown表格）
      Table,
      TableToolbar,

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
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "|",
        "removeFormat",

        // 第二行：列表和引用
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
        "strapiMediaLib",
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

    // 图片配置（Markdown兼容）
    image: {
      toolbar: ["imageTextAlternative", "toggleImageCaption"],
      // 图片插入配置 - 支持通过 URL 插入图片
      insert: {
        integrations: [
          "insertImageViaUrl", // 启用通过 URL 插入图片功能
        ],
      },
    },

    // 表格配置（基础Markdown表格）
    table: {
      contentToolbar: ["tableColumn", "tableRow"],
    },

    // 链接配置
    link: {
      decorators: {
        openInNewTab: {
          mode: "manual",
          label: "在新标签页中打开",
          attributes: {
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

// Markdown预设配置 - 完整功能Markdown编辑器
export const markdownPreset: Preset = {
  name: "Markdown编辑器",
  description: "Markdown",
  editorConfig: {
    licenseKey: "GPL",
    plugins: [
      // 基础功能
      Essentials,
      Paragraph,
      Heading,
      Markdown, // Markdown支持

      // 文本格式化（Markdown兼容）
      Bold,
      Italic,
      Underline,
      Strikethrough,
      Subscript,
      Superscript,
      Code,
      RemoveFormat,

      // 对齐和缩进（Markdown中保留基本缩进功能）
      Indent,

      // 列表
      List,
      TodoList,

      // 链接和媒体（Markdown兼容）
      Link,
      Image,
      ImageCaption,
      ImageUpload,
      ImageInsert,

      // 表格（基础Markdown表格）
      Table,
      TableToolbar,

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
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "|",
        "removeFormat",

        // 第二行：列表和引用
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
        "strapiMediaLib",
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

    // 标题配置（Markdown样式）
    heading: {
      options: [
        { model: "paragraph", title: "段落", class: "ck-heading_paragraph" },
        {
          model: "heading1",
          view: "h1",
          title: "# 标题 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "## 标题 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "### 标题 3",
          class: "ck-heading_heading3",
        },
        {
          model: "heading4",
          view: "h4",
          title: "#### 标题 4",
          class: "ck-heading_heading4",
        },
        {
          model: "heading5",
          view: "h5",
          title: "##### 标题 5",
          class: "ck-heading_heading5",
        },
        {
          model: "heading6",
          view: "h6",
          title: "###### 标题 6",
          class: "ck-heading_heading6",
        },
      ],
    },

    // 图片配置（Markdown兼容）
    image: {
      toolbar: ["imageTextAlternative", "toggleImageCaption"],
      // 图片插入配置 - 支持通过 URL 插入图片
      insert: {
        integrations: [
          "insertImageViaUrl", // 启用通过 URL 插入图片功能
        ],
      },
    },

    // 表格配置（基础Markdown表格）
    table: {
      contentToolbar: ["tableColumn", "tableRow"],
    },

    // 链接配置
    link: {
      decorators: {
        openInNewTab: {
          mode: "manual",
          label: "在新标签页中打开",
          attributes: {
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
        { language: "markdown", label: "Markdown" },
      ],
    },

    // 字数统计配置
    wordCount: {
      onUpdate: (stats: any) => {
        // 可以在这里处理字数统计更新
        console.log(
          `Markdown - 字符数: ${stats.characters}, 单词数: ${stats.words}`
        );
      },
    },
  },
};
