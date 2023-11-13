# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

## Memo

### use of `@tailwindcss/typography``

Tailwindcss resets default styling of html elements.
`@tailwindcss/typography` provides default styling of html elements.

- [Official Plugins / @tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)

### Ripple UI

Nice implementation based on Tailwindcss.

- [Ripple UI](https://www.ripple-ui.com/)
