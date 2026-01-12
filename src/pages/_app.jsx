import React from 'react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html, body {
          font-family: 'DM Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        p {
          margin-bottom: 1.25em;
        }
        p:last-child {
          margin-bottom: 0;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
