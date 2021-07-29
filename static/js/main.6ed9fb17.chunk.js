(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,s){},12:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(3),r=s.n(n),i=(s(8),s(0)),l=function(e){var t=e.title,s=e.children;return Object(i.jsxs)("section",{className:"w-90 mw8 center br3 pa3 pa4-ns mt4 mb5 ba b--black-10 bg-main-color-light",children:[Object(i.jsx)("h2",{className:"f3-ns f4 mb3 tl mt0 color-main-dark",children:t}),s]})},o=function(e){var t=e.label,s=e.host,a=e.path,c=e.svg,n=e.prependLabel,r=e.className;return Object(i.jsxs)("a",{className:"no-underline bg-animate bg-secondary-color hover-bg-highlight-color inline-flex items-center tc br2 pa2 ".concat(r," "),href:"https://".concat(s,"/").concat(a),title:t,target:"_blank",rel:"noreferrer",children:[Object(i.jsx)("img",{src:c,alt:""}),Object(i.jsxs)("span",{className:"f6 ml1 ml3-ns pr2-ns main-color-light",children:[n&&n,t]})]})},d=s.p+"static/media/github.59b3db11.svg",b=function(e){var t=e.svg,s=e.title,a=e.body,c=e.list,n=(e.style,c&&c.map((function(e){return Object(i.jsx)("li",{children:e})})));return Object(i.jsxs)("article",{className:"mw6 center br3 pa3 pa4-ns mv3 mt4-ns mb0-ns ba b--black-10 bg-main-color-dark main-color-light",children:[Object(i.jsxs)("div",{className:"flex justify-center",children:[Object(i.jsx)("img",{src:t,title:s,alt:s,className:"h3 w3 dib self-center mr3"}),Object(i.jsx)(o,{label:"GitHub",svg:d,host:"github.com",path:s,className:"self-center"})]}),Object(i.jsx)("h5",{className:"f4 mv3 tc",children:s}),Object(i.jsx)("hr",{style:{opacity:.9},className:"mw3 bb bw1 main-color-light"}),Object(i.jsx)("p",{className:"lh-copy measure-narrow center f5 paragraph-color-light",children:a}),c&&Object(i.jsx)("ul",{className:"measure-narrow paragraph-color-light lh-copy",children:n})]})},m=function(e){var t=e.svg,s=e.caption,a=e.borderTop;return Object(i.jsx)("div",{className:"center",children:Object(i.jsxs)("figure",{className:"pv2 ph3 mh3 pa2-ns mh2-ns mh0-ns mv0 tc bb ".concat(a),children:[Object(i.jsx)("img",{src:t,alt:"icon",className:"pv2 skillIcon"}),Object(i.jsx)("figcaption",{className:"tc paragraph-color-dark",children:s})]})})},p=function(e){var t=e.children,s=e.title,a=e.className;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h4",{className:"tc mt3 mb2 dn-ns mh1 main-color-dark",children:"".concat(s,":")}),Object(i.jsxs)("section",{className:"flex flex-column-ns flex-wrap items-center w-33-l w-30-m br-ns ".concat(a),children:[Object(i.jsx)("h4",{className:"mt3 mb2 tc dn di-ns mh1 main-color-dark",children:"".concat(s,":")}),t]})]})},j=function(e){var t=e.id,s=e.title,a=e.svg,c=e.host,n=e.path;return Object(i.jsxs)("a",{id:t,href:"https://".concat(c,"/").concat(n),title:"".concat(s),target:"_blank",rel:"noreferrer",className:"paragraph-color-light link hover-highlight-color highlight-color dib mh3 tc outline-0",children:[Object(i.jsx)("img",{src:a,alt:""}),Object(i.jsx)("span",{className:"f6 db paragraph-color-light ",children:s})]})},h=function(e){var t=e.content;return Object(i.jsx)("h3",{className:"f5 f4-ns tc mb0 mt0 w-100",children:Object(i.jsx)("span",{className:"pb2 bb dib",children:t})})},g=function(e){var t=e.title,s=e.content,a=e.subContent,c=e.widthNS;return Object(i.jsxs)("div",{className:"w-100 pa1-m center-ns mv3 mv0-ns ".concat(c),children:[Object(i.jsx)(h,{content:t}),Object(i.jsx)("span",{className:"db paragraph-color-dark pt2",children:s}),a&&Object(i.jsx)("span",{className:"i dib mt1 paragraph-color-dark",children:a})]})},x=s.p+"static/media/typetracer.67599b36.png",u=s.p+"static/media/typetracerMedium.8fede9cf.png",f=s.p+"static/media/typetracerMobile.50faa11a.png",O=s.p+"static/media/me.73490eb4.jpg",v=["Typetracer is a single page typing application where users can\nchoose from a selection of over 280 public domain texts to type word by word, sentence by sentence, cover to cover, \ngetting to enjoy a text as they practice thier typing. It's mobile-first and responsive front-end was built with React.js, Tachyons.css, and custom CSS when needed.","Typetracer's texts and associated metadata were sourced from Project Gutenberg(an archive of public domain texts), and were processed to fit Typetracer.\nSpecifically texts were paginated and turned from txt to JSON format, and a text's subjects were parsed to a single text category.\nTexts are stored in an AWS S3 bucket, and texts' metadata are stored in a PostgreSQL database(typetracer-db) that was created and initalized with Knex.js.\nTypetracer-db also stores users' sign-in info, name, accessed texts, and texts' last access time and progress.","For Typetracer's front-end to utilze typetracer-db, typetracer-api, a RESTful API was built with Node.js and Express.js. \nTypetracer-API is responsible for user sign-in, user registration, user authentication, retrieval of text metadata, retrieval of texts from S3, and the creation of user texts along with updating their last access time and progress."],y=["Responsive design","Mobile-First design","Storage Api","Front-End Validation"],N=["Sign-In & Registration","JWT User Authentification"," CRUD Operations"],w=["A scalable solution to paginate txt files from the 2010 Project Gutenberg Iso to JSON (*Stored in AWS*)","Processing of PG's(a text archive) metadata to fit the DB design for Typetracer","Automation of DB schema creation and insertion of text metadata with Knex.js"],k=s.p+"static/media/database.4d2e79e8.svg",S=s.p+"static/media/browser.ed66b73d.svg",T=s.p+"static/media/server.ac4d2daa.svg",A=s.p+"static/media/js.8dea1c95.svg",I=s.p+"static/media/nodejs.502737ea.svg",P=s.p+"static/media/postgres.b941b412.svg",C=s.p+"static/media/react.6c1d44b8.svg",B=s.p+"static/media/knex.5052f1de.svg",F=s.p+"static/media/express.632d3c32.svg",L=s.p+"static/media/html.9b8bf7ec.svg",R=s.p+"static/media/css.2e030f0b.svg",E=s.p+"static/media/openBook.2d8ac63c.svg",M=s.p+"static/media/linkedin.74888ab8.svg",J=(s(10),function(){return Object(i.jsxs)("div",{className:"bg-main-color-dark pa4-ns pt4 pb4 pa3",children:[Object(i.jsxs)("header",{className:"tc center pt0",children:[Object(i.jsx)("h1",{className:"tc f1 main-color-light mb0 mt0",children:"I am Christian Arce"}),Object(i.jsx)("h4",{className:"secondary-color",children:"Full-Stack Web Developer"}),Object(i.jsxs)("nav",{className:"pv2 ph3 tc center",children:[Object(i.jsx)(j,{id:"iconLinkGitHub",title:"GitHub",svg:d,host:"github.com",path:"arcec-cs"}),Object(i.jsx)(j,{id:"iconLinkLinkedIn",title:"LinkedIn",svg:M,host:"linkedin.com",path:"arcechristian"})]})]}),Object(i.jsx)(l,{title:"About me",children:Object(i.jsxs)("div",{className:"flex flex-wrap flex-nowrap-l",children:[Object(i.jsx)("img",{src:O,id:"Me",title:"Its Me! :)",alt:"Its Me! :)",className:"border-box dib self-center center tl-l h-auto ba b--black-05 mt0 pa2 mr4-l "}),Object(i.jsx)("p",{className:"f4-ns f5 lh-copy measure mt3 mt0-l mb0 center paragraph-color-dark tab",children:"I am Christian Arce, a Boston based web developer who is passionate about the creation positive user experiences, along with keeping code DRY and easy to read.\nMy ability to conseptualize a product, own it, and bring it to fruition has shaped my current skill set. Javasript is my main programming language.\nI am experienced using React.js to build responsive and mobile-first front-ends, and Node.js, Express.js, and PostgreSQL to create back-ends.\nI am currently looking for work as a developer and am excited to talk to you about how we can work together!"})]})}),Object(i.jsx)(l,{title:"Education",children:Object(i.jsxs)("div",{className:"flex justify-between flex-wrap tc",children:[Object(i.jsx)(g,{title:"School",content:"Wentworth Institute of Technology",subContent:"Boston, MA",widthNS:"w-34-m w-30-l"}),Object(i.jsx)(g,{title:"Degree",content:"BS of Computer Science",subContent:"Sep 2016 - Aug 2020",widthNS:"w-34-m w-30-l"}),Object(i.jsx)(g,{title:"GPA",content:"3.39/4.00",widthNS:"w-30-ns"})]})}),Object(i.jsx)(l,{title:"Skills",children:Object(i.jsxs)("div",{className:"flex flex-row-ns flex-column justify-between flex-wrap mw8 center paragraph-color-dark",children:[Object(i.jsxs)(p,{title:"Languages",className:"bl-ns w-40-m",children:[Object(i.jsx)(m,{svg:A,caption:"Javascript",borderTop:"bt-ns pt3-ns"}),Object(i.jsxs)("span",{className:"ba b--black-10 mt4 center dn db-ns pv1",children:[Object(i.jsx)("h5",{className:"tc mt0 main-color-dark ph2 tc mb3",children:"JS Fundamentals"}),Object(i.jsxs)("ul",{className:"ml1 pl0 paragraph-color-dark list mb0",children:[Object(i.jsx)("li",{className:"pv1 mh1",children:"ES6+"}),Object(i.jsx)("li",{className:"pv1 mh1",children:"Protypical Inheritance"}),Object(i.jsx)("li",{className:"pv1 mh1",children:"Functional Programming"}),Object(i.jsx)("li",{className:"pv1 mh1",children:"Object Oriented Programming"}),Object(i.jsx)("li",{className:"pv1 mh1",children:"Asynchronous Programming"}),Object(i.jsx)("li",{className:"pv1 mh1",children:"JS Runtime Environment"})]})]})]}),Object(i.jsxs)(p,{title:"Front-end",children:[Object(i.jsx)(m,{svg:C,caption:"React",borderTop:"bt-ns pt3-ns"}),Object(i.jsx)(m,{svg:L,caption:"HTML"}),Object(i.jsx)(m,{svg:R,caption:"CSS"}),Object(i.jsx)("div",{className:"center",children:Object(i.jsxs)("div",{className:"pv2 ph3 mh3 pa2-ns mh0-ns bb",children:[Object(i.jsx)("div",{style:{marginBottom:".6875rem"},className:"mv2 mb3 h3 w3 flex bg-light-gray",children:Object(i.jsx)("text",{className:"sans-serif b f2 self-center center",children:"T"})}),Object(i.jsx)("span",{children:"Tachyons"})]})})]}),Object(i.jsxs)(p,{title:"Back-end",children:[Object(i.jsx)(m,{svg:I,caption:"Node.js",borderTop:"bt-ns pt3-ns"}),Object(i.jsx)(m,{svg:P,caption:"Postgres"}),Object(i.jsx)(m,{svg:F,caption:"Express"}),Object(i.jsx)(m,{svg:B,caption:"Knex.js"})]})]})}),Object(i.jsxs)(l,{title:"Typetracer- single page typing application",children:[Object(i.jsxs)("figure",{children:[Object(i.jsx)("img",{src:x,alt:"Typetracer Application",className:"dn db-l ba b--black-10"}),Object(i.jsx)("img",{src:u,alt:"Typetracer Application",className:"dn db-m ba b--black-10"}),Object(i.jsx)("img",{src:f,alt:"Typetracer Application",className:"dn-ns b--black-10"}),Object(i.jsx)("figcaption",{className:"center tc self center i mt2",children:"Typing Pinocchio in Typetracer. Almost as good as 400 pieces of toast :)"})]}),Object(i.jsxs)("nav",{className:"tc",children:[Object(i.jsx)(o,{label:"Typetracer",host:"typetracer.herokuapp.com",svg:E,prependLabel:Object(i.jsx)("span",{className:"dn di-ns",children:"To "})}),Object(i.jsx)(o,{label:"GitHub",host:"github.com",path:"arcec-cs/typetracer",svg:d,className:"ml3"})]}),Object(i.jsxs)("section",{className:"mv4 paragraph-color-dark center f5 f4-ns measure-wide lh-copy tab",children:[Object(i.jsx)(h,{content:"About"}),Object(i.jsx)("p",{className:"mt3",children:v[0]}),Object(i.jsx)("p",{className:"mt3",children:v[1]}),Object(i.jsx)("p",{className:"mt3",children:v[2]})]}),Object(i.jsxs)("section",{className:"flex flex-wrap mt4 mb0",children:[Object(i.jsx)(h,{content:"Repositories"}),Object(i.jsx)(b,{svg:S,title:"typetracer",body:"Typetracer's front-end built with React.js, Tachyons.css, and CSS which features:",list:y,style:{marginTop:"2rem"}}),Object(i.jsx)(b,{svg:T,title:"typetracer-api",body:"A RESTful Api that interfaces with \ntyptracer-db, and an AWS S3 Bucket. Built with Node.js, Express.js, and Knex.js which features:",list:N}),Object(i.jsx)(b,{svg:k,title:"typetracer-db-builder",body:"Typetracer-db is a simple relational database who's purpose is to persist user information, text metadata and how they relate. \nTypetracer-db-builder has the following features to build typetracer-db: ",list:w})]})]})]})});var G=function(){return Object(i.jsx)(J,{})},D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,13)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),c(e),n(e),r(e)}))};s(11);r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(G,{})}),document.getElementById("root")),D()},8:function(e,t,s){}},[[12,1,2]]]);
//# sourceMappingURL=main.6ed9fb17.chunk.js.map