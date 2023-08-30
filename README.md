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

## The Demonstration

Inside Chrome v118 or later, load up the [http://localhost:3000](the page) and you'll see at the bottom, a message that is the client component that simply injects a speculation rule set into the DOM upon first pass render.  

What's interesting is that this script node is clearly visible when inspected in the document however, if you flip to the application tab and look for a registered speculation rule, there are none.

## Working By Rendering on the Server

In the [main page](app/page.tsx), there is what looks to be an identical rendering of the above demonstration. But it's not contingent on any variables inside the component, instead it's rendered right into the component.  In fact, in this case, it is likely rendered on the server and streamed over into the client.  While this works, it doesn't allow any client-side decisions to be made about which routes are going to be prefetched or prerendered.

## Working By RTFM

In the well constructed documentation, it points out that the suggested method of dynamically placing routes into speculation rules should happen by appending nodes to the DOM.  While this works (and we can move forward with this), it's feels a bit dirty to have untracked nodes that our framework (ReactJS) doesn't know about.  It also is prone to the issues of just appending a new set of nodes everytime the component updates or, if there are many components that render the same set of routes, it may just keep making speculation rules nodes on the document.  While things seem to behave correctly when this happens, this seems inefficient and may cause the browser to have to keep checking registered rules.  So to overcome this, [we simply make a helper wrapped in a memoized function](app/helper.ts).