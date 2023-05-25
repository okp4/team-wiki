"use strict";(self.webpackChunk_okp4_team_wiki=self.webpackChunk_okp4_team_wiki||[]).push([[894],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=r,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:4,sidebar_label:"Git Flow",hide_table_of_contents:!0},o="Git",l={unversionedId:"dev/git",id:"dev/git",title:"Git",description:"All the git repositories are hosted on GitHub in the OKP4 organization here.",source:"@site/docs/dev/git.md",sourceDirName:"dev",slug:"/dev/git",permalink:"/fr/dev/git",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Git Flow",hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Open Source",permalink:"/fr/dev/open-source"},next:{title:"Naming rules",permalink:"/fr/dev/naming-rules"}},s={},p=[{value:"GitHub Flow",id:"github-flow",level:2},{value:"<code>main</code> Branch",id:"main-branch",level:3},{value:"Development Process",id:"development-process",level:3},{value:"\ud83c\udf31 Create a new branch",id:"-create-a-new-branch",level:4},{value:"\ud83d\udd8a\ufe0f Commit your changes",id:"\ufe0f-commit-your-changes",level:4},{value:"\ud83e\uddf9 Keep your history clean",id:"-keep-your-history-clean",level:4},{value:"\ud83e\udd0f Keep your changes small",id:"-keep-your-changes-small",level:4},{value:"\ud83e\udec2 Work with others",id:"-work-with-others",level:4},{value:"\ud83d\udc40 Open a pull request",id:"-open-a-pull-request",level:4},{value:"\ud83e\udd13 And then what?",id:"-and-then-what",level:4},{value:"\u270d\ud83c\udffb When reviewing a code",id:"-when-reviewing-a-code",level:4}],u={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"git"},"Git"),(0,r.kt)("p",null,"All the git repositories are hosted on GitHub in the ",(0,r.kt)("inlineCode",{parentName:"p"},"OKP4")," organization ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/okp4"},"here"),"."),(0,r.kt)("p",null,"\ud83d\udc6e Repository creation shall be discussed with Organization owners."),(0,r.kt)("h2",{id:"github-flow"},"GitHub Flow"),(0,r.kt)("p",null,"When using Version Control like ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git")," in a team, it's crucial to agree on a workflow, a ",(0,r.kt)("em",{parentName:"p"},"branching strategy"),". If we don't use a common workflow, confusion is inevitable."),(0,r.kt)("p",null,"The chosen workflow is ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/github-flow"},"GitHub Flow")," which is lightweight and fit well with the gitops paradigm."),(0,r.kt)("h3",{id:"main-branch"},(0,r.kt)("inlineCode",{parentName:"h3"},"main")," Branch"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch is the ",(0,r.kt)("em",{parentName:"p"},"default one"),", containing both latest developments and production versions: a production version being simply a tag on the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch."),(0,r.kt)("p",null,"\u2716\ufe0f Don\u2019t git push straight to ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),". ",(0,r.kt)("strong",{parentName:"p"},"Never!"),"."),(0,r.kt)("p",null,"\u2714\ufe0f Every new developments shall be proposed in a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests"},"Pull Request")," and go through the review process."),(0,r.kt)("h3",{id:"development-process"},"Development Process"),(0,r.kt)("p",null,"Each new development should be referred to a ticket in the repository, or discussed in the dedicated space."),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The PR ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/okp4/ui/pull/308"},"okp4/ui - file input")," has been specified in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/okp4/ui/issues/300"},"okp4/ui#300"),"."),(0,r.kt)("li",{parentName:"ul"},"The PR ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/okp4/ui/pull/344"},"okp4/ui - progress bar")," has been discussed in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/okp4/ui/discussions/341"},"okp4/ui#341"),".")),(0,r.kt)("h4",{id:"-create-a-new-branch"},"\ud83c\udf31 Create a new branch"),(0,r.kt)("p",null,"To start new developments on a repository you first need to create a dedicated branch from the ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),". This branch is a safe place to make changes, all the mistakes can be reverted until the branch is merged."),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout -b feat/my-awesome-feature\n")),(0,r.kt)("h4",{id:"\ufe0f-commit-your-changes"},"\ud83d\udd8a\ufe0f Commit your changes"),(0,r.kt)("p",null,"Each commit shall contains isolate and complete changes."),(0,r.kt)("p",null,"\ud83d\udea8 Each single commit is important: They are used to generate changelogs and determine the release versions."),(0,r.kt)("p",null,"\ud83d\udc6e Sign your commits: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits"},"https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits")),(0,r.kt)("h4",{id:"-keep-your-history-clean"},"\ud83e\uddf9 Keep your history clean"),(0,r.kt)("p",null,"The set of commits shall express the conducted thread that guided your developments and tell its story. Don't hesitate to squash multiple commits related to the same changes, use interactive rebase to retrace a logical development flow."),(0,r.kt)("p",null,"A clean history is also synonymous of a single thread of commits, this prohibits merge commits from your history."),(0,r.kt)("h4",{id:"-keep-your-changes-small"},"\ud83e\udd0f Keep your changes small"),(0,r.kt)("p",null,"Remember that the changes you make are meant to be reviewed, so keep the changes small (~300 lines of diff)."),(0,r.kt)("h4",{id:"-work-with-others"},"\ud83e\udec2 Work with others"),(0,r.kt)("p",null,"Your working branch shall always be up to date from the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch, when changes are integrated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch after the creation of your working branch you must update your branch."),(0,r.kt)("p",null,"\u26a0\ufe0f You could be tempted to update your branch by merging the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch in yours but it's ",(0,r.kt)("em",{parentName:"p"},"prohibited")," by clean history rule. Prefer use a ",(0,r.kt)("inlineCode",{parentName:"p"},"rebase")," to rewrite your history based on a fresh version of ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git fetch\ngit rebase origin/main\n")),(0,r.kt)("p",null,"The same practice can be applied when updating your branch with its remote: ",(0,r.kt)("inlineCode",{parentName:"p"},"git pull --rebase")," will prevent merge commits. You can enable this strategy by default with: ",(0,r.kt)("inlineCode",{parentName:"p"},"git config --global pull.rebase true"),"."),(0,r.kt)("p",null,"Another point of attention is when you push your changes after rewriting the history, you'll need to force push as the commits hash have changed and it may end up with the loss of a teammate's work. To prevent that you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--force-with-lease")," option that will not overwrite any work on the remote branch if more commits were added to the remote branch."),(0,r.kt)("h4",{id:"-open-a-pull-request"},"\ud83d\udc40 Open a pull request"),(0,r.kt)("p",null,"When you're done with the development, open a pull request targeting the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch to propose your changes and asks your collaborators for feedbacks by adding them as reviewers."),(0,r.kt)("p",null,"Please make sure the following is done when submitting a pull request:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Keep your PR small.")," Small pull requests (~300 lines of diff) are much easier to review.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Describe your PR")," In the pull request summary, all your changes must be explained and reference the corresponding issue.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Your PR is opened against the ",(0,r.kt)("inlineCode",{parentName:"strong"},"main")," branch"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make sure the opened PR is ",(0,r.kt)("strong",{parentName:"p"},"well tested"),", and meets our ",(0,r.kt)("strong",{parentName:"p"},"quality standards"),"."))),(0,r.kt)("h4",{id:"-and-then-what"},"\ud83e\udd13 And then what?"),(0,r.kt)("p",null,"The CI/CD performs a set of tasks automatically such as running linters against the code and run tests to guard against mistakes. These systems' duty is to make you worry as little about the chores as possible - rely on CI/CD."),(0,r.kt)("p",null,"Reviewers/maintainers will also review and comment on the code. The comments made are important, and should be taken into consideration. Remember that the entire point of a review is to find problems, and problems will be found. Don't take it personally when one is uncovered - You are not your code."),(0,r.kt)("p",null,"Don't hesitate to ask for help if you need it, the team is there to help."),(0,r.kt)("h4",{id:"-when-reviewing-a-code"},"\u270d\ud83c\udffb When reviewing a code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Focus mostly on the ",(0,r.kt)("strong",{parentName:"p"},"structuring issues")," (such as code organization, functions, modules, interface definitions, etc.) that affect the code quality.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Be ",(0,r.kt)("strong",{parentName:"p"},"objective")," rather than subjective, don\u2019t comment just for the sake of commenting.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In case of a big issue with the review, please ",(0,r.kt)("strong",{parentName:"p"},"switch the PR to a draft")," and rework the PR with team\u2019s help.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Avoid a large number of mentions")," in the comments since it causes more latency in the review process."))),(0,r.kt)("p",null,"Finally, once your pull request is approved you can merge it to integrate your changes in the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch. Good job! \ud83d\udc4d"))}h.isMDXComponent=!0}}]);