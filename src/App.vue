<template>
  <div class="app sgds-container content has-default-header-styles">
    <div class="editor">
      <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
        <div class="menubar">
          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
          >
            <i class="fas fa-bold"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
          >
            <i class="fas fa-italic"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.strike() }"
            @click="commands.strike"
          >
            <i class="fas fa-strikethrough"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.underline() }"
            @click="commands.underline"
          >
            <i class="fas fa-underline"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.code() }"
            @click="commands.code"
          >
            <i class="fas fa-code"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.paragraph() }"
            @click="commands.paragraph"
          >
            <i class="fas fa-paragraph"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
            @click="commands.heading({ level: 1 })"
          >
            H1
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
          >
            H2
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
            @click="commands.heading({ level: 3 })"
          >
            H3
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 4 }) }"
            @click="commands.heading({ level: 4 })"
          >
            H4
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 5 }) }"
            @click="commands.heading({ level: 5 })"
          >
            H5
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 6 }) }"
            @click="commands.heading({ level: 6 })"
          >
            H6
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <i class="fas fa-list-ul"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.ordered_list() }"
            @click="commands.ordered_list"
          >
            <i class="fas fa-list-ol"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.blockquote() }"
            @click="commands.blockquote"
          >
            <i class="fas fa-quote-right"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.code_block() }"
            @click="commands.code_block"
          >
            <i class="fas fa-code"></i>(block)
          </button>

          <button class="menubar__button" @click="commands.horizontal_rule">
            --
          </button>

          <button class="menubar__button" @click="commands.undo">
            <i class="fas fa-undo"></i>
          </button>

          <button class="menubar__button" @click="commands.redo">
            <i class="fas fa-redo"></i>
          </button>

          <button class="menubar__button" @click="clearContent">
            Clear Content
          </button>

          <button class="menubar__button copy-html" @click="copyHtml">
            Copy HTML
          </button>
        </div>
      </editor-menu-bar>

      <editor-content
        class="editor__content"
        id="editor__content"
        :editor="editor"
      />
    </div>

    <div class="export">
      <h3>HTML</h3>
      <pre><code>{{ beautify(html) }}</code></pre>
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from "tiptap-extensions";
import prettier from "prettier/standalone";
import parserHtml from "prettier/parser-html";
import tippy from "tippy.js";
export default {
  components: {
    EditorContent,
    EditorMenuBar
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3, 4, 5, 6] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History()
        ],
        content: `
          <h2>
            Export HTML or JSON
          </h2>
          <p>
            You are able to export your data as <code>HTML</code> or <code>JSON</code>.
          </p>
        `,
        onUpdate: ({ getHTML }) => {
          this.html = getHTML();
        }
      }),
      html: "Update content to see changes"
    };
  },
  methods: {
    copyHtml() {
      new window.ClipboardJS(".copy-html", {
        text: () => {
          return this.beautify(this.html);
        }
      });
    },
    beautify(html) {
      return prettier.format(html, {
        parser: "html",
        plugins: [parserHtml]
      });
    },
    clearContent() {
      this.editor.clearContent(true);
      this.editor.focus();
    }
  },
  mounted() {
    tippy(".copy-html", {
      content: "Copied",
      interactive: true,
      trigger: "click"
    });
  }
};
</script>

<style scoped>
.editor {
  position: relative;
  margin-bottom: 1rem;
}

.menubar {
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 1rem 0.5rem;

  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border: 1px solid #c3c3c3;
}
.menubar__button {
  background: #fff;
  border: 1px solid #e3e3e300;
  /* border-radius: 6px; */
  margin: 0 1px;
  padding: 0.6rem 1.2rem;
  display: flex;
  align-items: center;
  min-width: 2.6rem;

  display: flex;
  justify-content: center;

  transition: all 0.2s;
}
.menubar__button:hover {
  cursor: pointer;
  background: #efefef;
}
.menubar__button.is-active {
  color: #1379ff;
  background-color: #efefef;
  font-weight: bolder;
}
.editor__content {
  border: 1px solid black;
}
</style>
