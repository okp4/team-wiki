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
                    customCss: require.resolve("./src/scss/custom.scss"),
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
                    src: "img/okp4-logo-light.svg",
                    srcDark: "img/okp4-logo-dark.svg",
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
                    {
                        href: "https://discord.com/invite/okp4",
                        className: "header-discord-icon",
                        position: "right",
                    },
                    {
                        href: "https://github.com/okp4",
                        className: "header-github-icon",
                        position: "right",
                    },
                ],
            },
            footer: {
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Whitepaper",
                                href: "https://docs.okp4.network/whitepaper/abstract",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Discord",
                                href: "https://discord.gg/okp4",
                            },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/OKP4_Protocol",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/okp4",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Medium",
                                href: "https://medium.com/okp4",
                            },
                            {
                                label: "OKP4.network",
                                href: "https://okp4.network",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} OKP4`,
            },

            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            colorMode: {
                defaultMode: "dark",
            },
            docs: {
                sidebar: {
                    hideable: false,
                    autoCollapseCategories: true,
                },
            },
        }),
    plugins: ["docusaurus-plugin-sass"],
};

module.exports = config;
