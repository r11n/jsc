---
layout: default
---
# **npm** .. **yarn**..
## npm
npm (originally short for Node Package Manager) is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website. The package manager and the registry are managed by npm, Inc.

### usage
npm can manage packages that are local dependencies of a particular project, as well as globally-installed JavaScript tools. When used as a dependency manager for a local project, npm can install, in one command, all the dependencies of a project through the `package.json` file. In the `package.json` file, each dependency can specify a range of valid versions using the semantic versioning scheme, allowing developers to auto-update their packages while at the same time avoiding unwanted breaking changes. npm also provides version-bumping tools for developers to tag their packages with a particular version. npm also provides the `package-lock.json` file which has the entry of the exact version used by the project after evaluating semantic versioning in `package.json`.

## yarn
Yarn is a new package manager for node.js. It is a common project developed by such companies as Facebook, Exponent, Google, and Tilde. It is distributed under the BSD license.

The main reason why developers choose to transition to Yarn is its stability. In the case of npm, when we need to deploy the project on different machines, the versions of installed packages can be different.

Yarn has some advantages over npm, most prominent ones are:
* can install packages from the local cache
* strongly binds package versions
* allows parallel packages installation