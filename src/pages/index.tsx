import Head from "next/head";
import Link from "next/link";
import { Icon } from "@ouellettec/design-system";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Coming Soon - Chris Ouellette</title>
        <meta
          name="description"
          content="Christopher Ouellette's portfolio site"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <main className="mx-4 my-4 sm:mx-auto sm:max-w-lg">
        <h1 className="pb-4 text-3xl">Chris Ouellette Portfolio</h1>
        <p className="pb-4">
          Someday soon this will be a really cool portfolio site that shows all
          of the projects that Chris has worked on.
        </p>
        <p className="pb-4">
          Until then here is a few links that maybe useful.
        </p>
        <Link
          href="https://www.linkedin.com/in/ouellettechristopher/"
          className="flex items-center pb-4"
        >
          <Icon name="ri-linkedin-box-fill" aria-hidden className="h-8 w-8" />
          LinkedIn Profile
        </Link>
        <Link
          href="https://github.com/chrisryanouellette"
          className="flex items-center"
        >
          <Icon name="ri-github-fill" aria-hidden className="h-8 w-8" />
          Github Profile
        </Link>
      </main>
    </>
  );
}
