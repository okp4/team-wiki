---
sidebar_position: 7
sidebar_label: "Signing commits"
hide_table_of_contents: true
---

# Signing commits

## Purpose

Signing commits offer the possibility to other contributors to verify the origin of your commits, and is mandatory on our repositories.

The signature helps to certify the `Author` part of the commit, which can be changed without any prevention mechanism if you do not sign your commits. The `Author` field being used by GitHub to run repository permissions against, it **must** be ensured to avoid any impersonation possibility.

## Prerequisites

The `gpg` cli tool shall be installed, `pinentry` can be necessary to handle passphrase:

Debian

```sh
sudo apt-get update
sudo apt-get install -y gnupg
```

MacOS

```sh
brew install gnupg pinentry-mac
```

By reading the output of the commands above you might see some directives to set a `GPG_TTY` variable in your shell rc file, it could be wise to do so.

## Tutorial

We'll get through every steps here but GitHub has already a good [documentation](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification) on it.

Signing commits is pretty straightforward, it requires:

- A GPG key referencing your email address (i.e. the verified email address of your GitHub account).
- The GPG Key to be referenced in your git config
- The GPG Key to be referenced in your GitHub account
- Sign your commits

### Generating a GPG key

Simply run: `gpg --default-new-key-algo rsa4096 --gen-key`

It'll prompt you for:

- **Name**: Set your GitHub username
- **Email address**: Set your GitHub verified email address: prefer using a GitHub provided [noreply](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-on-github) address to keep some privacy
- **Passphrase**: Set a passphrase

### Git config

List your keys with `gpg --list-secret-keys --keyid-format=long` and retrieve the identifier on the `sec` part written after the algorithm: `${algo}/${identifier}`.

Set the signing key in your git config:

```sh
git config --global user.signingkey $identifier
```

Tells git to systematically sign your commits:

```sh
git config --global commit.gpgsign true
```

### GitHub

Print you GPG public key with:

```sh
gpg --armor --export $identifier
```

Add it to your GitHub account.

Your commits are now marked as verified on GitHub so other people can be confident that the changes come from a trusted source!

## Script

Here's a script you can execute to simplify some commands in the case you have no existing GPG keys:

```sh
#! /bin/bash

set -euxo pipefail

# Generate a new GPG key
gpg --default-new-key-algo rsa4096 --gen-key

# Get key identifier
KEY=$(gpg --list-secret-keys --keyid-format=long \
    | grep '^sec.*$' \
    | tr -s ' ' \
    | cut -d ' ' -f 2 \
    | cut -d '/' -f 2)

# Configure git client
git config --global user.signingkey $KEY
git config --global commit.gpgsign true

# Print the public key
gpg --armor --export $KEY
```
