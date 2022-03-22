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
