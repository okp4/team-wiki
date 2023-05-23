"use strict";(self.webpackChunk_okp4_team_wiki=self.webpackChunk_okp4_team_wiki||[]).push([[280],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(o),h=r,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||i;return o?n.createElement(d,a(a({ref:t},p),{},{components:o})):n.createElement(d,a({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},7721:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const i={sidebar_position:3,sidebar_label:"Open Source",hide_table_of_contents:!0},a="Open Source",l={unversionedId:"dev/open-source",id:"dev/open-source",title:"Open Source",description:'The "Why"',source:"@site/docs/dev/open-source.md",sourceDirName:"dev",slug:"/dev/open-source",permalink:"/fr/dev/open-source",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Open Source",hide_table_of_contents:!0},sidebar:"dev",previous:{title:"What should I know?",permalink:"/fr/dev/what-should-i-know"},next:{title:"Git",permalink:"/fr/dev/git"}},s={},u=[{value:"The &quot;Why&quot;",id:"the-why",level:2},{value:"The &quot;How&quot;",id:"the-how",level:2},{value:"\ud83d\udc49 No sensitive information",id:"-no-sensitive-information",level:3},{value:"\ud83d\udc49 A good project description",id:"-a-good-project-description",level:3},{value:"\ud83d\udc49 A clean Git History",id:"-a-clean-git-history",level:3},{value:"\ud83d\udc49 A complete CI/CD",id:"-a-complete-cicd",level:3},{value:"\ud83d\udc49 A set of Issues / PRs templates",id:"-a-set-of-issues--prs-templates",level:3},{value:"\ud83d\udc49 A well configured repository",id:"-a-well-configured-repository",level:3}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"open-source"},"Open Source"),(0,r.kt)("h2",{id:"the-why"},'The "Why"'),(0,r.kt)("p",null,"Open Source is one of the things that we most value at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/okp4"},"OKP4"),". Our philosophy is that:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Everything we do should be open by default.")),(0,r.kt)("p",null,"This is why, from the start, we're releasing (almost) all of our projects to open source."),(0,r.kt)("h2",{id:"the-how"},'The "How"'),(0,r.kt)("p",null,"It is ",(0,r.kt)("strong",{parentName:"p"},"fundamental")," to understand that the projects put in open source must satisfy some requirements. So in order to ensure that the projects are ready to be published, the following checklist can help:"),(0,r.kt)("h3",{id:"-no-sensitive-information"},"\ud83d\udc49 No sensitive information"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Keep in mind that anything put in the git repository is shared with the public when you push your source code to GitHub and remains visible in the Git history. Pushing such information can be dramatic, as the removal enforce rewriting the history.")),(0,r.kt)("ins",null,"To check:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"any data used in project don't break the terms of the ",(0,r.kt)("em",{parentName:"li"},"licence"),"."),(0,r.kt)("li",{parentName:"ul"},"there's no ",(0,r.kt)("em",{parentName:"li"},"specific")," or ",(0,r.kt)("em",{parentName:"li"},"personal")," information (in git comments, in README files...)."),(0,r.kt)("li",{parentName:"ul"},"there's no ",(0,r.kt)("em",{parentName:"li"},"secrets")," (password, private keys, tokens) (in configuration/environment files, scripts...).")),(0,r.kt)("h3",{id:"-a-good-project-description"},"\ud83d\udc49 A good project description"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Having a good project description is fundamental to provide users with easy-to-understand information on the purpose of the project, how to set up and use the project, or how developers can contribute.")),(0,r.kt)("ins",null,"To check:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},"README.md"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"with a complete easy-to-understand description of the project."),(0,r.kt)("li",{parentName:"ul"},"Badges for the CI/CD statuses, license... (badges are a great way to show pieces of information to developers at a glance)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository"},"License")," file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file"},"Community Health")," file (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Code of conduct"),")."))),(0,r.kt)("h3",{id:"-a-clean-git-history"},"\ud83d\udc49 A clean Git History"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Git Commit messages provide developers useful information about what has changed and why over time. It's crucial to have a project with good (and consistent) Commit Messages.")),(0,r.kt)("ins",null,"To check:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All commits follow our ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/okp4/wiki/wiki/Naming-rules#commit-messages"},"conventional commit")," specification."),(0,r.kt)("li",{parentName:"ul"},"All commits must be ",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits"},"signed"),"."),(0,r.kt)("li",{parentName:"ul"},"Project has a clean branching mode (e.g. one ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," branch, and feature branches merged into it).")),(0,r.kt)("h3",{id:"-a-complete-cicd"},"\ud83d\udc49 A complete CI/CD"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"CI/CD performs automatic tasks allowing to maintain a constant quality on what is developed and delivered. It allows developers to secure their contributions in their early stages by avoiding integration and deployment issues.")),(0,r.kt)("ins",null,"To check:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Project follows ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/okp4/wiki/wiki/CI-CD"},"OKP4 CI/CD guidelines")," adopted."),(0,r.kt)("li",{parentName:"ul"},"The project passes all CI/CD steps successfully on the ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," branch.")),(0,r.kt)("h3",{id:"-a-set-of-issues--prs-templates"},"\ud83d\udc49 A set of Issues / PRs templates"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To improve the quality of the issues and PRs management process, especially with regard to the community, it is important that each open-source repositories be configured to have customized issues and PRs templates.")),(0,r.kt)("ins",null,"To check:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Issues and PRs templates are configured for the repository (see: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/communities/"},"configuring-issue-templates-for-your-repository"),"using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)"),(0,r.kt)("li",{parentName:"ul"},"The templates comply with the standards adopted for all projects.")),(0,r.kt)("h3",{id:"-a-well-configured-repository"},"\ud83d\udc49 A well configured repository"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For security reasons, the repository must properly configured according to OKP4 rules.")),(0,r.kt)("ins",null,"To check:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allow merge commits only."),(0,r.kt)("li",{parentName:"ul"},"The default branch is ",(0,r.kt)("inlineCode",{parentName:"li"},"main"),"."),(0,r.kt)("li",{parentName:"ul"},"There is a protection rule for the ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," branch:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Require a pull request before merging: allow ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bot-anik"},(0,r.kt)("strong",{parentName:"a"},"@bot-anik"))," to bypass this enforcement (i.e. for release purpose)."),(0,r.kt)("li",{parentName:"ul"},"Require status checks before merging."),(0,r.kt)("li",{parentName:"ul"},"Require conversation resolution before merging."),(0,r.kt)("li",{parentName:"ul"},"Require signed commits."),(0,r.kt)("li",{parentName:"ul"},"Include administrators.")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Activity on open source projects should be reported on the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/okp4"},"OKP4 discord"),".")),(0,r.kt)("ins",null,"To check:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The payload URL must point to the discord web hooks: ",(0,r.kt)("a",{parentName:"li",href:"https://discord.com/api/webhooks/***/***/github"},"https://discord.com/api/webhooks/***/***/github")),(0,r.kt)("li",{parentName:"ul"},"The content type should be ",(0,r.kt)("inlineCode",{parentName:"li"},"application/json")),(0,r.kt)("li",{parentName:"ul"},"Secret: empty"),(0,r.kt)("li",{parentName:"ul"},"Enable SSL verification"),(0,r.kt)("li",{parentName:"ul"},"Configure individual events: Forks, Issues, Issue comments, Pull requests, Pull request review comments, Releases, Stars, Wiki.")))}c.isMDXComponent=!0}}]);