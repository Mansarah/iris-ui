
# Iris UI: Next-Gen Component Library

**A high-performance, animated, and customizable UI component library for Next.js, powered by Tailwind CSS, Framer Motion, and Radix UI.**

![Iris UI Banner](https://via.placeholder.com/1200x400/000000/FFFFFF?text=Iris+UI+-+Next-Gen+Components)

---

## 🌟 **Why Iris UI?**

Iris UI is designed to **accelerate modern web development** with:
- **100+ Pre-built Components**: Buttons, cards, inputs, AI blocks, and more.
- **Smooth Animations**: Powered by **Framer Motion** for micro-interactions.
- **Fully Typed**: Built with **TypeScript** for type safety.
- **Dark Mode Support**: Seamless theme switching with **OKLCH** color space.
- **AI-Powered Blocks**: Integrate AI chat, card generation, and more.
- **Documentation Ready**: Built with **Fumadocs** and **MDX**.
- **Optimized for Vercel**: Zero-config deployment.

---

## 📦 **Installation & Setup**

### **Prerequisites**
- **Node.js**: v18 or higher.
- **Package Manager**: `npm`, `yarn`, `pnpm`, or `bun`.
- **Next.js**: v15.5.0 (used in this project).

### **Clone the Repository**
```bash
git clone https://github.com/your-org/iris-ui.git
cd iris-ui
```

### **Install Dependencies**
```bash
pnpm install
# or
npm install
# or
yarn install
```

### **Run the Development Server**
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗 **Project Architecture**

### **Directory Structure**
```
sajid-tech-iris-ui/
├── app/                  # Next.js App Router (pages, layouts, API routes)
│   ├── (root)/          # Root layout and homepage
│   ├── api/             # API routes (e.g., `/api/search`)
│   ├── docs/            # Documentation pages (MDX-powered)
│   └── preview/         # Live component previews
├── components/          # Reusable UI components
│   ├── irisui/          # Custom Iris UI components (buttons, cards, etc.)
│   ├── landing/         # Landing page components (hero, footer, etc.)
│   ├── mdx/             # MDX-related components (previews, refresh buttons)
│   ├── nav/             # Navigation components (desktop, mobile)
│   └── ui/              # Radix UI primitives (accordion, dialog, etc.)
├── config/              # Site and navigation configuration
├── content/             # MDX content for documentation
├── hooks/               # Custom React hooks (e.g., `use-auto-resize-textarea`)
├── lib/                 # Utilities and shared logic (e.g., `cn()`, `source.ts`)
├── public/              # Static assets (images, JSON configs for components)
├── registry/            # Component registry (auto-generated)
├── scripts/             # Build scripts (e.g., `build-registry.ts`)
└── .source/             # Source configuration for Fumadocs
```

---

## 🎨 **Theming & Styling**

### **Tailwind CSS Configuration**
Iris UI uses **Tailwind CSS** for styling. Customize the theme in:
- `app/globals.css`: Global styles, dark mode, and animations.
- `tailwind.config.js`: Extend or override Tailwind’s default theme.

#### **Dark Mode**
- **Automatic**: Uses `next-themes` for system preference detection.
- **Customize**: Modify `globals.css` to adjust dark mode colors (OKLCH color space for accessibility).

#### **Customizing Components**
Override styles using the `cn()` utility (from `lib/utils.ts`):
```tsx
import { cn } from "@/lib/utils";

<Button
  className={cn(
    "bg-blue-500 hover:bg-blue-600", // Custom styles
    "text-white font-medium",         // Override defaults
    "rounded-lg px-4 py-2"           // Additional classes
  )}
>
  Click Me
</Button>
```

---

## 🔧 **Configuration Files**

### **1. `next.config.ts`**
- **MDX Support**: Enabled via `fumadocs-mdx`.
- **Image Optimization**: Configured for Vercel and Unsplash.
- **Font Optimization**: Uses `next/font` for Geist font.
- **Static File Tracing**: Includes `components/irisui/**/*` for static exports.

### **2. `components.json`**
Defines **Radix UI** and **Tailwind CSS** settings:
```json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "zinc"
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

### **3. `tsconfig.json`**
- **TypeScript Paths**: Aliases like `@/*` resolve to `./*`.
- **Strict Mode**: Enabled for type safety.

---

## 📂 **Component Breakdown**

### **Core Components**
| Category       | Components                                                                 | File Path                                      |
|----------------|----------------------------------------------------------------------------|------------------------------------------------|
| **Buttons**    | `btn-01` to `btn-15` (animated, interactive, themed)                      | `components/irisui/button/`                   |
| **Cards**      | `card-01` to `card-10` (social, profile, project, chat)                   | `components/irisui/card/`                     |
| **Inputs**     | `input-01` to `input-10` (text, OTP, search, file upload)                | `components/irisui/input/`                    |
| **Lists**      | `list-01` to `list-06` (animated, interactive)                          | `components/irisui/list/`                     |
| **Pricing**    | `pricing-01` to `pricing-06` (tiered, feature-based)                     | `components/irisui/pricing/`                 |
| **Text**       | `text-01` to `text-06` (typography, handwritten)                        | `components/irisui/text/`                     |
| **FAQ**        | `faq-01` to `faq-04` (accordion, collapsible)                          | `components/irisui/faq/`                      |
| **AI Blocks**  | `ai-chat`, `ai-card-generation` (multimodal, preview)                  | `components/irisui/blocks/`                   |
| **Icons**      | Custom SVG icons (Next.js, Tailwind, React, etc.)                        | `components/icons/`                          |

---

### **Example: Using a Button Component**
```tsx
// Import the component
import Btn01 from "@/components/irisui/button/btn-01";

// Use in your app
<Btn01
  onClick={() => console.log("Button clicked!")}
  className="custom-class" // Optional: Override styles
>
  Submit Form
</Btn01>
```

### **Example: Using an AI Chat Block**
```tsx
// Import the AI Chat component
import AiChat from "@/components/irisui/blocks/ai-chat/ai-chat";

// Render in your page
<AiChat />
```

---

## 🤖 **AI-Powered Blocks**

### **1. AI Chat (`ai-chat.tsx`)**
- **Features**:
  - Multimodal input (text, voice, file uploads).
  - Quick actions (search, summarize, translate).
  - Animated UI with Framer Motion.
- **Customization**:
  - Extend `MultimodalInput` to add more actions.
  - Modify `quickActions` array to change default options.

### **2. AI Card Generation (`ai-card-generation.tsx`)**
- **Features**:
  - Generate portraits with customizable settings (style, background, lighting).
  - Preview and download generated images.
  - Loading animations and progress indicators.
- **Customization**:
  - Update `settings` in `form-generation.tsx` to add more options.
  - Modify `Preview` component to change the preview UI.

---

## 📚 **Documentation System**

### **Powered by Fumadocs & MDX**
- **Auto-generated TOC**: Table of contents for all docs.
- **Search**: Built-in search via `/api/search`.
- **Live Previews**: Interactive component previews.

### **Writing Documentation**
1. **Add MDX Files**:
   - Place `.mdx` files in `content/docs/`.
   - Use frontmatter for metadata:
     ```mdx
     ---
     title: "Button Components"
     description: "A guide to using Iris UI buttons."
     ---
     ```
2. **Reference Components**:
   ```mdx
   import { Btn01 } from "@/components/irisui/button/btn-01";

   <Btn01>Example Button</Btn01>
   ```

### **Generating Static Docs**
```bash
pnpm build
```
Docs are auto-generated in `/docs`.

---

## 🚀 **Deployment**

### **Vercel (Recommended)**
1. Push to GitHub/GitLab.
2. Import into [Vercel](https://vercel.com).
3. Deploy with **zero config** (optimized for Next.js).

### **Static Exports**
```bash
pnpm build
pnpm start
```
Outputs to `.next/`.

---

## 🛠 **Customization Guide**

### **1. Adding New Components**
1. **Create a Component File**:
   ```tsx
   // components/irisui/button/btn-16.tsx
   export default function Btn16() {
     return <button>New Button</button>;
   }
   ```
2. **Add to Registry**:
   Update `registry/registry-components.ts` to include the new component.

### **2. Overriding Styles**
Use the `cn()` utility to merge classes:
```tsx
import { cn } from "@/lib/utils";

<div className={cn("bg-red-500", "hover:bg-red-600")} />
```

### **3. Extending Theming**
Modify `globals.css` to add new themes or override defaults:
```css
:root {
  --custom-color: oklch(0.7 0.1 120);
}

.dark {
  --custom-color: oklch(0.3 0.1 120);
}
```

---

## 🤝 **Contributing**

### **Guidelines**
1. **Fork the Repository**.
2. **Create a Feature Branch**:
   ```bash
   git checkout -b feat/your-feature
   ```
3. **Commit Changes**:
   ```bash
   git commit -m "Add your feature"
   ```
4. **Push to Branch**:
   ```bash
   git push origin feat/your-feature
   ```
5. **Open a Pull Request**.

### **Code Style**
- **ESLint**: Follows `next/core-web-vitals`.
- **Prettier**: Enforced via `postcss.config.mjs`.
- **TypeScript**: Strict typing (`"strict": true`).

### **Testing**
- **Visual Testing**: Ensure components render correctly in both light/dark modes.
- **Interactive Testing**: Test animations and interactions.

---

## 📄 **License**

**MIT License**
Copyright (c) 2025 Mansarah

---

## 🔗 **Links**

- **[Live Demo](https://iris-ui-three.vercel.app/)**
- **[Documentation](https://iris-ui-three.vercel.app/docs)**
- **[GitHub Repository](https://github.com/Sajid-tech/iris-ui)**

---
