import type { FlatConfigComposer } from "../node_modules/.pnpm/eslint-flat-config-utils@3.2.0/node_modules/eslint-flat-config-utils/dist/index.mjs"
import { defineFlatConfigs } from "../node_modules/.pnpm/@nuxt+eslint-config@1.17.0_@typescript-eslint+utils@8.66.0_eslint@10.8.1_jiti@2.7.0_sup_97a8f7a3fc0fb30979cd78453d83ad12/node_modules/@nuxt/eslint-config/dist/flat.mjs"
import type { NuxtESLintConfigOptionsResolved } from "../node_modules/.pnpm/@nuxt+eslint-config@1.17.0_@typescript-eslint+utils@8.66.0_eslint@10.8.1_jiti@2.7.0_sup_97a8f7a3fc0fb30979cd78453d83ad12/node_modules/@nuxt/eslint-config/dist/flat.mjs"

declare const configs: FlatConfigComposer
declare const options: NuxtESLintConfigOptionsResolved
declare const withNuxt: typeof defineFlatConfigs
export default withNuxt
export { withNuxt, defineFlatConfigs, configs, options }