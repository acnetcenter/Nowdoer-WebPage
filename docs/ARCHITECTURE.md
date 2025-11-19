# Architecture & Design Decisions

## Tech Stack Choices

1.  **React 18**: Utilized for its component-based model and concurrent rendering features.
2.  **TypeScript**: Enforces strict typing on Data models (Products, Testimonials) to prevent runtime errors and improve developer experience.
3.  **Tailwind CSS**: chosen for rapid UI development, consistency in design tokens (colors, spacing), and easy mobile responsiveness.
4.  **Framer Motion**: Selected for animation. It offers a declarative API for complex animations (scroll-triggered reveals) that is superior to writing raw CSS keyframes for interaction-heavy sites.

## Styling Strategy

-   **Theme**: We defined a custom configuration in `tailwind.config` (injected via script in this implementation) to establish the `brand-black`, `brand-red`, and specific font families (`Inter`, `Montserrat`).
-   **Responsiveness**: Mobile-first approach. Base classes apply to mobile, `md:` and `lg:` overrides handle tablet and desktop layouts.

## State Management

-   **Local State**: Used for UI state (e.g., Mobile Menu open/close, Scroll position detection in `Navbar`).
-   **Global State**: Not currently required for a single-page landing site. If e-commerce functionality expands (Cart), we would introduce React Context or a lightweight store like Zustand.

## Performance Considerations

-   **Font Loading**: Google Fonts are preconnected to reduce latency.
-   **Image Optimization**: In a production environment, `<img>` tags would be replaced with optimized image components (e.g., Next.js Image) to handle lazy loading and format serving (WebP).
-   **Code Splitting**: The architecture supports easy route-based code splitting if the app grows beyond a single page.
