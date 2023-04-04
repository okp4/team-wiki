// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Team Wiki",
    tagline: "On-board new team members in OKP4 🚀",
    url: "https://okp4.github.io",
    baseUrl: "/team-wiki/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "throw",
    favicon: "img/favicon.webp",
    organizationName: "OKP4",
    projectName: "team-wiki",

    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: "/",
                    sidebarPath: require.resolve("./sidebars.js"),
                    breadcrumbs: false,
                },
                blog: false,
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "",
                logo: {
                    alt: "OKP4 logo",
                    src: "img/okp4-logo.svg",
                },
                items: [
                    {
                        label: "Vision",
                        position: "left",
                        type: "doc",
                        docId: "vision/data",
                    },
                    {
                        label: "Organization",
                        position: "left",
                        type: "doc",
                        docId: "organization/team",
                    },
                    {
                        label: "Process & Rituals",
                        position: "left",
                        type: "doc",
                        docId: "process/agility",
                    },
                ],
            },

            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            docs: {
                sidebar: {
                    hideable: true,
                    autoCollapseCategories: true,
                },
            },
        }),
};

module.exports = config;
