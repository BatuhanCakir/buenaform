## Getting Started

First, install the necessary packages :
(It was developed with Node 18 and npm)

```bash
npm install
# or
yarn
# or
pnpm install

```

then start the development server with:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Summary:

I decided to go with next because i thought that the layout option woulf br pretty neat to use but i could have done the same with vite react.
For the UI i went with shadcn because it has the best looking components and it uses tailwind so it is pretty configurable.
For State Management i used jotai because it is pretty lighteweigth and i only needed it for the formvalues .
To validate the Form i used zod, because i have the most experience with that.

Because i used most of the components from shadcn i decided to build the stepper myself, which i implemented by giving each step a different route. I think it could have been done with much less boilerplate but i decided for a first draft it should be ok.
Another thing that could be improved is the progressbar, which uses the pathname to generate the value, which isnt that ideal. Some type of state machine could that better.
