# Project Structure

This document outlines the organization of the NowDoer frontend codebase.

## Root Directory

-   **`index.html`**: The entry point for the browser. Includes CDN links for Tailwind (for this specific implementation context) and Google Fonts.
-   **`index.tsx`**: The JavaScript entry point that mounts the React root.
-   **`App.tsx`**: The main component that acts as the layout container, composing the specific sections.
-   **`constants.ts`**: Contains static data (products, testimonials, text) to avoid hardcoding strings in components.
-   **`types.ts`**: Global TypeScript interfaces.

## Components (`components/`)

We utilize a folder-by-feature structure within components to keep things organized.

### `layout/`
Components that appear globally across the app.
-   `Navbar.tsx`: The sticky top navigation with glassmorphism effects.
-   `Footer.tsx`: The site footer with links and newsletter signup.

### `sections/`
Large-scale components that represent entire horizontal strips of the landing page.
-   `Hero.tsx`: The above-the-fold area.
-   `Philosophy.tsx`: Brand values section.
-   `FeaturedProducts.tsx`: A grid displaying key items.
-   `WhyUs.tsx`: Benefit breakdown.
-   `Testimonials.tsx`: Social proof section.

### `ui/`
Small, reusable atomic components.
-   `Button.tsx`: A highly configurable button component supporting different variants (`primary`, `secondary`, `outline`) and `framer-motion` interactions.

## Docs (`docs/`)
-   `README.md`: General info.
-   `STRUCTURE.md`: This file.
-   `ARCHITECTURE.md`: Technical decisions.
