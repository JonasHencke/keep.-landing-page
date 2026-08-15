import _RemarkEmoji from 'remark-emoji'
import _Highlight from '/Users/jonas/Documents/keep.-landing-page/node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-string@1.1.0_magicast@0.5.4_oxc-parser@0.139.0_rolldown@1.2.1__e2d56cf3c7ee8402e0a681212ec49164/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.js'

export const remarkPlugins = {
  'remark-emoji': { instance: _RemarkEmoji },
}

export const rehypePlugins = {
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":{"light":"material-theme-lighter","default":"material-theme","dark":"material-theme-palenight"}}