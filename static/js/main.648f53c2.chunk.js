(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n.n(c),a=n(4),r=n(3),i=n(2),o=n.n(i),l=n(1),d=(n(16),n(17),n(18),n(5)),u=n.n(d),j=n(0),m=function(e){var t=e.post,n=e.selectedPost,c=e.setSelectedPost;return Object(j.jsxs)("tr",{"data-cy":"Post",children:[Object(j.jsx)("td",{"data-cy":"PostId",children:t.id}),Object(j.jsx)("td",{"data-cy":"PostTitle",children:t.title}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{type:"button","data-cy":"PostButton",className:u()("button is-link",{"is-light":(null===n||void 0===n?void 0:n.id)!==t.id}),onClick:function(){return function(e){var s=t.id!==(null===n||void 0===n?void 0:n.id);c(s?e:null)}(t)},children:(null===n||void 0===n?void 0:n.id)===t.id?"Close":"Open"})})]})},b=function(e){var t=e.posts,n=e.selectedPost,c=e.setSelectedPost;return Object(j.jsxs)("div",{"data-cy":"PostsList",children:[Object(j.jsx)("p",{className:"title",children:"Posts:"}),Object(j.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{className:"has-background-link-light",children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(m,{post:e,selectedPost:n,setSelectedPost:c},e.id)}))})]})]})},h=(n(20),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),O="https://mate.academy/students-api";function p(e){return new Promise((function(t){setTimeout(t,e)}))}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return n&&(c.body=JSON.stringify(n),c.headers={"Content-Type":"application/json; charset=UTF-8"}),p(300).then((function(){return fetch(O+e,c)})).then((function(e){return e.json()}))}var x=function(e){return f(e)},v=function(e,t){return f(e,"POST",t)},N=function(e){return f(e,"DELETE")},y=function(){var e=Object(a.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x("/comments?postId=".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(a.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v("/comments",t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(a.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N("/comments/".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e){var t=e.comment,n=e.setComments;return Object(j.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(j.jsxs)("div",{className:"message-header",children:[Object(j.jsx)("a",{href:"mailto:".concat(t.email),"data-cy":"CommentAuthor",children:t.name}),Object(j.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return e=t.id,w(e),void n((function(t){return t.filter((function(t){return t.id!==e}))}));var e},children:"delete button"})]}),Object(j.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:t.body})]})},k=n(10),C=function(e){var t=e.post,n=e.setComments,c=Object(l.useState)(""),s=Object(r.a)(c,2),i=s[0],d=s[1],m=Object(l.useState)(""),b=Object(r.a)(m,2),h=b[0],O=b[1],p=Object(l.useState)(""),f=Object(r.a)(p,2),x=f[0],v=f[1],N=Object(l.useState)(!1),y=Object(r.a)(N,2),w=y[0],S=y[1],C=Object(l.useState)(!1),E=Object(r.a)(C,2),P=E[0],T=E[1],F=Object(l.useState)(!1),I=Object(r.a)(F,2),L=I[0],B=I[1],D=Object(l.useState)(!1),M=Object(r.a)(D,2),U=M[0],A=M[1],_=function(e){return Boolean(e.trim())},J=function(){var e=Object(a.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,A(!0),e.next=4,g(t);case 4:c=e.sent,n((function(e){return[].concat(Object(k.a)(e),[c])})),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Can't add new comment");case 11:return e.prev=11,A(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){return function(e){e.preventDefault(),_(i)||S(!0),_(h)||T(!0),_(x)||B(!0),_(i)&&_(h)&&_(x)&&(J({postId:t.id,name:i,email:h,body:x}),v(""))}(e)},children:[Object(j.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(j.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(j.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:u()("input",{"is-danger":w}),value:i,onChange:function(e){d(e.currentTarget.value),S(!1)}}),Object(j.jsx)("span",{className:"icon is-small is-left",children:Object(j.jsx)("i",{className:"fas fa-user"})}),w&&Object(j.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(j.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),w&&Object(j.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(j.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(j.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(j.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:u()("input",{"is-danger":P}),value:h,onChange:function(e){O(e.currentTarget.value),T(!1)}}),Object(j.jsx)("span",{className:"icon is-small is-left",children:Object(j.jsx)("i",{className:"fas fa-envelope"})}),P&&Object(j.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(j.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),P&&Object(j.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(j.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:u()("input",{"is-danger":L}),value:x,onChange:function(e){v(e.currentTarget.value),B(!1)}})}),L&&Object(j.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(j.jsxs)("div",{className:"field is-grouped",children:[Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"submit",className:u()("button is-link",{"is-loading":U}),children:"Add"})}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){return d(""),O(""),v(""),S(!1),T(!1),void B(!1)},children:"Clear"})})]})]})},E=function(e){var t=e.post,n=Object(l.useState)([]),c=Object(r.a)(n,2),s=c[0],i=c[1],d=Object(l.useState)(!1),u=Object(r.a)(d,2),m=u[0],b=u[1],O=Object(l.useState)(!1),p=Object(r.a)(O,2),f=p[0],x=p[1],v=Object(l.useState)(!1),N=Object(r.a)(v,2),g=N[0],w=N[1],k=Object(l.useState)(!1),E=Object(r.a)(k,2),P=E[0],T=E[1],F=function(){var e=Object(a.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!1),w(!0),e.next=5,y(t.id);case 5:n=e.sent,w(!1),i(n),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),b(!0),w(!1);case 14:return e.prev=14,x(!0),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,10,14,17]])})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){F(),i([]),x(!1),T(!1)}),[t]),Object(j.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(j.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(j.jsxs)("div",{className:"block",children:[Object(j.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(t.id,": ").concat(t.title)}),Object(j.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(j.jsxs)("div",{className:"block",children:[g&&Object(j.jsx)(h,{}),!g&&m&&Object(j.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),!g&&!m&&0===s.length&&Object(j.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),s.length>0&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:"title is-4",children:"Comments:"}),s.map((function(e){return Object(j.jsx)(S,{comment:e,setComments:i},e.id)}))]}),f&&!m&&!P&&Object(j.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return T(!0)},children:"Write a comment"})]}),P&&Object(j.jsx)(C,{setComments:i,post:t})]})})},P=function(e){var t=e.users,n=e.selectedUser,c=e.onSelect,s=Object(l.useState)(!1),a=Object(r.a)(s,2),i=a[0],o=a[1];return Object(l.useEffect)((function(){if(i){var e=function(){o(!1)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}}),[i]),Object(j.jsxs)("div",{"data-cy":"UserSelector",className:u()("dropdown",{"is-active":i}),children:[Object(j.jsx)("div",{className:"dropdown-trigger",children:Object(j.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){o((function(e){return!e}))},children:[Object(j.jsx)("span",{children:n?n.name:"Choose a user"}),Object(j.jsx)("span",{className:"icon is-small",children:Object(j.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(j.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(j.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(j.jsx)("a",{href:"#user-".concat(e.id),className:u()("dropdown-item",{"is-active":(null===n||void 0===n?void 0:n.id)===e.id}),onClick:function(){c(e),o(!1)},children:e.name},e.id)}))})})]})},T=function(){var e=Object(a.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x("/users"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(a.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x("/posts?userId=".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(l.useState)([]),i=Object(r.a)(s,2),d=i[0],m=i[1],O=Object(l.useState)(null),p=Object(r.a)(O,2),f=p[0],x=p[1],v=Object(l.useState)(!1),N=Object(r.a)(v,2),y=N[0],g=N[1],w=Object(l.useState)(!1),S=Object(r.a)(w,2),k=S[0],C=S[1],I=Object(l.useState)(!1),L=Object(r.a)(I,2),B=L[0],D=L[1],M=Object(l.useState)(null),U=Object(r.a)(M,2),A=U[0],_=U[1],J=function(){var e=Object(a.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T();case 3:t=e.sent,c(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Can't load users");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){J()}),[]);var q=function(){var e=Object(a.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),C(!1),e.next=5,F(t);case 5:n=e.sent,m(n),g(!1),C(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),D(!0);case 14:return e.prev=14,g(!1),C(!0),e.finish(14);case 18:case"end":return e.stop()}}),e,null,[[0,11,14,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){f&&q(f.id)}),[f]),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"tile is-ancestor",children:[Object(j.jsx)("div",{className:"tile is-parent",children:Object(j.jsxs)("div",{className:"tile is-child box is-success",children:[Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(P,{users:n,selectedUser:f,onSelect:x})}),Object(j.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!f&&Object(j.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),y&&Object(j.jsx)(h,{}),B&&k&&Object(j.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),k&&!B&&0===d.length&&Object(j.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),d.length>0&&k&&Object(j.jsx)(b,{posts:d,selectedPost:A,setSelectedPost:_})]})]})}),Object(j.jsx)("div",{"data-cy":"Sidebar",className:u()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":A&&f&&A.userId===f.id}),children:A&&Object(j.jsx)("div",{className:"tile is-child box is-success ",children:Object(j.jsx)(E,{post:A})})})]})})})};s.a.render(Object(j.jsx)(I,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.648f53c2.chunk.js.map