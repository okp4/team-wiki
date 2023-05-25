"use strict";(self.webpackChunk_okp4_team_wiki=self.webpackChunk_okp4_team_wiki||[]).push([[248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=l,c=u["".concat(p,".").concat(d)]||u[d]||s[d]||r;return n?a.createElement(c,i(i({ref:t},k),{},{components:n})):a.createElement(c,i({ref:t},k))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:5,sidebar_label:"Naming rules",hide_table_of_contents:!0},i="Naming rules",o={unversionedId:"dev/naming-rules",id:"dev/naming-rules",title:"Naming rules",description:'This page collects all the naming rules & convention for several project "items".',source:"@site/docs/dev/naming-rules.md",sourceDirName:"dev",slug:"/dev/naming-rules",permalink:"/fr/dev/naming-rules",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Naming rules",hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Git Flow",permalink:"/fr/dev/git"},next:{title:"CI/CD",permalink:"/fr/dev/ci-cd"}},p={},m=[{value:"Project",id:"project",level:2},{value:"Git repository",id:"git-repository",level:3},{value:"Branches",id:"branches",level:3},{value:"Commit messages",id:"commit-messages",level:3},{value:"Versionning",id:"versionning",level:3},{value:"Artifacts",id:"artifacts",level:2},{value:"Docker",id:"docker",level:3},{value:"NPM",id:"npm",level:3}],k={toc:m};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"naming-rules"},"Naming rules"),(0,l.kt)("p",null,'This page collects all the naming rules & convention for several project "items".'),(0,l.kt)("h2",{id:"project"},"Project"),(0,l.kt)("h3",{id:"git-repository"},"Git repository"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Rules")),(0,l.kt)("p",null,"The rules are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"contains only lowercase alphanumeric characters or '-'"),(0,l.kt)("li",{parentName:"ul"},"start with an alphanumeric character"),(0,l.kt)("li",{parentName:"ul"},"end with an alphanumeric character")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"\u2714\ufe0f good"),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"okp4d"),(0,l.kt)("li",{parentName:"ul"},"platform-cloud"))),(0,l.kt)("p",null,"\u2716\ufe0f bad"),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"amazing_repo"),(0,l.kt)("li",{parentName:"ul"},"12-labors-of-hercules"),(0,l.kt)("li",{parentName:"ul"},"kIkOoLol"))),(0,l.kt)("h3",{id:"branches"},"Branches"),(0,l.kt)("p",null,"The branch names shall follow the following format:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Rules")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"<type>/<name>\n")),(0,l.kt)("p",null,"where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type"),": can take the following values:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fix")),(0,l.kt)("td",{parentName:"tr",align:null},"Bug Fixes"),(0,l.kt)("td",{parentName:"tr",align:null},"A branch for bug fixes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"feat")),(0,l.kt)("td",{parentName:"tr",align:null},"Features"),(0,l.kt)("td",{parentName:"tr",align:null},"A branch for new feature(s)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"build")),(0,l.kt)("td",{parentName:"tr",align:null},"Builds"),(0,l.kt)("td",{parentName:"tr",align:null},"A branch for changes that affect the build system (",(0,l.kt)("inlineCode",{parentName:"td"},"npm"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"mavem"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"poetry"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ci")),(0,l.kt)("td",{parentName:"tr",align:null},"Continuous Integrations"),(0,l.kt)("td",{parentName:"tr",align:null},"A branch for changes to the CI configuration files and scripts (e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},"github actions"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"docs")),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"A branch for documentation only changes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"style")),(0,l.kt)("td",{parentName:"tr",align:null},"Styles"),(0,l.kt)("td",{parentName:"tr",align:null},"A branch for changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"refactor")),(0,l.kt)("td",{parentName:"tr",align:null},"Code Refactoring"),(0,l.kt)("td",{parentName:"tr",align:null},"A branch for a code change that neither fixes a bug nor adds a feature")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"perf")),(0,l.kt)("td",{parentName:"tr",align:null},"Performance Improvements"),(0,l.kt)("td",{parentName:"tr",align:null},"A branch for a code change that improves performance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"test")),(0,l.kt)("td",{parentName:"tr",align:null},"Tests"),(0,l.kt)("td",{parentName:"tr",align:null},"A branch for adding missing tests or correcting existing tests")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"chore")),(0,l.kt)("td",{parentName:"tr",align:null},"Chores"),(0,l.kt)("td",{parentName:"tr",align:null},"A branch for any other changes that don't modify src or test files")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name"),": the purpose of the branch, contains only lowercase alphanumeric characters or '-'")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"feat/allow-user-to-download-images"),(0,l.kt)("li",{parentName:"ul"},"fix/fix-download-issues"),(0,l.kt)("li",{parentName:"ul"},"refactor/use-a-state-monad"),(0,l.kt)("li",{parentName:"ul"},"docs/correct-spellings"))),(0,l.kt)("h3",{id:"commit-messages"},"Commit messages"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Rules")),(0,l.kt)("p",null,"The commit messages must conform to the ",(0,l.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/#summary"},"Conventional Commits")," specification."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"<type>[scope][!]: <description>\n\n[body]\n")),(0,l.kt)("p",null,"where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type"),": can take the following values:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fix")),(0,l.kt)("td",{parentName:"tr",align:null},"Bug Fixes"),(0,l.kt)("td",{parentName:"tr",align:null},"A bug fix")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"feat")),(0,l.kt)("td",{parentName:"tr",align:null},"Features"),(0,l.kt)("td",{parentName:"tr",align:null},"A new feature")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"build")),(0,l.kt)("td",{parentName:"tr",align:null},"Builds"),(0,l.kt)("td",{parentName:"tr",align:null},"Changes that affect the build system (",(0,l.kt)("inlineCode",{parentName:"td"},"npm"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"mavem"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"poetry"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ci")),(0,l.kt)("td",{parentName:"tr",align:null},"Continuous Integrations"),(0,l.kt)("td",{parentName:"tr",align:null},"Changes to our CI configuration files and scripts (",(0,l.kt)("inlineCode",{parentName:"td"},"github actions"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"docs")),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation only changes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"style")),(0,l.kt)("td",{parentName:"tr",align:null},"Styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"refactor")),(0,l.kt)("td",{parentName:"tr",align:null},"Code Refactoring"),(0,l.kt)("td",{parentName:"tr",align:null},"A code change that neither fixes a bug nor adds a feature")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"perf")),(0,l.kt)("td",{parentName:"tr",align:null},"Performance Improvements"),(0,l.kt)("td",{parentName:"tr",align:null},"A code change that improves performance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"test")),(0,l.kt)("td",{parentName:"tr",align:null},"Tests"),(0,l.kt)("td",{parentName:"tr",align:null},"Adding missing tests or correcting existing tests")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"chore")),(0,l.kt)("td",{parentName:"tr",align:null},"Chores"),(0,l.kt)("td",{parentName:"tr",align:null},"Other changes that don't modify src or test files")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scope"),": (optional) noun describing a section of the codebase surrounded by parenthesis (e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"fix(parser):"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"!"),": (optional) when present, indicate a breaking change"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"description"),": a short summary of the code changes, starting with a ",(0,l.kt)("em",{parentName:"li"},"verb")," (e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"fix: consider array parsing when multiple spaces were contained in string"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"body"),": (optional) paragraph to share additional contextual information about the code changes, when difficult to understand without details")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Rules"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Limit")," the subject line to ",(0,l.kt)("strong",{parentName:"li"},"50")," characters."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Do not capitalize")," the subject line."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Do not")," end the subject line with a ",(0,l.kt)("strong",{parentName:"li"},"period"),"."),(0,l.kt)("li",{parentName:"ul"},"Use the ",(0,l.kt)("strong",{parentName:"li"},"imperative mood")," (present tense), i.e. \u201cchange\u201d not \u201cchanged\u201d nor \u201cchanges\u201d."),(0,l.kt)("li",{parentName:"ul"},"Describe the ",(0,l.kt)("strong",{parentName:"li"},"intent"),", the ",(0,l.kt)("strong",{parentName:"li"},"motivation")," of the commit.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"\u2714\ufe0f good"),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"ci(workflow): add a linter for R code source"),(0,l.kt)("li",{parentName:"ul"},"feat(report): implement sharing of user reports"),(0,l.kt)("li",{parentName:"ul"},"feat(lang): add german language"),(0,l.kt)("li",{parentName:"ul"},"chore(project): add license"))),(0,l.kt)("p",null,"\u2716\ufe0f bad"),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"feat: update"),(0,l.kt)("li",{parentName:"ul"},"fix: fix issue"),(0,l.kt)("li",{parentName:"ul"},"chore: minor change"))),(0,l.kt)("h3",{id:"versionning"},"Versionning"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Rules")),(0,l.kt)("p",null,"The versioning of all items follow the ",(0,l.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning 2.0.0"),"."),(0,l.kt)("p",null,"A git tag shall be in the form:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"v<major>.<minor>.<patch>\n")),(0,l.kt)("p",null,"where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"major"),": Incompatible API changes."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"minor"),": New functionality in a backwards-compatible manner."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"patch"),": Backwards-compatible bug fixes.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"v1.0.3"),(0,l.kt)("li",{parentName:"ul"},"v3.14.16"))),(0,l.kt)("h2",{id:"artifacts"},"Artifacts"),(0,l.kt)("h3",{id:"docker"},"Docker"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Rules")),(0,l.kt)("p",null,"The structure of a docker image name is the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$REGISTRY/okp4/$REPOSITORY:$TAG\n")),(0,l.kt)("p",null,"where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"REGISTRY"),": The targeted docker registry (i.e. ",(0,l.kt)("inlineCode",{parentName:"li"},"ghcr.io"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"REPOSITORY"),": The name of the git repository in the nominal case."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TAG"),": The tag names are strongly coupled with the internal codebase ref:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"git tag will produce ",(0,l.kt)("inlineCode",{parentName:"li"},"x.y.z"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"x.y"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"latest")," docker tags"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"main")," branch will produce a ",(0,l.kt)("inlineCode",{parentName:"li"},"nightly")," docker tag"),(0,l.kt)("li",{parentName:"ul"},"other branch will produce a ",(0,l.kt)("inlineCode",{parentName:"li"},"$branch_name")," docker tag replacing ",(0,l.kt)("inlineCode",{parentName:"li"},"/")," by ",(0,l.kt)("inlineCode",{parentName:"li"},"-"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"ghcr.io/okp4/okp4d:nightly"),(0,l.kt)("li",{parentName:"ul"},"ghcr.io/okp4/ontology:1.0.1"),(0,l.kt)("li",{parentName:"ul"},"ghcr.io/okp4/okp4bi:ci-fix-doker-tag"))),(0,l.kt)("h3",{id:"npm"},"NPM"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Rules")),(0,l.kt)("p",null,"The structure of an npm package is defined by its ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),", its ",(0,l.kt)("inlineCode",{parentName:"p"},"version")," and its ",(0,l.kt)("inlineCode",{parentName:"p"},"dist-tags"),":"),(0,l.kt)("p",null,"The structure of an npm package ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," is the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"@okp4/$REPOSITORY\n")),(0,l.kt)("p",null,"where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"REPOSITORY"),": The name of the git repository in the nominal case.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"@okp4/ui"))),(0,l.kt)("p",null,"The structure of an npm package ",(0,l.kt)("inlineCode",{parentName:"p"},"version")," is the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$SEMVER[-$DIST_TAG.$TIMESTAMP]\n")),(0,l.kt)("p",null,"where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SEMVER"),": The name of the current package.json version."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DIST-TAG"),": The sliding dist-tag associated with the version, see its rules in the next section.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"1.0.0"),(0,l.kt)("li",{parentName:"ul"},"1.0.1-next.1646212564"),(0,l.kt)("li",{parentName:"ul"},"1.2.1-fix-whatever.1646212564"))),(0,l.kt)("p",null,"The possibles npm package ",(0,l.kt)("inlineCode",{parentName:"p"},"dist-tag")," are the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"latest"),": Follow production versions, in that case it doesn't appear in the version name as."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"next"),": Follow ",(0,l.kt)("inlineCode",{parentName:"li"},"main")," branch versions."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$BRANCH_NAME"),": Follow ",(0,l.kt)("inlineCode",{parentName:"li"},"$BRANCH_NAME")," branch versions replacing ",(0,l.kt)("inlineCode",{parentName:"li"},"/")," by ",(0,l.kt)("inlineCode",{parentName:"li"},"-"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"latest"),(0,l.kt)("li",{parentName:"ul"},"next"),(0,l.kt)("li",{parentName:"ul"},"fix-whatever"))))}u.isMDXComponent=!0}}]);