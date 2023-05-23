---
sidebar_position: 4
sidebar_label: "Git"
hide_table_of_contents: true
---

# Git

## GitHub

All the git repositories are hosted on GitHub in the `OKP4` organization [here](https://github.com/okp4).

👮 Repository creation shall be discussed with Organization owners.

## GitHub Flow

When using Version Control like [Git](https://git-scm.com/) in a team, it's crucial to agree on a workflow, a _branching strategy_. If we don't use a common workflow, confusion is inevitable.

The chosen workflow is [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow) which is lightweight and fit well with the gitops paradigm.

### `main` Branch

The `main` branch is the _default one_, containing both latest developments and production versions: a production version being simply a tag on the `main` branch.

✖️ Don’t git push straight to `main`. **Never!**.

✔️ Every new developments shall be proposed in a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) and go through the review process.

### Development Process

Each new development should be referred to a ticket in the repository, or discussed in the dedicated space.

For instance:

- The PR [okp4/ui - file input](https://github.com/okp4/ui/pull/308) has been specified in [okp4/ui#300](https://github.com/okp4/ui/issues/300).
- The PR [okp4/ui - progress bar](https://github.com/okp4/ui/pull/344) has been discussed in [okp4/ui#341](https://github.com/okp4/ui/discussions/341).

#### 🌱 Create a new branch

To start new developments on a repository you first need to create a dedicated branch from the `main`. This branch is a safe place to make changes, all the mistakes can be reverted until the branch is merged.

For instance:

```sh
git checkout -b feat/my-awesome-feature
```

#### 🖊️ Commit your changes

Each commit shall contains isolate and complete changes.

🚨 Each single commit is important: They are used to generate changelogs and determine the release versions.

👮 Sign your commits: <https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits>

#### 🧹 Keep your history clean

The set of commits shall express the conducted thread that guided your developments and tell its story. Don't hesitate to squash multiple commits related to the same changes, use interactive rebase to retrace a logical development flow.

A clean history is also synonymous of a single thread of commits, this prohibits merge commits from your history.

#### 🤏 Keep your changes small

Remember that the changes you make are meant to be reviewed, so keep the changes small (~300 lines of diff).

#### 🫂 Work with others

Your working branch shall always be up to date from the `main` branch, when changes are integrated in the `main` branch after the creation of your working branch you must update your branch.

⚠️ You could be tempted to update your branch by merging the `main` branch in yours but it's _prohibited_ by clean history rule. Prefer use a `rebase` to rewrite your history based on a fresh version of `main`:

```sh
git fetch
git rebase origin/main
```

The same practice can be applied when updating your branch with its remote: `git pull --rebase` will prevent merge commits. You can enable this strategy by default with: `git config --global pull.rebase true`.

Another point of attention is when you push your changes after rewriting the history, you'll need to force push as the commits hash have changed and it may end up with the loss of a teammate's work. To prevent that you can use the `--force-with-lease` option that will not overwrite any work on the remote branch if more commits were added to the remote branch.

#### 👀 Open a pull request

When you're done with the development, open a pull request targeting the `main` branch to propose your changes and asks your collaborators for feedbacks by adding them as reviewers.

Please make sure the following is done when submitting a pull request:

- **Keep your PR small.** Small pull requests (~300 lines of diff) are much easier to review.

- **Describe your PR** In the pull request summary, all your changes must be explained and reference the corresponding issue.

- **Your PR is opened against the `main` branch**.

#### 🤓 And then what?

The CI/CD performs a set of tasks automatically such as running linters against the code and run tests to guard against mistakes. These systems' duty is to make you worry as little about the chores as possible - [rely on CI/CD](https://github.com/okp4/wiki/wiki/What-should-I-know#𝟱-rely-on-cicd).

Reviewers/maintainers will also review and comment on the code. The comments made are important, and should be taken into consideration. Remember that the entire point of a review is to find problems, and problems will be found. Don't take it personally when one is uncovered - [You are not your code](https://github.com/okp4/wiki/wiki/What-should-I-know#𝟏-you-are-not-your-code).

Don't hesitate to ask for help if you need it, the team is there to help.

Once your pull request is approved you can merge it to integrate your changes in the `main` branch. Good job! 👍
