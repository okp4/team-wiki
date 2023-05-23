"use strict";(self.webpackChunk_okp4_team_wiki=self.webpackChunk_okp4_team_wiki||[]).push([[270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,d=c["".concat(s,".").concat(m)]||c[m]||g[m]||a;return n?i.createElement(d,o(o({ref:t},p),{},{components:n})):i.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:7,sidebar_label:"Signing commits",hide_table_of_contents:!0},o="Signing commits",l={unversionedId:"dev/signing-commits",id:"dev/signing-commits",title:"Signing commits",description:"Purpose",source:"@site/docs/dev/signing-commits.md",sourceDirName:"dev",slug:"/dev/signing-commits",permalink:"/dev/signing-commits",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Signing commits",hide_table_of_contents:!0},sidebar:"dev",previous:{title:"CI/CD",permalink:"/dev/ci-cd"},next:{title:"VS Code Extensions",permalink:"/dev/vs-extensions"}},s={},u=[{value:"Purpose",id:"purpose",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Tutorial",id:"tutorial",level:2},{value:"Generating a GPG key",id:"generating-a-gpg-key",level:3},{value:"Git config",id:"git-config",level:3},{value:"GitHub",id:"github",level:3},{value:"Script",id:"script",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"signing-commits"},"Signing commits"),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,"Signing commits offer the possibility to other contributors to verify the origin of your commits, and is mandatory on our repositories."),(0,r.kt)("p",null,"The signature helps to certify the ",(0,r.kt)("inlineCode",{parentName:"p"},"Author")," part of the commit, which can be changed without any prevention mechanism if you do not sign your commits. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Author")," field being used by GitHub to run repository permissions against, it ",(0,r.kt)("strong",{parentName:"p"},"must")," be ensured to avoid any impersonation possibility."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"gpg")," cli tool shall be installed, ",(0,r.kt)("inlineCode",{parentName:"p"},"pinentry")," can be necessary to handle passphrase:"),(0,r.kt)("p",null,"Debian"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get update\nsudo apt-get install -y gnupg\n")),(0,r.kt)("p",null,"MacOS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew install gnupg pinentry-mac\n")),(0,r.kt)("p",null,"By reading the output of the commands above you might see some directives to set a ",(0,r.kt)("inlineCode",{parentName:"p"},"GPG_TTY")," variable in your shell rc file, it could be wise to do so."),(0,r.kt)("h2",{id:"tutorial"},"Tutorial"),(0,r.kt)("p",null,"We'll get through every steps here but GitHub has already a good ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification"},"documentation")," on it."),(0,r.kt)("p",null,"Signing commits is pretty straightforward, it requires:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A GPG key referencing your email address (i.e. the verified email address of your GitHub account)."),(0,r.kt)("li",{parentName:"ul"},"The GPG Key to be referenced in your git config"),(0,r.kt)("li",{parentName:"ul"},"The GPG Key to be referenced in your GitHub account"),(0,r.kt)("li",{parentName:"ul"},"Sign your commits")),(0,r.kt)("h3",{id:"generating-a-gpg-key"},"Generating a GPG key"),(0,r.kt)("p",null,"Simply run: ",(0,r.kt)("inlineCode",{parentName:"p"},"gpg --default-new-key-algo rsa4096 --gen-key")),(0,r.kt)("p",null,"It'll prompt you for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name"),": Set your GitHub username"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Email address"),": Set your GitHub verified email address: prefer using a GitHub provided ",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-on-github"},"noreply")," address to keep some privacy"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Passphrase"),": Set a passphrase")),(0,r.kt)("h3",{id:"git-config"},"Git config"),(0,r.kt)("p",null,"List your keys with ",(0,r.kt)("inlineCode",{parentName:"p"},"gpg --list-secret-keys --keyid-format=long")," and retrieve the identifier on the ",(0,r.kt)("inlineCode",{parentName:"p"},"sec")," part written after the algorithm: ",(0,r.kt)("inlineCode",{parentName:"p"},"${algo}/${identifier}"),"."),(0,r.kt)("p",null,"Set the signing key in your git config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git config --global user.signingkey $identifier\n")),(0,r.kt)("p",null,"Tells git to systematically sign your commits:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git config --global commit.gpgsign true\n")),(0,r.kt)("h3",{id:"github"},"GitHub"),(0,r.kt)("p",null,"Print you GPG public key with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"gpg --armor --export $identifier\n")),(0,r.kt)("p",null,"Add it to your GitHub account."),(0,r.kt)("p",null,"Your commits are now marked as verified on GitHub so other people can be confident that the changes come from a trusted source!"),(0,r.kt)("h2",{id:"script"},"Script"),(0,r.kt)("p",null,"Here's a script you can execute to simplify some commands in the case you have no existing GPG keys:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"#! /bin/bash\n\nset -euxo pipefail\n\n# Generate a new GPG key\ngpg --default-new-key-algo rsa4096 --gen-key\n\n# Get key identifier\nKEY=$(gpg --list-secret-keys --keyid-format=long \\\n    | grep '^sec.*$' \\\n    | tr -s ' ' \\\n    | cut -d ' ' -f 2 \\\n    | cut -d '/' -f 2)\n\n# Configure git client\ngit config --global user.signingkey $KEY\ngit config --global commit.gpgsign true\n\n# Print the public key\ngpg --armor --export $KEY\n")))}c.isMDXComponent=!0}}]);