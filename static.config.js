import React from "react";
import path from "path";
// import axios from "axios";

// const strapi_url = "http://localhost:1337";

// Typescript support in static.config.js is not yet supported, but is coming in a future update!
export default {
  productionSourceMaps: true,
  entry: path.join(__dirname, "src", "index.tsx"),
  getRoutes: async () => {
   
    return [
      {
        path: "/",
        template: "src/pages/index.tsx",
      },
    ];
  },
  Document: ({ Html, Head, Body, children, state: { renderMeta } }) => (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
        {renderMeta}
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  plugins: [
    "react-static-plugin-typescript",
    "react-static-plugin-styled-components",
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages"),
      },
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
  ],
};
