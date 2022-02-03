# Introduction to Next.js

Playing with [Next.js](https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website)
To learn server side rendering 🎉

## Exercise

### Step 1

- Create following pages: `client-side-rendering`, `server-side-rendering` and `static-site`
- Add Link from home page to the recently created pages
- Tip: Do not use only `a` tag

### Step 2

- Create an API called `user` that accepts only `GET method` and returns array of `Users`, other methods should return an `Error`
- In page `client-side-rendering` use `useSWR` to fetch information in the client side
- In page `server-side-rendering` add `getServerSideProps` to fetch information in the server at each request
- In page `static-site` add `getStaticProps` to fetch information from server at build time.
- At every page consume the API `user` and show users or error depending on the response
- Tip 1: Use `User.type` and `Error.type` under types folder
- Tip 2: Use `UserInfo` to show user information
