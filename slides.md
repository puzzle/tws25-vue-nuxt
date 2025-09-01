---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
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

Tech Workshop 2025, Etienne Gobeli, Mathis Hofer

---
layout: default
---

# Table of contents

<Toc maxDepth="1"></Toc>

---
layout: cover
transition: slide-up
level: 1
---

# Vue.js


---
layout: quote
transition: slide-left
level: 2
---

> An approachable, performant and versatile framework for building web user interfaces.


---
layout: image
image: /front_end_frameworks_ratios.png
backgroundSize: contain
transition: slide-left
---

<!-- Quelle: https://2024.stateofjs.com/en-US/libraries/front-end-frameworks/ -->

---
transition: slide-left
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
transition: slide-left
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
transition: slide-left
level: 2
---

> Nuxt's goal is to make web development intuitive and performant with a great Developer Experience in mind.

---
transition: slide-left
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
transition: slide-left
---

<!-- Quelle: https://2024.stateofjs.com/en-US/libraries/meta-frameworks/ -->

---
transition: slide-left
level: 2
---

# Nuxt Features

- File-based Routing
- Code Splitting
- Server-side rendering (SSR)
- Static site generation (SSG)
- Auto-Imports
- SSR-kompatibles Data Fetching
- Built-in TypeScript support
- Vite
- Integriert Server-Engine Nitro
- Node.js, Deno oder Edge Runtime

