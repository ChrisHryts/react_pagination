(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,a,c){"use strict";c.r(a);var t=c(4),l=c.n(t),s=c(1);c(9);var n=c(3),i=c.n(n),r=c(0);const o=e=>{let{currentPage:a,onPageChange:c,total:t,perPage:l}=e;const s=Math.ceil(t/l),n=[];for(let i=1;i<=s;i+=1)n.push(i);return Object(r.jsxs)("ul",{className:"pagination",children:[Object(r.jsx)("li",{className:i()("page-item",{disabled:1===a}),children:Object(r.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":"true",onClick:()=>{1!==a&&c(a-1)},children:"\xab"})}),n.map((e=>Object(r.jsx)("li",{className:i()("page-item",{active:e===a}),children:Object(r.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#1",onClick:()=>c(e),children:e})},e))),Object(r.jsx)("li",{className:"page-item",children:Object(r.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":"false",onClick:()=>{a<s&&c(a+1)},children:"\xbb"})})]})},j=function(e,a){const c=[];for(let t=e;t<=a;t+=1)c.push(t);return c}(1,42).map((e=>"Item ".concat(e))),d=j.length,h=()=>{const[e,a]=Object(s.useState)(3),[c,t]=Object(s.useState)(1),l=(c-1)*e+1,n=l+e-1,i=j.slice(l-1,n);return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{children:"Items with Pagination"}),Object(r.jsxs)("p",{className:"lead","data-cy":"info",children:["Page ",c," (items ",l," - ",n," of ",d,")"]}),Object(r.jsxs)("div",{className:"form-group row",children:[Object(r.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(r.jsxs)("select",{className:"form-control","data-cy":"perPageSelector",id:"perPageSelector",value:e,onChange:e=>a(Number(e.target.value)),children:[Object(r.jsx)("option",{value:"3",children:"3"}),Object(r.jsx)("option",{value:"5",children:"5"}),Object(r.jsx)("option",{value:"10",children:"10"}),Object(r.jsx)("option",{value:"20",children:"20"})]})}),Object(r.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(r.jsx)(o,{total:d,perPage:e,currentPage:c,onPageChange:e=>t(e)}),Object(r.jsx)("ul",{children:i.map((e=>Object(r.jsx)("li",{"data-cy":"item",children:e},e)))})]})};l.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))},9:function(e,a,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.8a76d2e3.chunk.js.map