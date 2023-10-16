"use strict";(self.webpackChunk_okp4_team_wiki=self.webpackChunk_okp4_team_wiki||[]).push([[675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:6,sidebar_label:"CI/CD",hide_table_of_contents:!0},l="CI/CD",o={unversionedId:"dev/ci-cd",id:"dev/ci-cd",title:"CI/CD",description:"This document provides design details on how CI/CD is implemented @okp4, but it shall also be considered as guidelines when forging new repositories.",source:"@site/docs/dev/ci-cd.md",sourceDirName:"dev",slug:"/dev/ci-cd",permalink:"/dev/ci-cd",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"CI/CD",hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Naming rules",permalink:"/dev/naming-rules"},next:{title:"Signing commits",permalink:"/dev/signing-commits"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Bot-Anik",id:"bot-anik",level:2},{value:"CI Flows",id:"ci-flows",level:2},{value:"Lint",id:"lint",level:3},{value:"Test",id:"test",level:3},{value:"Build",id:"build",level:3},{value:"Publish",id:"publish",level:3},{value:"Release",id:"release",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cicd"},"CI/CD"),(0,r.kt)("p",null,"This document provides design details on how CI/CD is implemented @okp4, but it shall also be considered as guidelines when forging new repositories."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Before entering in the details it is important to define what purpose is served by those concepts. The CI (i.e. Continuous Integration) and the CD (Continuous Deployment|Delivery) are practices used to fill the ditch between developments and operations by automating every task in that gap:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Code quality analysis"),(0,r.kt)("li",{parentName:"ul"},"Build"),(0,r.kt)("li",{parentName:"ul"},"Artifact publication"),(0,r.kt)("li",{parentName:"ul"},"Release"),(0,r.kt)("li",{parentName:"ul"},"Deployment")),(0,r.kt)("p",null,"Those automations are crucial in a Cloud environment to ensure control and security on what is produced and how it is delivered, by automating sensible tasks we reduce the risks of human error and increase the delivery frequency."),(0,r.kt)("p",null,"Those practices being transversal everyone must be aware of them, it's a part of the DevOps culture that everyone shall contribute to."),(0,r.kt)("h2",{id:"bot-anik"},"Bot-Anik"),(0,r.kt)("p",null,"More than a simple bot, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bot-anik"},"bot-anik")," has its own GitHub account and embodies the DevOps culture. It acts, in every automation as the person executing the tasks (e.g. publishing artifacts, pushing tags, etc...)."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/u/98603954?v=4",alt:"bot-anik"})),(0,r.kt)("p",null,"Every integration linked to either developments or operations shall be represented by her."),(0,r.kt)("h2",{id:"ci-flows"},"CI Flows"),(0,r.kt)("p",null,"Every automations regarding the CI are executed through GitHub Actions scoped per repository."),(0,r.kt)("p",null,"You can find a collection of reusable workflows in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/okp4/actions"},"collection repository"),", feel free to contribute and enhance our workflow recipes."),(0,r.kt)("p",null,"The main steps of the development process will trigger actions, the standard workflows with their trigger are described hereafter. They describe the nominal cases very well, but this list isn't exhaustive as special cases exist and needs custom considerations."),(0,r.kt)("h3",{id:"lint"},"Lint"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows/lint.yml"),": Part of the code quality analysis, ensure the homogeneity of the codebase. The linters can vary depending on the project typology. When multiple linters are applied on a project (it should be) consider setting them as separate jobs of the same ",(0,r.kt)("inlineCode",{parentName:"p"},"Lint")," workflow."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Triggers:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pull_request")," update"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"main")," push"),(0,r.kt)("li",{parentName:"ul"},"new tag"),(0,r.kt)("li",{parentName:"ul"},"other workflow (i.e. it is a release step)"))),(0,r.kt)("p",null,"Here is a reusable GitHub actions workflow that can be taken as a base recipe for linting the codebase, depending on your project typology you can find some jobs you might add ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/okp4/actions/blob/main/src/.github/workflows/lint.yml"},"here"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Lint\n\non:\n  # Let the release workflow trigger it\n  workflow_call:\n\n  push:\n    branches: [main]\n\n  pull_request:\n    branches: [main]\n\nconcurrency:\n  group: lint-${{ github.ref }}\n  cancel-in-progress: true\n\njobs:\n  lint-xxx:\n    runs-on: ubuntu-20.04\n    steps: []\n")),(0,r.kt)("h3",{id:"test"},"Test"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows/test.yml"),": Executes the tests present in the codebase."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Triggers:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pull_request")," update"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"main")," push"),(0,r.kt)("li",{parentName:"ul"},"new tag"),(0,r.kt)("li",{parentName:"ul"},"other workflow (i.e. it is a release step)"))),(0,r.kt)("p",null,"Here is a reusable GitHub actions workflow that can be taken as a base recipe for testing the codebase, depending on your project typology you can find some jobs you might add ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/okp4/actions/blob/main/src/.github/workflows/test.yml"},"here"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Test\n\non:\n  # Let the release workflow trigger it\n  workflow_call:\n\n  push:\n    branches: [main]\n\n  pull_request:\n    branches: [main]\n\nconcurrency:\n  group: test-${{ github.ref }}\n  cancel-in-progress: true\n\njobs:\n  test-xxx:\n    runs-on: ubuntu-20.04\n    steps: []\n")),(0,r.kt)("h3",{id:"build"},"Build"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows/build.yml"),": Build the different artifacts produced from the codebase."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Triggers:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pull_request")," update"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"main")," push"),(0,r.kt)("li",{parentName:"ul"},"new tag"),(0,r.kt)("li",{parentName:"ul"},"other workflow (i.e. it is a release step)"))),(0,r.kt)("p",null,"Here is a reusable GitHub actions workflow that can be taken as a base recipe for building your artifacts, depending on your project typology you can find some jobs you might add ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/okp4/actions/blob/main/src/.github/workflows/build.yml"},"here"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Build\n\non:\n  # Let the release workflow trigger it\n  workflow_call:\n\n  push:\n    branches: [main]\n\n  pull_request:\n    branches: [main]\n\nconcurrency:\n  group: build-${{ github.ref }}\n  cancel-in-progress: true\n\njobs:\n  build-xxx:\n    runs-on: ubuntu-20.04\n    steps: []\n")),(0,r.kt)("h3",{id:"publish"},"Publish"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows/publish.yml"),": Publish the different produced artifacts on the GitHub Packages."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Triggers:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pull_request")," update"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"main")," push"),(0,r.kt)("li",{parentName:"ul"},"new tag"))),(0,r.kt)("p",null,"Here is a reusable GitHub actions workflow that can be taken as a base recipe for publishing artifacts in accordance with our [","[rules|Naming Rules#Artifacts]","], depending on your project typology you can find some jobs you might add ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/okp4/actions/blob/main/src/.github/workflows/publish.yml"},"here"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Publish\n\non:\n  push:\n    branches: [main]\n    tags: ["v*"]\n\n  pull_request:\n    branches: [main]\n\nconcurrency:\n  group: publish-${{ github.ref }}\n  cancel-in-progress: true\n\njobs:\n  publish-xxx:\n    runs-on: ubuntu-20.04\n    steps: []\n')),(0,r.kt)("h3",{id:"release"},"Release"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows/release.yml"),": The release consists in fixing the version of the codebase by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updating internal dependency versions"),(0,r.kt)("li",{parentName:"ul"},"Generating changelog based on commits"),(0,r.kt)("li",{parentName:"ul"},"Bump version number based on commits"),(0,r.kt)("li",{parentName:"ul"},"Tag the repository and create a GitHub release")),(0,r.kt)("p",null,"By setting the tag the other workflows will be triggered."),(0,r.kt)("p",null,"To simplify those tasks we use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/semantic-release/semantic-release"},"semantic-release"),", here is a sample ",(0,r.kt)("inlineCode",{parentName:"p"},".releaserc.yml")," (if the version shall be set in the codebase, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@google/semantic-release-replace-plugin"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'branches:\n  - main\n\nplugins:\n  - "@semantic-release/commit-analyzer"\n  - "@semantic-release/release-notes-generator"\n  - - "@semantic-release/changelog"\n    - changelogFile: CHANGELOG.md\n      changelogTitle: "# \xd8KP4 protocol changelog"\n  - "@semantic-release/github"\n  - - "@semantic-release/git"\n    - assets:\n        - CHANGELOG.md\n      message: "chore(release): perform release ${nextRelease.version}"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Triggers:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bot-anik")," dispatch"))),(0,r.kt)("p",null,"Here is a reusable GitHub actions workflow that can be taken as a base recipe to release your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Release\n\non:\n  workflow_dispatch:\n\njobs:\n  lint:\n    if: github.ref == 'refs/heads/main' && github.actor == 'bot-anik'\n    uses: ./.github/workflows/lint.yml\n\n  build:\n    if: github.ref == 'refs/heads/main' && github.actor == 'bot-anik'\n    uses: ./.github/workflows/build.yml\n\n  test:\n    if: github.ref == 'refs/heads/main' && github.actor == 'bot-anik'\n    uses: ./.github/workflows/test.yml\n\n  perfom-release:\n    if: github.ref == 'refs/heads/main' && github.actor == 'bot-anik'\n    needs:\n      - lint\n      - build\n      - test\n    runs-on: ubuntu-20.04\n    steps:\n      - name: Check out repository\n        uses: actions/checkout@v2\n        with:\n          token: ${{ secrets.OKP4_TOKEN }}\n\n      - name: Release project\n        uses: cycjimmy/semantic-release-action@v2\n        with:\n          semantic_version: 19.0.2\n          branch: main\n          extra_plugins: |\n            @semantic-release/changelog\n            @semantic-release/exec\n            @semantic-release/git\n        env:\n          GITHUB_TOKEN: ${{ secrets.OKP4_TOKEN }}\n          GIT_AUTHOR_NAME: ${{ secrets.OKP4_BOT_GIT_AUTHOR_NAME }}\n          GIT_AUTHOR_EMAIL: ${{ secrets.OKP4_BOT_GIT_AUTHOR_EMAIL }}\n          GIT_COMMITTER_NAME: ${{ secrets.OKP4_BOT_GIT_COMMITTER_NAME }}\n          GIT_COMMITTER_EMAIL: ${{ secrets.OKP4_BOT_GIT_COMMITTER_EMAIL }}\n")))}c.isMDXComponent=!0}}]);