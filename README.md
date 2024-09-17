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
tailwindcss -i ./assets/css/raw/style.css -o ./assets/css/minify/style.min.css --watch
```

- Minifying CSS

```bash
tailwindcss -i ./assets/css/raw/choices.css -o ./assets/css/minify/choices.min.css --minify
tailwindcss -i ./assets/css/raw/filepond.css -o ./assets/css/minify/filepond.min.css --minify
tailwindcss -i ./assets/css/raw/flatpickr.css -o ./assets/css/minify/flatpickr.min.css --minify
tailwindcss -i ./assets/css/raw/micromodal.css -o ./assets/css/minify/micromodal.min.css --minify
tailwindcss -i ./assets/css/raw/notify.css -o ./assets/css/minify/notify.min.css --minify
tailwindcss -i ./assets/css/raw/nprogress.css -o ./assets/css/minify/nprogress.min.css --minify
tailwindcss -i ./assets/css/raw/style.css -o ./assets/css/minify/style.min.css --minify
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
