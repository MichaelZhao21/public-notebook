# Public Notebook

This is a project to create a space online for my public notes and collection of cool stuff.

## Developing

Install dependencies with `npm install` (or `pnpm install` or `yarn`), and start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## DB Schema

pages indexed on folder + slug (compound index)

```
Page {
    folder
    slug
    name
    tags
    content
    lastEdit
}
```

folders indexed on slug

```
Folder {
    slug
    name
    pages {
        pageId
        name
        tags
        lastEdit
    }
    lastEdit
}
```
