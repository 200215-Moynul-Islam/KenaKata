# KenaKata — Modern E-Commerce Storefront

A production-style e-commerce storefront built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**, powered by the [Platzi Fake Store API](https://fakeapi.platzi.com/). Built as a capstone project to demonstrate scalable frontend architecture, modern Next.js rendering patterns, and solid engineering habits.

---

## Live Demo

> [https://kena-kata-brown.vercel.app/](https://kena-kata-brown.vercel.app/)

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Architecture](#architecture)
- [Rendering Strategy](#rendering-strategy)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Tradeoffs & Decisions](#tradeoffs--decisions)
- [Known Limitations](#known-limitations)
- [Challenges Faced](#challenges-faced)
- [Future Improvements](#future-improvements)

---

## Project Overview

KenaKata is a fully responsive e-commerce storefront that covers the core user journey: browsing categories, viewing product listings, and exploring product details. The project prioritises clean architecture, clear server/client component boundaries, and maintainable code over feature breadth.

---

## Tech Stack

| Layer       | Technology                          |
| ----------- | ----------------------------------- |
| Framework   | Next.js (App Router, latest stable) |
| Language    | TypeScript                          |
| Styling     | Tailwind CSS                        |
| HTTP Client | Axios                               |
| Validation  | Zod                                 |
| Forms       | React Hook Form                     |
| Theme       | next-themes                         |
| Linting     | ESLint + Prettier                   |
| Git Hooks   | Husky                               |
| Deployment  | Vercel                              |

---

## Features

### Implemented

- **Home page** — Hero carousel, featured products section, category grid, fully responsive layout, light/dark theme toggle
- **Categories page** — Category grid with individual category cards linking to filtered product views
- **Category detail page** — Dynamic `[slug]` route that displays all products belonging to a category
- **Product listing page** — Product grid with loading and empty states
- **Product detail page** — Product gallery, full product information

### Not Yet Implemented

- Product search, filtering, and sorting
- Related products on the product detail page
- Pagination or infinite scroll
- Cart and checkout
- Authentication (login, register, protected routes)
- Wishlist, reviews, and admin dashboard (optional scope)

---

## Architecture

### Folder Structure

```
kenakata/
├── api/                    # All API concerns in one place
│   ├── axios/              # Axios client configuration
│   ├── services/           # Per-resource service functions
│   ├── endpoints.ts        # Centralised endpoint constants
│   └── index.ts
├── app/                    # Next.js App Router pages
│   ├── categories/
│   │   ├── [slug]/page.tsx
│   │   └── page.tsx
│   ├── products/
│   │   ├── [id]/page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── categories/         # Category-page-specific components
│   ├── hero-carousel/
│   ├── home/               # Home-page-specific components
│   ├── product/            # Product-page-specific components
│   └── shared/             # Reusable components (category cards, product grid, etc.)
│       ├── category/
│       └── product/
├── config/                 # App configuration and env validation
├── context/                # React context providers (theme)
├── layouts/                # Persistent layout components (header, nav)
├── messages/               # Validation error messages
└── schemas/                # Zod schemas
```

### Key Design Decisions

**Layered API module** — All data-fetching logic lives in `api/`, separated from UI. `services/` files expose typed async functions; components never import Axios directly. This makes the data layer easy to swap or mock.

**Shared component library** — `components/shared/` contains purely presentational, page-agnostic components (`product-card`, `product-grid`, `category-card`, `category-grid`). Page-specific wrappers live in their own folders. This prevents duplication while keeping page-level concerns isolated.

**Centralised configuration** — `config/` holds environment variable access and Zod-based validation so misconfiguration is caught at startup, not at runtime.

**Schema-first validation** — Zod schemas in `schemas/` define the shape of all API responses and form data. This keeps TypeScript types and runtime validation in sync from a single source of truth.

---

## Rendering Strategy

KenaKata uses a deliberate mix of **SSR** and **CSR**, chosen per page based on data requirements.

| Page                                   | Strategy | Reason                                                                                            |
| -------------------------------------- | -------- | ------------------------------------------------------------------------------------------------- |
| Home (`/`)                             | SSR      | Featured products and categories fetched on the server; users get fully rendered HTML immediately |
| Categories (`/categories`)             | SSR      | Category list is stable but can change; server fetch ensures freshness without client waterfalls  |
| Category detail (`/categories/[slug]`) | SSR      | Dynamic route — products are fetched on the server per request using the slug param               |
| Product listing (`/products`)          | SSR      | Initial product grid rendered on the server                                                       |
| Product detail (`/products/[id]`)      | SSR      | Product data fetched server-side for fast first paint and SEO-friendliness                        |
| Hero carousel                          | CSR      | Interactive, animation-driven — intentionally a client component                                  |
| Theme toggle                           | CSR      | Pure UI state; no server involvement needed                                                       |

Server components are the default. A component is only marked `"use client"` when it requires browser APIs, user interaction, or local state.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/200215-Moynul-Islam/KenaKata.git
cd KenaKata

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Fill in your values (see Environment Variables section below)

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

---

## Environment Variables

Copy `.env.example` to `.env` and fill in the values before running the app. Environment variables are validated at startup using Zod — the app will throw a descriptive error if a required variable is missing or malformed.

| Variable                   | Description                            | Example                           |
| -------------------------- | -------------------------------------- | --------------------------------- |
| `NEXT_PUBLIC_API_BASE_URL` | Base URL for the Platzi Fake Store API | `https://api.escuelajs.co/api/v1` |

See `.env.example` for the full list with descriptions.

---

## Tradeoffs & Decisions

**Axios over native fetch** — Next.js encourages native `fetch` for its built-in caching extensions. Axios was chosen here for its familiar interceptor pattern, which makes it straightforward to add auth headers and centralised error handling. The tradeoff is losing Next.js's `fetch` cache tagging and `revalidate` options at the call level; this can be addressed in a future refactor.

**SSR over ISR** — Pages currently use plain SSR rather than ISR. Given the Platzi API is a fake/dev API with frequently changing data, ISR's stale window would not add meaningful value. For a real store with a stable product catalogue, ISR would be the right choice for most listing pages.

**Shared component structure** — Splitting `components/shared/` and page-specific component folders adds some initial overhead but pays off quickly as the number of pages grows. Both the category page and home page reuse the same `category-grid` and `product-grid` components without duplication.

**Zod for env validation** — Rather than crashing silently with `undefined` values mid-request, all environment variables are parsed through a Zod schema in `config/` at startup. Misconfiguration is caught immediately with a readable error.

---

## Known Limitations

- **No search, filter, or sort** on the product listing page — the grid displays all products from the API as-is.
- **No related products** on the product detail page.
- **No pagination** — all products are loaded in a single request.
- **No cart or checkout** — the add-to-cart flow is not implemented.
- **No authentication** — login, registration, and protected routes are out of scope for this submission.

---

## Challenges Faced

**Understanding server vs. client components** — One of the trickiest parts of working with the Next.js App Router was figuring out which components should run on the server and which need to run in the browser. At first it wasn't obvious — a component can look purely visual but still need browser features like event handlers or hooks, which forces it to be a client component. I learned to add `"use client"` only when actually needed, and spotted issues through hydration errors during development.

**Axios not playing well with Next.js caching** — Next.js has a built-in caching system that works through its native `fetch`. Since the project uses Axios instead, that caching doesn't apply automatically. This wasn't a big problem here since the Platzi API is a dev/fake API anyway, but it's something I became aware of and would handle differently in a real production app.

**The API returning unexpected data shapes** — The Platzi API sometimes returns data that doesn't match what the docs say — for example, a field might be `null` when you'd expect a string. Early on this caused some silent bugs that were hard to trace. Using Zod to validate API responses helped catch these mismatches early and made the errors much easier to understand and fix.

---

## Future Improvements

- Add search, filtering, and sorting to the product listing page
- Implement pagination or infinite scroll
- Add related products on the product detail page using category-based filtering
- Build out cart state with `useReducer` + `localStorage` persistence
- Add authentication with JWT, protected routes, and Next.js Middleware
- Migrate Axios calls to native `fetch` with Next.js `revalidate` for proper ISR support
- Add Vitest unit tests for service functions and shared components
- Implement skeleton loading states for improved perceived performance
- Admin dashboard for product and category CRUD
