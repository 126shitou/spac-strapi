export default () => ({
  "populate-all": {
    enabled: true,
  },
  tinymce: {
    enabled: true,
    config: {
      editor: {
        outputFormat: "html",
        editorConfig: {
          // 编辑器基本配置
          height: 1200,
          menubar: false,
          resize: true,
          language: 'zh_CN',
          // 扩展有效元素
          extended_valid_elements:
            "span[*], img[*], small[*], div[*], section[*], article[*], aside[*], header[*], footer[*], nav[*], figure[*], figcaption[*]",
          // 强制根块元素
          forced_root_block: "p",
          // 不转换URL
          convert_urls: false,
          // 实体编码方式
          // 启用拖拽
          paste_data_images: true,
          // 免费版所有可用插件
          plugins: [
            "preview",
            "importcss",
            "searchreplace",
            "autolink",
            "autosave",
            "save",
            "directionality",
            "code",
            "visualblocks",
            "visualchars",
            "fullscreen",
            "image",
            "link",
            "media",
            "codesample",
            "table",
            "charmap",
            "pagebreak",
            "nonbreaking",
            "anchor",
            "insertdatetime",
            "advlist",
            "lists",
            "wordcount",
            "help",
            "emoticons",
            "accordion",
            "autoresize",
           ].join(" "),

          // 完整的工具栏配置，包含所有免费功能
          toolbar: [
            "fullscreen   | undo redo | accordion accordionremove | blocks ",
            "bold italic underline strikethrough fontsizeinput lineheight | forecolor backcolor",
            "alignleft aligncenter alignright alignjustify | numlist bullist outdent indent",
            "link image media table | insertdatetime charmap emoticons hr",
            "searchreplace visualblocks visualchars code codesample ",
            "preview save | help | ltr rtl | anchor nonbreaking | removeformat",
          ].join(" | "),

          // 快速工具栏配置
          quickbars_selection_toolbar:
            "bold italic | quicklink h2 h3 blockquote",
          quickbars_insert_toolbar: "quickimage quicktable",

          // 自动保存配置
          autosave_ask_before_unload: true,
          autosave_interval: "30s",
          autosave_retention: "2m",
          autosave_restore_when_empty: false,



          // 内容样式
          content_style:
            "body { font-family: Helvetica, Arial, sans-serif; font-size: 14px; }",

          // 工具栏模式
          toolbar_mode: "sliding",

          // 右键菜单
          contextmenu: "link image table",

          // 其他有用的配置
          branding: false,
          promotion: false,
          entity_encoding: "raw",

          // 样式格式
          style_formats: [
            {
              title: "标题",
              items: [
                { title: "标题 1", block: "h1" },
                { title: "标题 2", block: "h2" },
                { title: "标题 3", block: "h3" },
                { title: "标题 4", block: "h4" },
                { title: "标题 5", block: "h5" },
                { title: "标题 6", block: "h6" },
              ],
            },
            {
              title: "文本",
              items: [
                { title: "段落", block: "p" },
                { title: "引用", block: "blockquote" },
                { title: "代码", block: "pre" },
              ],
            },
            {
              title: "内联样式",
              items: [
                { title: "粗体", inline: "strong" },
                { title: "斜体", inline: "em" },
                { title: "下划线", inline: "u" },
                { title: "删除线", inline: "del" },
                { title: "上标", inline: "sup" },
                { title: "下标", inline: "sub" },
                { title: "代码", inline: "code" },
              ],
            },
            {
              title: '段落间距',
              items: [
                {
                  title: '紧凑间距',
                  selector: 'p',
                  styles: { 'margin-bottom': '8px' }
                },
                {
                  title: '正常间距',
                  selector: 'p',
                  styles: { 'margin-bottom': '16px' }
                },
                {
                  title: '宽松间距',
                  selector: 'p',
                  styles: { 'margin-bottom': '24px' }
                },
                {
                  title: '超宽松间距',
                  selector: 'p',
                  styles: { 'margin-bottom': '32px' }
                }
              ],
            },
            {
              title: "文本",
              items: [
                { title: "段落", block: "p" },
                { title: "小字", inline: "small" },
                { title: "引用", block: "blockquote" },
                { title: "预格式化", block: "pre" },
              ],
            },
            {
              title: "容器",
              items: [
                { title: "区块", block: "div" },
                { title: "章节", block: "section" },
                { title: "文章", block: "article" },
              ],
            },
          ],
          // 图片配置
          image_advtab: true,
          image_caption: true,
          image_title: true,
          // 表格配置
          table_toolbar:
            "tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",
          table_appearance_options: false,
          table_grid: false,
          table_class_list: [
            { title: "无", value: "" },
            { title: "表格", value: "table" },
            { title: "响应式表格", value: "table-responsive" },
          ],
          // 链接配置
          link_assume_external_targets: true,
          link_context_toolbar: true,
          // 代码示例语言
          codesample_languages: [
            { text: "HTML/XML", value: "markup" },
            { text: "JavaScript", value: "javascript" },
            { text: "CSS", value: "css" },
            { text: "PHP", value: "php" },
            { text: "Ruby", value: "ruby" },
            { text: "Python", value: "python" },
            { text: "Java", value: "java" },
            { text: "C", value: "c" },
            { text: "C#", value: "csharp" },
            { text: "C++", value: "cpp" },
            { text: "TypeScript", value: "typescript" },
            { text: "JSON", value: "json" },
            { text: "SQL", value: "sql" },
            { text: "Bash", value: "bash" },
          ],
        },
      },
    },
  },
});
