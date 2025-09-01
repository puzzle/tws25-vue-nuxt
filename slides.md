---
theme: default
background: /what-a-view.jpg
# apply any unocss classes to the current slide
class: "text-center"
# some information about the slides, markdown enabled
info: |
  ## Einführung in das Vue.js/Nuxt Ökosystem
  Tech Workshop 2025
transition: slide-left
title: Einführung in das Vue.js/Nuxt Ökosystem
mdc: true
---

# Einführung in das Vue.js/Nuxt Ökosystem

Puzzle Tech Workshop 04.09.2025<br>Etienne Gobeli, Mathis Hofer

https://github.com/puzzle/tws25-vue-nuxt

---
layout: cover
transition: slide-up
level: 1
---

# Hintergrund

---
layout: quote
transition: slide-up
level: 2
---

# Bei der aktuellen weltpolitischen Lage wird immer klarer wie problematisch unsere Abhängigkeit von Unternehmen aus dem Silicon Valley ist. Dies betrifft auch den Frontend-Bereich, wo die Framework-Landschaft domiert wird von Meta (React) und Google (Angular).

---
layout: quote
transition: slide-up
level: 2
---

# Das Vue.js/Nuxt Ökosystem bietet eine etablierte, unabhängige Alternative.

---
transition: slide-up
level: 2
---

# Eine kurze Geschichte...

- **Vue.js** (2013): \
  [Evan You](https://github.com/yyx990803), ehem. Google/AngularJS Entwickler ruft Vue.js als leichtgewichtige Alternative ins Leben
- **Vue 1.0** (Oktober 2014) \
  Two-way Databinding, Komponenten, Custom Direktiven und Transitions/Animationen
- **Vue 2.0** (September 2016): \
  Virtual DOM und SSR, erweitertes Komponentensystem, Vue Router, Vuex und Vue CLI
- **Nuxt** (Oktober 2016)
- **Vite** (April 2020)
- **Vue 3.0** (September 2020): \
  Komplettes Rewrite in TypeScript, Composition API etc.
- **Nuxt 3.0** (November 2022): \
  Rewrite mit Vite, Vue 3.0 und Nitro

Siehe [A Brief History of Vue.js: From a Side Project to a Global Framework ](https://jimmywong.co.uk/2025/03/brief-history-of-vuejs.html)

---
layout: iframe
url: https://unjs.io/relations?u[]=automd&u[]=bundle-runner&u[]=c12&u[]=changelogen&u[]=citty&u[]=confbox&u[]=consola&u[]=cookie-es&u[]=crossws&u[]=db0&u[]=defu&u[]=destr&u[]=fontaine&u[]=fs-memo&u[]=get-port-please&u[]=giget&u[]=h3&u[]=hookable&u[]=httpxy&u[]=image-meta&u[]=ipx&u[]=jimp-compact&u[]=jiti&u[]=knitwork&u[]=listhen&u[]=magic-regexp&u[]=magicast&u[]=mdbox&u[]=mkdist&u[]=mlly&u[]=mongoz&u[]=nanotar&u[]=nitropack&u[]=node-fetch-native&u[]=nypm&u[]=ofetch&u[]=ohash&u[]=pathe&u[]=perfect-debounce&u[]=pkg-types&u[]=radix3&u[]=rc9&u[]=scule&u[]=serve-placeholder&u[]=std-env&u[]=theme-colors&u[]=ufo&u[]=unbuild&u[]=uncrypto&u[]=unctx&u[]=undocs&u[]=unenv&u[]=unhead&u[]=unimport&u[]=unpdf&u[]=unplugin&u[]=unstorage&u[]=untun&u[]=untyped&u[]=unwasm&u[]=uqr&u[]=webpackbar&showDependencies=true&showDevDependencies=false&showChildren=false
transition: slide-left
level: 2
---

---
layout: cover
transition: slide-left
level: 1
---

# Frontend Applikationen mit Vue.js


---
layout: quote
transition: slide-up
level: 2
---

# "An approachable, performant and versatile framework for building web user interfaces."


---
layout: image
image: /front_end_frameworks_ratios.png
backgroundSize: contain
transition: slide-up
---

<!-- Quelle: https://2024.stateofjs.com/en-US/libraries/front-end-frameworks/ -->

---
transition: slide-up
level: 2
---
 - Single-File-Components
 - Erweitert den HTML Standard
 
```html
<script setup>
  import { ref } from 'vue'
  const count = ref(0)
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
```
<!-- Wird normalerweise mit SFC's gebraucht => Beispiel Komponente
    Vue files sind sind standard HTML files mit zusätzlichen attributes
-->

---
transition: slide-up
level: 3
---

## Vue vs. Angular
- Weniger opinionated
  - Build-Step optional
  - Typescript support optional
- Split- vs. Single File Components
- Open Source Community

<!-- Vue kann auch ohne SFC und ohne build step in einer Seite eingebunden werden -->

---
transition: slide-left
level: 3
zoom: 0.8
---


### Syntax-Unterschiede

|         | Angular           | Vue  |
| ------------- |:-------------:| -----:|
| Attribute binding | `[prop]="value"` | `:prop="value"` <br> `v-bind:prop="value"` |
| Two-Way Data Binding | `v-model="value"` | `[(ngModel)]="value"`
| Event binding | `(event)="doSomething($event)"` | `@event="doSomething"` <br> `v-on:event="doSomething"` |
| Conditional rendering | `*ngIf="value"` <br> `@if (value) {}` | `v-if="value"` |
| Loops | `*ngFor="let item of items"`  <br> `@for (item of items; track item.name) {}` | `v-for="item in items"` |
| Content Projection | `<ng-content></ng-content>` <br> `<ng-content select="[slot-name]"></ng-content>` | `<slot></slot>` <br>  `<slot name="slot-name"></slot>` |

---
layout: cover
transition: slide-up
level: 1
---

# Full Stack Applikationen mit Nuxt

---
layout: quote
transition: slide-up
level: 2
---

# "Nuxt's goal is to make web development intuitive and performant with a great Developer Experience in mind."

Source: Nuxt Dokumentation

---
transition: slide-up
level: 2
---

# Wieso Nuxt?

- Full-featured Framework für Vue
- Zero-config, opinionated
- Open Source (keine grosse Silicon Valley Firma dahinter)
- Type-safe
- Performant
- Lebendiges und etabliertes Ökosystem

---
layout: image
image: /meta_frameworks_ratios.png
backgroundSize: contain
transition: slide-up
---

<!-- Quelle: https://2024.stateofjs.com/en-US/libraries/meta-frameworks/ -->

---
transition: slide-up
level: 2
---

# Nuxt Features

- File-basiertes Routing (Frontend und Backend)
- Automatisches Code Splitting
- Server-side rendering (SSR)
- Static site generation (SSG)
- Auto-Imports
- SSR-kompatibles Data Fetching
- Verschiedene Render Modes (SSR, CSR, SSG) pro Route möglich
- Type-safe (TypeScript Support)
- Vite
- Powered von der Server-Engine Nitro
- Runtimes: Node.js, Deno oder Edge
- Nuxt Modules
- ...

---
layout: iframe-right
url: https://nitro.build/
transition: slide-up
level: 2
---

# Nitro Server Engine

https://nitro.build/

- Basiert auf [H3](https://h3.dev/)
- **Nitro Plugins** (App-weit) \
  Use Cases: Datenbank Connection Pool erstellen, Error Handling, Cleanup beim Shutdown
- **Nitro Middlewares** (pro Request) \
  Use Cases: Auth, Header Manipulation, Loggin, Request Rewriting
- **API Routes** (Route Handlers)
- `$fetch` ([ofetch](https://ofetch.unjs.io/)-basiert) \
  → führt Request aus im Frontend, ruft Handler direkt auf im Backend

---
transition: slide-up
level: 2
---

# (Nitro) Build

Mit Rollup und Treeshaking

Bundeled den Server Code in ein einziges JS File, welches einfach gestartet werden kann:

```
node .output/server/index.mjs
```

→ `.output/` Directory in einen Node Container kopieren und los...

---
transition: slide-left
level: 2
---

# Projektstruktur

- `app/` – Vue.js Frontend
  - `pages/` – File-based Routing, Page Komponenten → http://localhost:3000/
- `server/` – Nitro Backend
  - `api/` – Server-seitiges File-based Routing → http://localhost:3000/api/

---
layout: cover
transition: slide-up
level: 1
---

# Happy hands-on Hacking!