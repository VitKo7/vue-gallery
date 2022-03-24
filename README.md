# vue-gallery

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### затык с router

Вы всё делаете по коду, но он не работает и выдаёт странную ошибку про Webpack. Обратите внимание на версию vue-router. Скорей всего вы ставите 4-ую. А здесь 3.
Там было несколько breaking changes при смене версий. Проще всего поставить конкретную версию, которая и используется на проекте.

```
npm i vue-router@3.4.9
```

### затык с multi-word-component-names

1:1 error Component name "Navbar" should always be multi-word vue/multi-word-component-names. Read the documentation: https://eslint.vuejs.org/rules/multi-word-component-names.html

```
rename "Navbar"
```

### v-for

для v-for ВСЕГДА НУЖНО указывать ключ с уникальным названием: v-bind:key = "photo.id"

например:
вместо: <Photo v-for="photo in photos" v-bind:photo="photo" />
писать: <Photo v-for="photo in photos" v-bind:photo="photo" :key="photo.id"/>
