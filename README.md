This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## The Demonstration

Inside Chrome v118 or later, load up the [http://localhost:3000](the page) and you'll see at the bottom, a message that is the client component that simply injects a speculation rule set into the DOM upon first pass render.  

What's interesting is that this script node is clearly visible when inspected in the document however, if you flip to the application tab and look for a registered speculation rule, there are none.