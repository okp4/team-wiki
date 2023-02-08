# Team Wiki

> [OKP4] Wiki 📚

[![lint](https://img.shields.io/github/actions/workflow/status/okp4/team-wiki/lint.yml?label=lint&style=for-the-badge&logo=github)](https://github.com/okp4/team-wiki/actions/workflows/lint.yml)
[![build](https://img.shields.io/github/actions/workflow/status/okp4/team-wiki/build.yml?label=build&style=for-the-badge&logo=github)](https://github.com/okp4/team-wiki/actions/workflows/build.yml)
[![publish](https://img.shields.io/github/actions/workflow/status/okp4/team-wiki/publish.yml?label=publish&style=for-the-badge&logo=github)](https://github.com/okp4/team-wiki/actions/workflows/publish.yml)
[![conventional commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=for-the-badge&logo=conventionalcommits)](https://conventionalcommits.org)
[![contributor covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=for-the-badge)](https://github.com/okp4/.github/blob/main/CODE_OF_CONDUCT.md)
[![docusaurus](https://img.shields.io/badge/Powered%20By-❤️%20docusaurus-darkgreen?style=for-the-badge)](https://docusaurus.io)
[![license][bsd-3-clause-image]][bsd-3-clause]
[![cc-by-sa-4.0][cc-by-sa-image]][cc-by-sa]

## 🤓 About the project

Welcome to the [OKP4] Wiki! This platform serves as a central repository for information about the company, its values, vision, objectives, and the processes and tools it uses for the open source projects. The goal of this project is to improve communication, transparency, and efficiency for both internal and external contributors.

## 💬 Support

This wiki is the perfect place to start and you will find a lot of useful information. But for any unanswered questions, for any help you may need, do not hesitate to contact us:

- open an issue or a discussion in the most appropriate repository.
- join us on [![Discord](https://img.shields.io/badge/Discord-7289DA?logo=discord&logoColor=white)](https://discord.gg/okp4) and ask your questions.

The whole team is here to help you!

## 🤝 Contribute

We welcome contributions from anyone who is interested in improving this wiki. Before making a contribution, please review the contributing guidelines to ensure that your contribution aligns with the project's goals and standards.

## 👩🏽‍💻 Develop

### Prerequisites

Be sure to have the following properly installed:

- [Node.js](https://nodejs.org/ru/) `v16.19` ([gallium](https://nodejs.org/en/blog/release/v16.19.0/))
- [yarn](https://yarnpkg.com)

### Installation

To install the necessary dependencies, run the following command:

```sh
yarn
```

### Local Development

To start a local development server, run the following command:

```sh
yarn start
```

This command will start a local development server and open a browser window at <http://localhost:3000/>. Most changes made during development will be reflected live without having to restart the server.

Please note that the search feature will not be available in development mode. To use the search feature, first run `yarn build` and then `yarn serve`.

### Build

To generate static content for production, run the following command:

```sh
yarn build
```

This command will generate static content into the `build` directory and can be served using any static content hosting service.

## ⚖️ License

The documentation of the wiki (markdown, assets) is [Creative Commons Attribution-ShareAlike 4.0 International][cc-by-sa] licensed.

All other code in this repository is licensed under the [3-Clause BSD][bsd-3-clause].

[bsd-3-clause]: https://opensource.org/licenses/BSD-3-Clause
[bsd-3-clause-image]: https://img.shields.io/badge/License-BSD_3--Clause-blue.svg?style=for-the-badge
[cc-by-sa]: https://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://i.creativecommons.org/l/by-sa/4.0/88x31.png
[OKP4]: https://okp4.network
