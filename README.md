# ULBI MBKM

- [uhtml](https://github.com/WebReflection/uhtml)
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
- [Tailwind (Standalone-CLI)](https://tailwindcss.com/blog/standalone-cli)

### VS Code

##### Plugin

- Prettier - Code formatter
- Tailwind CSS Intellisense
- lit-plugin
- Live Server

##### Setting (JSON)

```json
"tailwindCSS.experimental.classRegex":
    [["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*?)[\"'`]"]]
```

## Development

- Run Live Server
- Watch tailwind css

```bash
tailwindcss -i ./src/css/raw/main.css -o ./src/css/minify/main.min.css --watch
```

#### Minifying CSS

```bash
tailwindcss -i ./src/css/raw/choices.css -o ./src/css/minify/choices.min.css --minify
tailwindcss -i ./src/css/raw/filepond.css -o ./src/css/minify/filepond.min.css --minify
tailwindcss -i ./src/css/raw/flatpickr.css -o ./src/css/minify/flatpickr.min.css --minify
tailwindcss -i ./src/css/raw/micromodal.css -o ./src/css/minify/micromodal.min.css --minify
tailwindcss -i ./src/css/raw/notify.css -o ./src/css/minify/notify.min.css --minify
tailwindcss -i ./src/css/raw/main.css -o ./src/css/minify/main.min.css --minify
```

#### BaseUrl

```js
// each .html
<base href="/" />
or
<base href="https://bakazero.github.io/try-github-pages/" />

// settings.js
export const baseUrl = "/";
or
export const baseUrl = "https://bakazero.github.io/try-github-pages/";
```
