import { Html, Head, Main, NextScript } from "next/document";

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <body className="h-screen bg-gray-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
