---
sidebar_position: 3
sidebar_label: "Open Source"
hide_table_of_contents: true
---

# Open Source

## The "Why"

Open Source is one of the things that we most value at [OKP4](https://github.com/okp4). Our philosophy is that:

> Everything we do should be open by default.

This is why, from the start, we're releasing (almost) all of our projects to open source.

## The "How"

It is **fundamental** to understand that the projects put in open source must satisfy some requirements. So in order to ensure that the projects are ready to be published, the following checklist can help:

### 👉 No sensitive information

> Keep in mind that anything put in the git repository is shared with the public when you push your source code to GitHub and remains visible in the Git history. Pushing such information can be dramatic, as the removal enforce rewriting the history.

<ins>To check:</ins>

- any data used in project don't break the terms of the _licence_.
- there's no _specific_ or _personal_ information (in git comments, in README files...).
- there's no _secrets_ (password, private keys, tokens) (in configuration/environment files, scripts...).

### 👉 A good project description

> Having a good project description is fundamental to provide users with easy-to-understand information on the purpose of the project, how to set up and use the project, or how developers can contribute.

<ins>To check:</ins>

- A `README.md`:

  - with a complete easy-to-understand description of the project.
  - Badges for the CI/CD statuses, license... (badges are a great way to show pieces of information to developers at a glance)

- A [License](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository) file.
- A [Community Health](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file) file (e.g. `Code of conduct`).

### 👉 A clean Git History

> Git Commit messages provide developers useful information about what has changed and why over time. It's crucial to have a project with good (and consistent) Commit Messages.

<ins>To check:</ins>

- All commits follow our [conventional commit](naming-rules#commit-messages) specification.
- All commits must be [signed](signing-commits).
- Project has a clean branching mode (e.g. one `main` branch, and feature branches merged into it).

### 👉 A complete CI/CD

> CI/CD performs automatic tasks allowing to maintain a constant quality on what is developed and delivered. It allows developers to secure their contributions in their early stages by avoiding integration and deployment issues.

<ins>To check:</ins>

- Project follows [OKP4 CI/CD guidelines](https://github.com/okp4/wiki/wiki/CI-CD) adopted.
- The project passes all CI/CD steps successfully on the `main` branch.

### 👉 A set of Issues / PRs templates

> To improve the quality of the issues and PRs management process, especially with regard to the community, it is important that each open-source repositories be configured to have customized issues and PRs templates.

<ins>To check:</ins>

- Issues and PRs templates are configured for the repository (see: [configuring-issue-templates-for-your-repository](https://docs.github.com/en/communities/)using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)
- The templates comply with the standards adopted for all projects.

### 👉 A well configured repository

> For security reasons, the repository must properly configured according to OKP4 rules.

<ins>To check:</ins>

- Allow merge commits only.
- The default branch is `main`.
- There is a protection rule for the `main` branch:
  - Require a pull request before merging: allow [**@bot-anik**](https://github.com/bot-anik) to bypass this enforcement (i.e. for release purpose).
  - Require status checks before merging.
  - Require conversation resolution before merging.
  - Require signed commits.
  - Include administrators.

> Activity on open source projects should be reported on the [OKP4 discord](https://discord.gg/okp4).

<ins>To check:</ins>

- The payload URL must point to the discord web hooks: <https://discord.com/api/webhooks/***/***/github>
- The content type should be `application/json`
- Secret: empty
- Enable SSL verification
- Configure individual events: Forks, Issues, Issue comments, Pull requests, Pull request review comments, Releases, Stars, Wiki.
