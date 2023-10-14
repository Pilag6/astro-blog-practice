# Astro

```
npm create astro@latest
```

## 🚀 Project Structure

```
/
├── public/
├── src/
|   ├── components/
│   |   └── Navbar.astro
|   |   └── Footer.astro
|   |   └── MainBtn.astro
│   ├── layouts/
│   |   └── MainHead.astro
|   |   └── MainLayout.astro
|   |   └── BlogLayout.astro
│   ├── pages/
|   |   └── [posts]/
│   |       └── post-1.md
│   |       └── post-2.md
│   |   └── index.astro
|   |   └── about.astro
|   |   └── blog.astro
|   ├── styles/
|       └── global.css
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

# MainLayout

```javascript
---

// Components
import MainHead from "../layouts/MainHead.astro";
import Footer from "../components/Footer.astro";
import Nav from "../components/Nav.astro";
// Global Styles
import "../styles/global.css";


const { title, description } = Astro.props; // as Props means the props is of type Props
---

<html lang="en">
    <MainHead {title} description={description} />
    <body>
        <Nav />
        <slot>Default Text</slot>
        <Footer />
    </body>
</html>
```

# MainHead

```javascript
  npm install astro-google-fonts-optimizer
```

```javascript

---
import { GoogleFontsOptimizer } from "astro-google-fonts-optimizer";

const { title, description } = Astro.props;
---

<head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="/public/favicon.svg" type="image/x-icon">
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <meta name="description" content={description} />
    <title>{title}</title>

    <!-- Google Fonts -->
    <GoogleFontsOptimizer url="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500&display=swap"></GoogleFontsOptimizer>
</head>
```

# tsconfig.json

```json
{
    "extends": "astro/tsconfigs/base",
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@components/*": ["src/components/*"],
            "@data/*": ["src/data/*"],
            "@assets/*": ["src/assets/*"],
            "@layouts/*": ["src/layouts/*"],
            "@icons/*": ["src/icons/*"],
            "@pages/*": ["src/pages/*"],
            "@public/*": ["public/*"],
            "@styles/*": ["src/styles/*"]
        }
    }
}
```

# How to pass Pross as a Styles

## components/nameOfComponent

```javascript
---
import type { Props } from "astro";
const { title, description, style } = Astro.props as Props;
---
<main>
    <section class={`something ${style}`}>
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </section>
</main>

/* Define different background images based on the style prop */
    .something.card1 {
        background-image: url("https://bit.ly/3LMPj1m");
    }

    .something.card2 {
        background-image: url("https://bit.ly/3LRn9Cq");
    }

    .something.card3 {
        background-image: url("https://bit.ly/45i5H12");
    }

```

## pages/index.astro

```javascript
---
import Component from "../components/nameOfComponent.astro";

<>
  <Component title="Card" description="Some words" style="card1" />
  <Component title="Card" description="Some words" style="card2" />
  <Component title="Card" description="Some words" style="card3" />
</>
```
