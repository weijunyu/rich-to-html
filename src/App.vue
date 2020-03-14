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
          >H1</button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
          >H2</button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
            @click="commands.heading({ level: 3 })"
          >H3</button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 4 }) }"
            @click="commands.heading({ level: 4 })"
          >H4</button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 5 }) }"
            @click="commands.heading({ level: 5 })"
          >H5</button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 6 }) }"
            @click="commands.heading({ level: 6 })"
          >H6</button>

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

          <button class="menubar__button" @click="commands.horizontal_rule">--</button>

          <button class="menubar__button" @click="commands.undo">
            <i class="fas fa-undo"></i>
          </button>

          <button class="menubar__button" @click="commands.redo">
            <i class="fas fa-redo"></i>
          </button>

          <button class="menubar__button" @click="clearContent">Clear Content</button>

          <button class="menubar__button copy-html" @click="copyHtml">Copy HTML</button>

          <button class="menubar__button copy-markdown" @click="copyMarkdown">Copy Markdown</button>
        </div>
      </editor-menu-bar>
      <editor-menu-bubble
        class="menububble"
        :editor="editor"
        @hide="hideLinkMenu"
        v-slot="{ commands, isActive, getMarkAttrs, menu }"
      >
        <div
          class="menububble"
          :class="{ 'is-active': menu.isActive }"
          :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
        >
          <form
            class="menububble__form"
            v-if="linkMenuIsActive"
            @submit.prevent="setLinkUrl(commands.link, linkUrl)"
          >
            <input
              class="menububble__input"
              type="text"
              v-model="linkUrl"
              placeholder="https://"
              ref="linkInput"
              @keydown.esc="hideLinkMenu"
            />
            <button
              class="menububble__button"
              @click="setLinkUrl(commands.link, null)"
              type="button"
            >OK</button>
          </form>

          <template v-else>
            <button
              class="menububble__button"
              @click="showLinkMenu(getMarkAttrs('link'))"
              :class="{ 'is-active': isActive.link() }"
            >
              <span>{{ isActive.link() ? "Update Link" : "Add Link" }}</span>
              <i class="fas fa-link"></i>
            </button>
          </template>
        </div>
      </editor-menu-bubble>
      <editor-content class="editor__content" id="editor__content" :editor="editor" />
    </div>

    <div class="toggle-view">
      <button
        class="sgds-button"
        :class="{'is-secondary': viewMode === 'html' }"
        @click="viewMode = 'html'"
      >View HTML</button>
      <button
        class="sgds-button"
        :class="{'is-secondary': viewMode === 'markdown' }"
        @click="viewMode = 'markdown'"
      >View Markdown</button>
    </div>

    <div class="export" v-if="viewMode === 'html'">
      <h3>HTML</h3>
      <pre><code>{{ displayedHtml }}</code></pre>
    </div>
    <div class="export" v-if="viewMode === 'markdown'">
      <h3>Markdown</h3>
      <pre><code>{{ displayedMarkdown }}</code></pre>
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar, EditorMenuBubble } from "tiptap";
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
import ClipboardJS from "clipboard";
import Turndown from "turndown/lib/turndown.browser.es";
const initialContent = `
  <h2>
    Export HTML or JSON
  </h2>
  <p>
    You are able to export your data as <code>HTML</code> or <code>JSON</code>.
  </p>
`;
export default {
  components: {
    EditorContent,
    EditorMenuBar,
    EditorMenuBubble
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
        content: initialContent,
        onUpdate: ({ getHTML }) => {
          this.html = getHTML();
        }
      }),
      html: initialContent,
      linkUrl: null,
      linkMenuIsActive: false,
      viewMode: "html" // or "markdown"
    };
  },
  methods: {
    copyHtml() {
      new ClipboardJS(".copy-html", {
        text: () => {
          return this.beautify(this.html);
        }
      });
    },
    copyMarkdown() {
      new ClipboardJS(".copy-markdown", {
        text: () => {
          return this.turndown(this.html);
        }
      });
    },
    beautify(html) {
      return prettier.format(html, {
        parser: "html",
        plugins: [parserHtml]
      });
    },
    turndown(html) {
      let turndownService = new Turndown();
      return turndownService.turndown(html);
    },
    clearContent() {
      this.editor.clearContent(true);
      this.editor.focus();
    },
    showLinkMenu(attrs) {
      this.linkUrl = attrs.href;
      this.linkMenuIsActive = true;
      this.$nextTick(() => {
        this.$refs.linkInput.focus();
      });
    },
    hideLinkMenu() {
      this.linkUrl = null;
      this.linkMenuIsActive = false;
    },
    setLinkUrl(command, url) {
      command({ href: url });
      this.hideLinkMenu();
    }
  },
  computed: {
    displayedHtml() {
      return this.beautify(this.html);
    },
    displayedMarkdown() {
      return this.turndown(this.html);
    }
  },
  mounted() {
    tippy(".copy-html", {
      content: "Copied",
      trigger: "click"
    });
    tippy(".copy-markdown", {
      content: "Copied",
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

.menububble.is-active {
  opacity: 1;
  visibility: visible;
}

.menububble {
  position: absolute;
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;

  z-index: 51;

  padding: 0.3rem;
  margin-bottom: 0.5rem;
}

.menububble .menububble__button i {
  margin-left: 0.25rem;
}

.editor__content {
  border: 1px solid grey;
}

.toggle-view {
  margin-bottom: 1rem;
  text-align: center;
}
</style>
