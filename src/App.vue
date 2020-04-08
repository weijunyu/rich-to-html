<template>
  <div class="app">
    <div class="editor">
      <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
        <div class="menubar">
          <button
            class="menubar__button"
            :class="{ active: isActive.bold() }"
            @click="commands.bold"
          >
            <i class="fas fa-bold"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ active: isActive.italic() }"
            @click="commands.italic"
          >
            <i class="fas fa-italic"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ active: isActive.strike() }"
            @click="commands.strike"
          >
            <i class="fas fa-strikethrough"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ active: isActive.underline() }"
            @click="commands.underline"
          >
            <i class="fas fa-underline"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ active: isActive.code() }"
            @click="commands.code"
          >
            <i class="fas fa-code"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ active: isActive.paragraph() }"
            @click="commands.paragraph"
          >
            <i class="fas fa-paragraph"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ active: isActive.heading({ level: 1 }) }"
            @click="commands.heading({ level: 1 })"
          >
            H1
          </button>

          <button
            class="menubar__button"
            :class="{ active: isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
          >
            H2
          </button>

          <button
            class="menubar__button"
            :class="{ active: isActive.heading({ level: 3 }) }"
            @click="commands.heading({ level: 3 })"
          >
            H3
          </button>

          <button
            class="menubar__button"
            :class="{ active: isActive.heading({ level: 4 }) }"
            @click="commands.heading({ level: 4 })"
          >
            H4
          </button>

          <button
            class="menubar__button"
            :class="{ active: isActive.heading({ level: 5 }) }"
            @click="commands.heading({ level: 5 })"
          >
            H5
          </button>

          <button
            class="menubar__button"
            :class="{ active: isActive.heading({ level: 6 }) }"
            @click="commands.heading({ level: 6 })"
          >
            H6
          </button>

          <button
            class="menubar__button"
            :class="{ active: isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <i class="fas fa-list-ul"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ active: isActive.ordered_list() }"
            @click="commands.ordered_list"
          >
            <i class="fas fa-list-ol"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ active: isActive.blockquote() }"
            @click="commands.blockquote"
          >
            <i class="fas fa-quote-right"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ active: isActive.code_block() }"
            @click="commands.code_block"
          >
            <i class="fas fa-paragraph"></i><i class="fas fa-code"></i>
          </button>

          <button class="menubar__button" @click="commands.horizontal_rule">
            &boxh;
          </button>

          <button
            class="menubar__button"
            @click="
              commands.createTable({
                rowsCount: 3,
                colsCount: 3,
                withHeaderRow: false,
              })
            "
          >
            <Icon src="/assets/table.svg" alt="insert table" />
          </button>

          <template v-if="isActive.table()">
            <button class="menubar__button" @click="commands.deleteTable">
              <Icon src="/assets/delete_table.svg" alt="delete table" />
            </button>
            <button class="menubar__button" @click="commands.addColumnBefore">
              <Icon src="/assets/add_col_before.svg" alt="add column before" />
            </button>
            <button class="menubar__button" @click="commands.addColumnAfter">
              <Icon src="/assets/add_col_after.svg" alt="add column after" />
            </button>
            <button class="menubar__button" @click="commands.deleteColumn">
              <Icon src="/assets/delete_col.svg" alt="delete column" />
            </button>
            <button class="menubar__button" @click="commands.addRowBefore">
              <Icon src="/assets/add_row_before.svg" alt="add row before" />
            </button>
            <button class="menubar__button" @click="commands.addRowAfter">
              <Icon src="/assets/add_row_after.svg" alt="add row after" />
            </button>
            <button class="menubar__button" @click="commands.deleteRow">
              <Icon src="/assets/delete_row.svg" alt="delete row" />
            </button>
            <button class="menubar__button" @click="commands.toggleCellMerge">
              <Icon src="/assets/combine_cells.svg" alt="combine cells" />
            </button>
          </template>

          <button
            class="menubar__button"
            @click="showImagePrompt(commands.image)"
          >
            <i class="fas fa-image"></i>
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

          <button class="menubar__button copy-markdown" @click="copyMarkdown">
            Copy Markdown
          </button>

          <button
            class="menubar__button"
            :class="{ active: showSearchAndReplace }"
            @click="showSearchAndReplace = !showSearchAndReplace"
          >
            Search and replace
          </button>
          <template v-if="showSearchAndReplace">
            <span class="menubar__button">
              <label for="search">Search</label>
              <input
                id="search"
                @keydown.enter.prevent="editor.commands.find(searchTerm)"
                type="text"
                v-model="searchTerm"
              />
            </span>
            <span class="menubar__button">
              <label for="replace">Replace</label>
              <input
                id="replace"
                @keydown.enter.prevent="editor.commands.replace(replaceWith)"
                type="text"
                v-model="replaceWith"
              />
            </span>
            <button
              class="menubar__button"
              @click="editor.commands.find(searchTerm)"
            >
              Find
            </button>
            <button
              class="menubar__button"
              @click="editor.commands.clearSearch()"
            >
              Clear
            </button>
            <button
              class="menubar__button"
              @click="editor.commands.replace(replaceWith)"
            >
              Replace
            </button>
            <button
              class="menubar__button"
              @click="editor.commands.replaceAll(replaceWith)"
            >
              Replace All
            </button>
          </template>
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
          :class="{ active: menu.isActive }"
          :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
        >
          <form
            class="menububble__form"
            v-if="linkMenuIsActive"
            @submit.prevent="setLinkUrl(commands.link, linkUrl)"
            style="display: flex"
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
              class="menububble__button button"
              @click="setLinkUrl(commands.link, null)"
              type="button"
            >
              OK
            </button>
          </form>

          <template v-else>
            <button
              class="menububble__button button"
              @click="showLinkMenu(getMarkAttrs('link'))"
              :class="{ active: isActive.link() }"
            >
              <span>{{ isActive.link() ? "Update Link" : "Add Link" }}</span>
              <i class="fas fa-link"></i>
            </button>
          </template>
        </div>
      </editor-menu-bubble>
      <editor-content
        class="editor__content"
        id="editor__content"
        :editor="editor"
      />
    </div>

    <div class="toggle-view">
      <span>
        <button
          class="tab"
          :class="{ active: viewMode === 'html' }"
          @click="viewMode = 'html'"
        >
          View HTML
        </button>
        <button
          class="tab"
          :class="{ active: viewMode === 'markdown' }"
          @click="viewMode = 'markdown'"
        >
          View Markdown
        </button>
      </span>

      <a href="https://github.com/weijunyu/rich-to-html">
        <Icon src="/assets/GitHub-Mark-32px.png"></Icon
      ></a>
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
  Bold,
  BulletList,
  Code,
  CodeBlock,
  HardBreak,
  Heading,
  History,
  HorizontalRule,
  Image,
  Italic,
  Link,
  ListItem,
  OrderedList,
  Strike,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  Underline,
  Search,
} from "tiptap-extensions";
import prettier from "prettier/standalone";
import parserHtml from "prettier/parser-html";
import tippy from "tippy.js";
import ClipboardJS from "clipboard";
import Turndown from "turndown/lib/turndown.browser.es";
import Icon from "./components/Icon.vue";
const initialContent = `<h1>Convert rich text to HTML or Markdown</h1>
<p>
  Start writing, or paste formatted content from HTML documents, Google Docs,
  Microsoft Word etc.
</p>
<h2>Export HTML or Markdown</h2>
<p>
  Convert and export your document as <code>HTML</code> or
  <code>Markdown</code>.
</p>
<p>Based on:</p>
<ul>
  <li>
    <p>
      <a
        href="https://github.com/scrumpy/tiptap"
        rel="noopener noreferrer nofollow"
        >tiptap</a
      >
    </p>
  </li>
  <li>
    <p>
      <a
        href="https://github.com/domchristie/turndown"
        rel="noopener noreferrer nofollow"
        >turndown</a
      >
    </p>
  </li>
</ul>
`;
export default {
  components: {
    EditorContent,
    EditorMenuBar,
    EditorMenuBubble,
    Icon,
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new Bold(),
          new BulletList(),
          new Code(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3, 4, 5, 6] }),
          new History(),
          new HorizontalRule(),
          new Image(),
          new Italic(),
          new Link(),
          new ListItem(),
          new OrderedList(),
          new Strike(),
          new Table({
            resizable: true,
          }),
          new TableHeader(),
          new TableCell(),
          new TableRow(),
          new Underline(),
          new Search({
            disableRegex: false,
          }),
        ],
        content: initialContent,
        onUpdate: ({ getHTML }) => {
          this.html = getHTML();
        },
      }),
      html: initialContent,
      linkUrl: null,
      linkMenuIsActive: false,
      viewMode: "html", // or "markdown"
      showSearchAndReplace: false,
      searchTerm: "",
      replaceWith: "",
    };
  },
  methods: {
    copyHtml() {
      new ClipboardJS(".copy-html", {
        text: () => {
          return this.beautify(this.html);
        },
      });
    },
    copyMarkdown() {
      new ClipboardJS(".copy-markdown", {
        text: () => {
          return this.turndown(this.html);
        },
      });
    },
    beautify(html) {
      return prettier.format(html, {
        parser: "html",
        plugins: [parserHtml],
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
    },
    showImagePrompt(command) {
      const src = prompt("Enter image URL");
      if (src != null) {
        command({ src });
      }
    },
  },
  computed: {
    displayedHtml() {
      return this.beautify(this.html);
    },
    displayedMarkdown() {
      return this.turndown(this.html);
    },
  },
  mounted() {
    tippy(".copy-html", {
      content: "Copied",
      trigger: "click",
    });
    tippy(".copy-markdown", {
      content: "Copied",
      trigger: "click",
    });
  },
};
</script>

<style>
#editor-content:focus,
.ProseMirror-focused {
  outline: none;
}
.ProseMirror > pre {
  padding: 1rem;
  margin: 0.5rem;
  background: #3e3e3e;
  color: white;
  border-radius: 4px;
}
.find {
  background: rgba(255, 213, 0, 0.5);
}
</style>

<style scoped>
.editor {
  position: relative;
  margin-bottom: 1rem;
}

.input-group {
  display: flex;
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
  margin: 0.5rem 1px;
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
.menubar__button.active {
  color: #1379ff;
  background-color: #efefef;
}

.menubar label {
  display: flex;
  align-items: center;
}
.menubar input {
  border-radius: 4px;
}

.menububble.active {
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
  border-bottom: 0.5rem solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tab {
  padding: 1rem;
  background: fff;
  border: none;
  border-radius: 0.5rem 0.5rem 0 0;
  cursor: pointer;
}

.tab:hover {
  background-color: #f0f0f0;
}

.tab:active,
.tab.active {
  background-color: #e0e0e0;
}

.tab:focus {
  outline: none;
}

.button {
  padding: 0.5rem;
  background: #fff;
  border: 1px solid #000;
}
.button:hover {
  cursor: pointer;
  background: #efefef;
}
.button:active,
.button.active {
  color: #1379ff;
  background-color: #e0e0e0;
}

.export pre {
  overflow: auto;
}
</style>
