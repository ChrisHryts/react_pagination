(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,a,c){"use strict";c.r(a);var t=c(4),l=c.n(t),n=c(1);c(9);function s(e,a){const c=[];for(let t=e;t<=a;t+=1)c.push(t);return c}var i=c(2),r=c.n(i),o=c(0);const j=e=>{let{total:a,perPage:c,currentPage:t,onPageChange:l}=e;const n=Math.ceil(a/c),i=s(1,n).map((e=>Number(e)));return Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:r()("page-item",{disabled:1===t}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":"true",onClick:()=>{t>1&&l(t-1)},children:"\xab"})}),i.map((e=>Object(o.jsx)("li",{className:r()("page-item",{active:e===t}),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"?page=".concat(e,"&perPage=").concat(c),onClick:()=>l(e),children:e})},e))),Object(o.jsx)("li",{className:r()("page-item",{disabled:t===n}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":"false",onClick:()=>{t<n&&l(t+1)},children:"\xbb"})})]})},d=s(1,42).map((e=>"Item ".concat(e))),p=d.length,h=()=>{const[e,a]=Object(n.useState)(3),[c,t]=Object(n.useState)(1),l=(c-1)*e+1,s=l+e-1,i=d.slice(l-1,s);return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsxs)("p",{className:"lead","data-cy":"info",children:["Page ",c," (items ",l," - ",s," of ",p,")"]}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsxs)("select",{className:"form-control","data-cy":"perPageSelector",id:"perPageSelector",value:e,onChange:e=>{a(Number(e.target.value)),t(1)},children:[Object(o.jsx)("option",{value:"3",children:"3"}),Object(o.jsx)("option",{value:"5",children:"5"}),Object(o.jsx)("option",{value:"10",children:"10"}),Object(o.jsx)("option",{value:"20",children:"20"})]})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{total:p,perPage:e,currentPage:c,onPageChange:e=>t(e)}),Object(o.jsx)("ul",{children:i.map((e=>Object(o.jsx)("li",{"data-cy":"item",children:e},e)))})]})};l.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))},9:function(e,a,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.af735bd2.chunk.js.map