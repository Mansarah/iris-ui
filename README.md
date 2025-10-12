

```markdown
# Iris UI 

A modern, open-source UI component library for Next.js, built with Tailwind CSS and TypeScript.

---

## ✨ Features

- **100+ customizable UI components**
- **Dark mode & responsive design**
- **TypeScript support**
- **Optimized for performance**
- **Easy integration**

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

```bash
git clone https://github.com/your-username/sajid-tech-iris-ui.git
cd sajid-tech-iris-ui
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 📦 Project Structure

```bash

sajid-tech-iris-ui/
    ├── README.md
    ├── components.json
    ├── eslint.config.mjs
    ├── LICENSE
    ├── mdx-components.tsx
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    ├── source.config.ts
    ├── tsconfig.json
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── (root)/
    │   │   ├── layout.tsx
    │   │   └── page.tsx
    │   ├── api/
    │   │   └── search/
    │   │       └── route.ts
    │   ├── docs/
    │   │   ├── layout.tsx
    │   │   └── [[...slug]]/
    │   │       └── page.tsx
    │   └── preview/
    │       └── [[...slug]]/
    │           └── page.tsx
    ├── components/
    │   ├── open-v0-button.tsx
    │   ├── icons/
    │   │   ├── arrow-right-broken.tsx
    │   │   ├── arrow25.tsx
    │   │   ├── compass.tsx
    │   │   ├── conffeti.tsx
    │   │   ├── motion.tsx
    │   │   ├── nextjs.tsx
    │   │   ├── react.tsx
    │   │   ├── shadcn.tsx
    │   │   ├── tailwindcss.tsx
    │   │   ├── v0.tsx
    │   │   └── x-icon.tsx
    │   ├── irisui/
    │   │   ├── action-search-bar.tsx
    │   │   ├── avatar-picker.tsx
    │   │   ├── checkout-interaction.tsx
    │   │   ├── currency-transfer.tsx
    │   │   ├── hand-written-title.tsx
    │   │   ├── matrix-text.tsx
    │   │   ├── particle-button.tsx
    │   │   ├── tweet-card.tsx
    │   │   ├── blocks/
    │   │   │   ├── ai-card-generation/
    │   │   │   │   ├── ai-card-generation.tsx
    │   │   │   │   ├── error-generation.tsx
    │   │   │   │   ├── form-generation.tsx
    │   │   │   │   ├── header-generation.tsx
    │   │   │   │   ├── preview-generation.tsx
    │   │   │   │   └── settings-generation.tsx
    │   │   │   └── ai-chat/
    │   │   │       ├── ai-chat.tsx
    │   │   │       └── multimodal-input.tsx
    │   │   ├── button/
    │   │   │   ├── btn-01.tsx
    │   │   │   ├── btn-02.tsx
    │   │   │   ├── btn-03.tsx
    │   │   │   ├── btn-04.tsx
    │   │   │   ├── btn-05.tsx
    │   │   │   ├── btn-06.tsx
    │   │   │   ├── btn-07.tsx
    │   │   │   ├── btn-08.tsx
    │   │   │   ├── btn-09.tsx
    │   │   │   ├── btn-10.tsx
    │   │   │   ├── btn-11.tsx
    │   │   │   ├── btn-12.tsx
    │   │   │   ├── btn-13.tsx
    │   │   │   ├── btn-14.tsx
    │   │   │   └── btn-15.tsx
    │   │   ├── card/
    │   │   │   ├── card-01.tsx
    │   │   │   ├── card-02.tsx
    │   │   │   ├── card-03.tsx
    │   │   │   ├── card-04.tsx
    │   │   │   ├── card-05.tsx
    │   │   │   ├── card-06.tsx
    │   │   │   ├── card-07.tsx
    │   │   │   ├── card-08.tsx
    │   │   │   ├── card-09.tsx
    │   │   │   └── card-10.tsx
    │   │   ├── faq/
    │   │   │   ├── faq-01.tsx
    │   │   │   ├── faq-02.tsx
    │   │   │   ├── faq-03.tsx
    │   │   │   └── faq-04.tsx
    │   │   ├── input/
    │   │   │   ├── input-01.tsx
    │   │   │   ├── input-02.tsx
    │   │   │   ├── input-03.tsx
    │   │   │   ├── input-04.tsx
    │   │   │   ├── input-05.tsx
    │   │   │   ├── input-06.tsx
    │   │   │   ├── input-08.tsx
    │   │   │   ├── input-09.tsx
    │   │   │   └── input-10.tsx
    │   │   ├── list/
    │   │   │   ├── list-01.tsx
    │   │   │   ├── list-02.tsx
    │   │   │   ├── list-03.tsx
    │   │   │   ├── list-04.tsx
    │   │   │   ├── list-05.tsx
    │   │   │   └── list-06.tsx
    │   │   ├── pricing/
    │   │   │   ├── pricing-01.tsx
    │   │   │   ├── pricing-02.tsx
    │   │   │   ├── pricing-03.tsx
    │   │   │   ├── pricing-04.tsx
    │   │   │   ├── pricing-05.tsx
    │   │   │   └── pricing-06.tsx
    │   │   └── text/
    │   │       ├── text-01.tsx
    │   │       ├── text-02.tsx
    │   │       ├── text-03.tsx
    │   │       ├── text-04.tsx
    │   │       ├── text-05.tsx
    │   │       └── text-06.tsx
    │   ├── landing/
    │   │   ├── component-showcase-card.tsx
    │   │   ├── feature-block.tsx
    │   │   ├── footer.tsx
    │   │   ├── header-pro.tsx
    │   │   ├── Header.tsx
    │   │   ├── hero.tsx
    │   │   ├── interactive-preview.tsx
    │   │   ├── interfaceCards.tsx
    │   │   ├── showcase.tsx
    │   │   └── technology-badges.tsx
    │   ├── mdx/
    │   │   ├── preview-client.tsx
    │   │   ├── preview-content.tsx
    │   │   ├── preview.tsx
    │   │   └── refresh-button.tsx
    │   ├── nav/
    │   │   ├── desktop-nav.tsx
    │   │   ├── index.tsx
    │   │   └── mobile-nav.tsx
    │   ├── providers/
    │   │   └── theme-providers.tsx
    │   └── ui/
    │       ├── accordion.tsx
    │       ├── alert-dialog.tsx
    │       ├── alert.tsx
    │       ├── aspect-ratio.tsx
    │       ├── avatar.tsx
    │       ├── badge.tsx
    │       ├── breadcrumb.tsx
    │       ├── browse-block.tsx
    │       ├── browse-button.tsx
    │       ├── button.tsx
    │       ├── calendar.tsx
    │       ├── card.tsx
    │       ├── carousel.tsx
    │       ├── chart.tsx
    │       ├── checkbox.tsx
    │       ├── collapsible.tsx
    │       ├── command.tsx
    │       ├── context-menu.tsx
    │       ├── dialog.tsx
    │       ├── drawer.tsx
    │       ├── dropdown-menu.tsx
    │       ├── form.tsx
    │       ├── hover-card.tsx
    │       ├── input-otp.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── menubar.tsx
    │       ├── navigation-menu.tsx
    │       ├── pagination.tsx
    │       ├── popover.tsx
    │       ├── progress.tsx
    │       ├── radio-group.tsx
    │       ├── resizable.tsx
    │       ├── scroll-area.tsx
    │       ├── select.tsx
    │       ├── separator.tsx
    │       ├── sheet.tsx
    │       ├── sidebar.tsx
    │       ├── skeleton.tsx
    │       ├── slider.tsx
    │       ├── sonner.tsx
    │       ├── switch.tsx
    │       ├── table.tsx
    │       ├── tabs.tsx
    │       ├── textarea.tsx
    │       ├── toggle-group.tsx
    │       ├── toggle.tsx
    │       └── tooltip.tsx
    ├── config/
    │   ├── navigation.ts
    │   └── site.ts
    ├── content/
    │   └── docs/
    │       ├── index.mdx
    │       ├── meta.json
    │       ├── blocks/
    │       │   ├── ai-card-generation.mdx
    │       │   └── ai-chat.mdx
    │       ├── components/
    │       │   ├── action-search-bar.mdx
    │       │   ├── avatar-picker.mdx
    │       │   ├── button.mdx
    │       │   ├── card.mdx
    │       │   ├── checkout-interaction.mdx
    │       │   ├── currency-transfer.mdx
    │       │   ├── faq.mdx
    │       │   ├── hand-written-title.mdx
    │       │   ├── input.mdx
    │       │   ├── list.mdx
    │       │   ├── matrix-text.mdx
    │       │   ├── particle-button.mdx
    │       │   ├── pricing.mdx
    │       │   ├── text.mdx
    │       │   └── tweet-card.mdx
    │       └── hooks/
    │           └── use-auto-resize-textarea.mdx
    ├── hooks/
    │   ├── use-auto-resize-textarea.ts
    │   ├── use-click-outside.ts
    │   ├── use-copy-to-clipboard.ts
    │   ├── use-debounce.ts
    │   ├── use-file-input.ts
    │   ├── use-intersection.ts
    │   ├── use-mobile.ts
    │   └── use-tags.ts
    ├── lib/
    │   ├── action.ts
    │   ├── layout.shared.tsx
    │   ├── source.ts
    │   ├── theme-toggle.tsx
    │   └── utils.ts
    ├── public/
    │   └── r/
    │       ├── action-search-bar.json
    │       ├── ai-card-generation.json
    │       ├── ai-chat.json
    │       ├── avatar-picker.json
    │       ├── btn-01.json
    │       ├── btn-02.json
    │       ├── btn-03.json
    │       ├── btn-04.json
    │       ├── btn-05.json
    │       ├── btn-06.json
    │       ├── btn-07.json
    │       ├── btn-08.json
    │       ├── btn-09.json
    │       ├── btn-10.json
    │       ├── btn-11.json
    │       ├── btn-12.json
    │       ├── btn-13.json
    │       ├── btn-15.json
    │       ├── card-01.json
    │       ├── card-02.json
    │       ├── card-03.json
    │       ├── card-04.json
    │       ├── card-05.json
    │       ├── card-06.json
    │       ├── card-07.json
    │       ├── card-08.json
    │       ├── card-09.json
    │       ├── card-10.json
    │       ├── checkout-interaction.json
    │       ├── currency-transfer.json
    │       ├── faq-01.json
    │       ├── faq-02.json
    │       ├── faq-03.json
    │       ├── faq-04.json
    │       ├── hand-written-title.json
    │       ├── input-01.json
    │       ├── input-02.json
    │       ├── input-03.json
    │       ├── input-04.json
    │       ├── input-05.json
    │       ├── input-06.json
    │       ├── input-08.json
    │       ├── input-09.json
    │       ├── input-10.json
    │       ├── list-01.json
    │       ├── list-02.json
    │       ├── list-03.json
    │       ├── list-04.json
    │       ├── list-05.json
    │       ├── list-06.json
    │       ├── matrix-text.json
    │       ├── particle-button.json
    │       ├── pricing-01.json
    │       ├── pricing-02.json
    │       ├── pricing-03.json
    │       ├── pricing-04.json
    │       ├── pricing-05.json
    │       ├── pricing-06.json
    │       ├── text-01.json
    │       ├── text-02.json
    │       ├── text-03.json
    │       ├── text-04.json
    │       ├── text-05.json
    │       ├── text-06.json
    │       ├── tweet-card.json
    │       ├── use-auto-resize-textarea.json
    │       ├── use-click-outside.json
    │       ├── use-copy-to-clipboard.json
    │       ├── use-mobile.json
    │       └── utils.json
    ├── registry/
    │   ├── index.ts
    │   ├── registry-block.ts
    │   ├── registry-components.ts
    │   ├── registry-hooks.ts
    │   ├── registry-lib.ts
    │   └── schema.ts
    ├── scripts/
    │   └── build-registry.ts
    └── .source/
        ├── index.ts
        └── source.config.mjs

```

---

## 🎨 Theming

Customize colors in `app/globals.css`:

```css
:root {
  --color-primary: oklch(0.21 0.006 285.885);
  --color-background: oklch(1 0 0);
}
```

---

## 📂 Documentation

Explore live previews and usage examples at `/docs`.

---
