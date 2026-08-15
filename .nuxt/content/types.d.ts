import type { PageCollectionItemBase, DataCollectionItemBase } from '@nuxt/content'

declare module '@nuxt/content' {
   interface ContentCollectionItem extends PageCollectionItemBase {
    hero: {
    headline?: string
    links: {
      label: string
      to: string
      icon?: string
      trailingIcon?: string
      size?: ("xs" | "sm" | "md" | "lg" | "xl")
      trailing?: boolean
      target?: ("_blank" | "_self")
      color?: ("primary" | "secondary" | "neutral" | "error" | "warning" | "success" | "info")
      variant?: ("solid" | "outline" | "subtle" | "soft" | "ghost" | "link")
    }[]
    }
    terminal: {
    lines: {
      segments: {
      text: string
      style: string
      }[]
    }[]
    }
    logos: {
    title: string
    items: string[]
    }
    features: {
    headline?: string
    title: string
    description: string
    items: {
      icon: string
      title: string
      description: string
    }[]
    }
    metrics: {
    headline?: string
    title: string
    description: string
    items: {
      value: string
      label: string
      class: string
    }[]
    }
    cta: {
    title: string
    description: string
    command: string
    links: {
      label: string
      to: string
      icon?: string
      trailingIcon?: string
      size?: ("xs" | "sm" | "md" | "lg" | "xl")
      trailing?: boolean
      target?: ("_blank" | "_self")
      color?: ("primary" | "secondary" | "neutral" | "error" | "warning" | "success" | "info")
      variant?: ("solid" | "outline" | "subtle" | "soft" | "ghost" | "link")
    }[]
    }
  }
  

  interface PageCollections {
    content: ContentCollectionItem
  }

  interface Collections {
    content: ContentCollectionItem
  }
}
