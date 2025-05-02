const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

module.exports = {
  title: "Zoqq Docs",
  tagline: "API Documentation for Zoqq Platform",
  url: "https://docs.zoqq.com",
  baseUrl: "/",
  favicon: "https://www.zoqq.com/favicon.png",

  themeConfig: {
    navbar: {
      title: "",
      logo: {
        alt: "Zoqq Logo",
        src: "https://demo.zoqq.com/zoqq.svg",
      },
      items: [
        { to: "/docs/getting-started", label: "Guides", position: "left" },
        {
          to: "/docs/api-reference/authentication",
          label: "API Reference",
          position: "left",
        },
        // { to: "/docs/getting-docs/account", label: "Accounts", position: "left" },
        { to: "/docs/changelog", label: "Changelog", position: "left" },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/docs",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
