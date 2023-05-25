---
sidebar_position: 4
sidebar_label: "Github Flow"
hide_table_of_contents: true
---

# Github Flow

## Github

All the git repositories are hosted on GitHub in the `OKP4` organization [here](https://github.com/okp4).

👮 Repository creation shall be discussed with Organization owners.

## The Flow

When using Version Control like [Git](https://git-scm.com/) in a team, it's crucial to agree on a workflow, a _branching strategy_. If we don't use a common workflow, confusion is inevitable.

The chosen workflow is [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow) which is lightweight and fits well with the gitops paradigm.

The `main` branch is the _default one_ for all the OKP4 repositories, containing both latest developments and production versions: a production version being simply a tag on the `main` branch.

✖️ Don’t git push straight to `main`. **Never!**

✔️ Every new developments shall be proposed in a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) and go through the review process.

## Developers Process

Each new development should be referred to a ticket in the repository, or discussed in the dedicated space.

For instance:

- The PR [okp4/ui - file input](https://github.com/okp4/ui/pull/308) has been specified in [okp4/ui#300](https://github.com/okp4/ui/issues/300).
- The PR [okp4/ui - progress bar](https://github.com/okp4/ui/pull/344) has been discussed in [okp4/ui#341](https://github.com/okp4/ui/discussions/341).

### 🌱 Create a new branch

To start new developments on a repository you first need to create a dedicated branch from the `main`. This branch is a safe place to make changes, all the mistakes can be reverted until the branch is merged.

For instance:

```sh
git checkout -b feat/my-awesome-feature
```

### 🖊️ Commit your changes

Each commit shall contains isolate and complete changes.

🚨 Each single commit is important: They are used to generate changelogs and determine the release versions.

👮 Sign your commits: <https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits>

**Clean and readable code**: Ensure that your code follows the project's coding standards and guidelines. Use consistent indentation, meaningful variable and function names, and proper commenting. Well-organized and readable code makes it easier for reviewers to understand and provide feedback.

### 🧹 Keep your history clean

The set of commits shall express the conducted thread that guided your developments and tell its story. Don't hesitate to squash multiple commits related to the same changes, use interactive rebase to retrace a logical development flow.

A clean history is also synonymous of a single thread of commits, this prohibits merge commits from your history.

### 🤏 Keep your changes small

Remember that the changes you make are meant to be reviewed, so keep the changes small (~300 lines of diff).

### 📐 Adhere to project conventions

Familiarize yourself with the project's architecture, design patterns, and conventions. Make sure your changes align with the project's overall structure and coding style. Consistency across the codebase improves maintainability and readability.

#### 🧪 Test

Include relevant unit tests for the changes you've made. Ensure that all existing tests pass successfully. Test coverage should be comprehensive, covering different scenarios and edge cases. Thorough testing helps validate the correctness and stability of your code.

### 📖 Document

Update or create documentation as necessary. Document any new features, configuration changes, or APIs introduced by your code. Clear and concise documentation helps reviewers and other developers understand the changes and their impact.

### 🔄 Address feedback

Be prepared to address feedback and iterate on your code. Reviewers may provide suggestions, point out bugs, or ask for additional changes. Embrace feedback humbly, iterate on your code diligently, and continuously strive to improve based on the reviewer's insights, fostering a collaborative environment that values personal growth over [ego-driven](/dev/what-should-i-know#1-you-are-not-your-code) resistance.

### 🫂 Work with others

Your working branch shall always be up to date from the `main` branch, when changes are integrated in the `main` branch after the creation of your working branch you must update your branch.

⚠️ You could be tempted to update your branch by merging the `main` branch in yours but it's _prohibited_ by clean history rule. Prefer use a `rebase` to rewrite your history based on a fresh version of `main`:

```sh
git fetch
git rebase origin/main
```

The same practice can be applied when updating your branch with its remote: `git pull --rebase` will prevent merge commits. You can enable this strategy by default with: `git config --global pull.rebase true`.

Another point of attention is when you push your changes after rewriting the history, you'll need to force push as the commits hash have changed and it may end up with the loss of a teammate's work. To prevent that you can use the `--force-with-lease` option that will not overwrite any work on the remote branch if more commits were added to the remote branch.

### 👀 Review your changes

Review your changes: Take the time to review your own code before submitting the PR. Double-check for any potential issues, such as syntax errors, incorrect logic, or incomplete changes. Self-review helps catch simple mistakes and ensures a higher quality submission.

### 👀 Open a pull request

When you're done with the development, open a pull request targeting the `main` branch to propose your changes and asks your collaborators for feedbacks by adding them as reviewers.

### 🤓 And then what?

The CI/CD performs a set of tasks automatically such as running linters against the code and run tests to guard against mistakes. These systems' duty is to make you worry as little about the chores as possible - rely on CI/CD.

Reviewers/maintainers will also review and comment on the code. The comments made are important, and should be taken into consideration. Remember that the entire point of a review is to find problems, and problems will be found. Don't take it personally when one is uncovered - You are not your code.

Don't hesitate to ask for help if you need it, the team is there to help.

## Reviewers Process

The purpose of code review is to ensure code quality, identify potential issues, promote best practices, and foster collaboration among developers, ultimately leading to the improvement of the overall software development process and the creation of more reliable and maintainable code.

Reviewers have the responsibility to provide thorough and constructive feedback, identify potential flaws or improvements, ensure adherence to coding standards, and promote the overall quality of the codebase, contributing to the success of the project and the growth of the development team.

### 🔍 Focus

Focus mostly on the **structuring issues** (such as code organization, functions, modules, interface definitions, etc.) that affect the code quality.

### ✅ Objectivity

Be **objective** rather than subjective, don’t comment just for the sake of commenting.

### 📌 Mentions

**Avoid a large number of mentions** in the comments since it causes more latency in the review process.

### 👍 Approval

The approval signifies that the changes have been thoroughly reviewed and are deemed acceptable for integration, contributing to the project's progress and success.

Your approval plays a crucial role in contributing to the progress and success of the project. If everything is satisfactory and meets the requirements, don't hesitate to approve the changes.

## Assignees process

Assignees have the responsibility to merge the PR once approved.

Once the Pull Request (PR) has received approval from (almost) all reviewers and all discussions have been resolved, the assignees are responsible for proceeding with the merging process. At this stage, if the code changes have been thoroughly reviewed, approved, and there are no further pending discussions, the assignees can proceed with merging the PR into the main codebase.
