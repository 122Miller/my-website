(this.webpackJsonppersonalportfolio=this.webpackJsonppersonalportfolio||[]).push([[0],{16:function(e,s,t){},19:function(e,s,t){},20:function(e,s,t){"use strict";t.r(s);var a=t(0),c=t(1),n=t(9),i=t.n(n),r=(t(16),t(2)),o=t(3),l=t(5),j=t(4),d=t(7),h=t(10),b=t.n(h),m=(t(19),function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s=this.props.data.occupation,t=this.props.data.description,c=this.props.data.address.city,n=this.props.data.social.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.url,children:Object(a.jsx)("i",{className:e.className})})},e.name)}));return Object(a.jsxs)("header",{id:"home",children:[Object(a.jsxs)("nav",{id:"nav-wrap",children:[Object(a.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(a.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(a.jsxs)("ul",{id:"nav",className:"nav",children:[Object(a.jsx)("li",{className:"current",children:Object(a.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})})]})]}),Object(a.jsx)("div",{className:"row banner",children:Object(a.jsxs)("div",{className:"banner-text",children:[Object(a.jsxs)("h1",{className:"responsive-headline",children:["I'm ",e,"."]}),Object(a.jsxs)("h3",{children:["I'm a ",Object(a.jsxs)("span",{children:[" ",c]})," based ",Object(a.jsx)("span",{children:s}),". ",t,"."]}),Object(a.jsx)("hr",{}),Object(a.jsx)("ul",{className:"social",children:n})]})}),Object(a.jsx)("p",{className:"scrolldown",children:Object(a.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(a.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(c.Component)),p=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.url,children:Object(a.jsx)("i",{className:e.className})})},e.name)}));return Object(a.jsx)("footer",{children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"twelve columns",children:[Object(a.jsx)("ul",{className:"social-links",children:e}),Object(a.jsx)("ul",{className:"copyright",children:Object(a.jsxs)("li",{children:["Design by ",Object(a.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})})]}),Object(a.jsx)("div",{id:"go-top",children:Object(a.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(a.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(c.Component),u=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s="images/"+this.props.data.image,t=this.props.data.bio,c=this.props.data.address.city,n=this.props.data.address.state,i=this.props.data.address.zip,r=this.props.data.phone,o=this.props.data.email,l=this.props.data.resumedownload,j=this.props.data.transcriptdownload;return Object(a.jsx)("section",{id:"about",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"three columns",children:Object(a.jsx)("img",{className:"profile-pic",src:s,alt:"Christian Miller Profile Pic"})}),Object(a.jsxs)("div",{className:"nine columns main-col",children:[Object(a.jsx)("h2",{children:"About Me"}),Object(a.jsx)("p",{children:t}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"columns contact-details",children:[Object(a.jsx)("h2",{children:"Contact Details"}),Object(a.jsxs)("p",{className:"address",children:[Object(a.jsx)("span",{children:e}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{children:[c," ",n,", ",i]}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:r}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:o})]})]}),Object(a.jsxs)("div",{className:"columns download",children:[Object(a.jsx)("p",{children:Object(a.jsxs)("a",{href:l,className:"button",children:[Object(a.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})}),Object(a.jsx)("p",{children:Object(a.jsxs)("a",{href:j,className:"button",children:[Object(a.jsx)("i",{className:"fa fa-download"}),"Download Transcript"]})})]})]})]})]})})}}]),t}(c.Component),O=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:e.school}),Object(a.jsxs)("p",{className:"info",children:[e.degree," ",Object(a.jsx)("span",{children:"\u2022"}),Object(a.jsx)("em",{className:"date",children:e.graduated}),Object(a.jsx)("span",{children:"\u2022"}),Object(a.jsx)("em",{className:"date",children:e.gpa})]}),Object(a.jsx)("p",{children:e.description})]},e.school)})),t=this.props.data.work.map((function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:e.company}),Object(a.jsxs)("p",{className:"info",children:[e.title,Object(a.jsx)("span",{children:"\u2022"})," ",Object(a.jsx)("em",{className:"date",children:e.years})]}),Object(a.jsx)("p",{children:e.description})]},e.company)})),c=this.props.data.skills.map((function(e){var s="bar-expand "+e.name.toLowerCase();return Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{style:{width:e.level},className:s}),Object(a.jsx)("em",{children:e.name})]},e.name)}));return Object(a.jsxs)("section",{id:"resume",children:[Object(a.jsxs)("div",{className:"row education",children:[Object(a.jsx)("div",{className:"three columns header-col",children:Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:"Education"})})}),Object(a.jsx)("div",{className:"nine columns main-col",children:Object(a.jsx)("div",{className:"row item",children:Object(a.jsx)("div",{className:"twelve columns",children:s})})})]}),Object(a.jsxs)("div",{className:"row work",children:[Object(a.jsx)("div",{className:"three columns header-col",children:Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:"Work"})})}),Object(a.jsx)("div",{className:"nine columns main-col",children:t})]}),Object(a.jsxs)("div",{className:"row skill",children:[Object(a.jsx)("div",{className:"three columns header-col",children:Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:"Skills"})})}),Object(a.jsxs)("div",{className:"nine columns main-col",children:[Object(a.jsx)("p",{children:e}),Object(a.jsx)("div",{className:"bars",children:Object(a.jsx)("ul",{className:"skills",children:c})})]})]})]})}}]),t}(c.Component),x=(c.Component,c.Component,c.Component,function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var a;return Object(r.a)(this,t),(a=s.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),a}return Object(o.a)(t,[{key:"getResumeData",value:function(){b.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(m,{data:this.state.resumeData.main}),Object(a.jsx)(u,{data:this.state.resumeData.main}),Object(a.jsx)(O,{data:this.state.resumeData.resume}),Object(a.jsx)(p,{data:this.state.resumeData.main})]})}}]),t}(c.Component)),f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var s=e.installing;s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(a.jsx)(x,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/my-website",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/my-website","/service-worker.js");f?function(e){fetch(e).then((function(s){404===s.status||-1===s.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):v(e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.75cc9a9f.chunk.js.map