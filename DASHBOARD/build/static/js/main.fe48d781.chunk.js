(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{187:function(e,n,t){},188:function(e,n,t){},219:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t.n(c),a=t(62),r=t.n(a),o=(t(187),t(188),t(53)),s=t(20),d=t(49),l=t.n(d),u=t(74),h=t(7),j=t(17),b=t(231),p=t(253),g=t(232),x=t(5);function O(e){var n=e.guilds;function t(e){var n;if(e.icon)return n="https://cdn.discordapp.com/icons/"+e.id+"/"+e.icon+".png",Object(x.jsxs)("div",{children:[Object(x.jsx)(b.a,{as:"button",borderRadius:"md",bg:"white",p:"7",w:"70%",px:4,h:8,children:Object(x.jsx)(p.a,{borderRadius:"full",boxSize:"34px",objectFit:"cover",src:n})}),Object(x.jsxs)("li",{children:[" ",e.name," "]}),Object(x.jsx)(o.c,{to:"/dashboard/".concat(e.id),children:" View Dashboard"})]});if(!e.icon){var t;e.name.split(" ").filter((function(e){t?t+=e.charAt(0):t=e.charAt(0)}));return Object(x.jsxs)("div",{children:[Object(x.jsx)(b.a,{as:"button",borderRadius:"md",bg:"white",p:"7",w:"70%",px:4,h:8,children:Object(x.jsx)(b.b,{size:"34px",bg:"#23272A",color:"white",children:Object(x.jsx)("div",{children:t})})}),Object(x.jsxs)("li",{children:[" ",e.name," "]}),Object(x.jsx)(o.c,{to:"/dashboard/".concat(e.id),children:" View Dashboard"})]})}}function c(e){var n;if(e.icon)return n="https://cdn.discordapp.com/icons/"+e.id+"/"+e.icon+".png",Object(x.jsxs)("div",{children:[Object(x.jsx)(b.a,{as:"button",borderRadius:"md",bg:"white",p:"7",w:"70%",px:4,h:8,children:Object(x.jsx)(p.a,{borderRadius:"full",boxSize:"34px",objectFit:"cover",src:n})}),Object(x.jsxs)("li",{children:[" ",e.name," "]}),Object(x.jsxs)(g.a,{href:"https://discord.com/oauth2/authorize?scope=bot+applications.commands&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fmenu&permissions=2147483647&client_id=818892469130362890&guild_id=".concat(e.id),children:[" ","Invite Bot"]})]});if(!e.icon){var t;e.name.split(" ").filter((function(e){t?t+=e.charAt(0):t=e.charAt(0)}));return Object(x.jsxs)("div",{children:[Object(x.jsx)(b.a,{as:"button",borderRadius:"md",bg:"white",p:"7",w:"70%",px:4,h:8,children:Object(x.jsx)(b.b,{size:"34px",bg:"#23272A",color:"white",children:Object(x.jsx)("div",{children:t})})}),Object(x.jsxs)("li",{children:[" ",e.name," "]}),Object(x.jsxs)(g.a,{href:"https://discord.com/oauth2/authorize?scope=bot+applications.commands&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fmenu&permissions=2147483647&client_id=818892469130362890&guild_id=".concat(e.id),children:[" ","Invite Bot"]})]})}}return Object(x.jsxs)("div",{children:[n.included.map((function(e){return Object(x.jsx)("div",{children:t(e)})})),n.excluded.map((function(e){return Object(x.jsx)("div",{children:c(e)})}))]})}var f=t(131),m=t(247),v=t(233),C=t(250),w=t(251),y=t(240);function I(e){var n=e.config,t=e.updatePrefix,c=e.updateChannelsWelcome,i=Object(m.a)();return console.log(n),Object(x.jsxs)("div",{children:[Object(x.jsx)(f.a,{initialValues:{prefix:n.prefix},onSubmit:function(e){return t(e).then((function(){console.log(e),e.prefix?i({position:"bottom-right",title:"Data saved",description:"We changed your prefix to: ".concat(e.prefix),status:"success",duration:4e3,isClosable:!0}):i({position:"bottom-right",title:"Whats wrong with u",description:"I think ".concat(n.getGuildConfig.prefix," is the already prefix ._."),status:"success",duration:4e3,isClosable:!0})}))},children:function(e){return Object(x.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(x.jsx)(v.a,{type:"text",name:"prefix",onChange:e.handleChange,defaultValue:n.getGuildConfig.prefix}),Object(x.jsx)(C.a,{label:"You need to update guild prefix?",children:Object(x.jsxs)(w.a,{colorScheme:"teal",variant:"ghost",type:"submit",children:[" ","Update prefix"," "]})})]})}}),Object(x.jsx)(f.a,{initialValues:{LogsChannel:n.getGuildConfig.welcomechannelid},onSubmit:function(){var e=Object(u.a)(l.a.mark((function e(n){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.LogsChannel.split(","),c(t[0]).then((function(e){console.log("find2"),console.log(n),i({position:"bottom-right",title:"Data saved",description:"We changed your welcome channel to ".concat(t[1]),status:"success",duration:4e3,isClosable:!0})}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:function(e){return Object(x.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(x.jsx)(y.a,{name:"LogsChannel",onChange:e.handleChange,children:n.getChannels.map((function(e){if("4"!==e.type&&"2"!==e.type)return Object(x.jsx)("option",{value:[e.id,e.name],selected:e.id===n.getGuildConfig.welcomechannelid,children:e.name})}))}),Object(x.jsx)(C.a,{label:"You need to update guild prefix?",children:Object(x.jsxs)(w.a,{colorScheme:"teal",variant:"ghost",type:"submit",children:[" ","Update Welcome Channel"," "]})})]})}})]})}var S=t(248),q=t(254),k=t(55),$=t.n(k);function A(e){var n=e.user,t=i.a.useState(!1),c=Object(h.a)(t,2),a=c[0],r=c[1];if(n){if(console.log(n),n.getUser&&!a){var o="https://cdn.discordapp.com/avatars/"+n.getUser.discordId+"/"+n.getUser.avatar+".png";return Object(x.jsx)("div",{children:Object(x.jsxs)(S.a,{children:[Object(x.jsx)(S.b,{px:4,py:2,transition:"all 0.2s",borderRadius:"md",borderWidth:"1px",_expanded:{bg:"white"},_focus:{boxShadow:"outline"},children:Object(x.jsxs)(q.a,{direction:"row",isinline:"true",children:[Object(x.jsx)(p.a,{borderRadius:"full",boxSize:"26px",objectFit:"cover",src:o}),Object(x.jsx)("h1",{children:n.getUser.discordTag})]})}),Object(x.jsxs)(S.d,{children:[Object(x.jsx)(S.c,{children:Object(x.jsx)(w.a,{onClick:function(){window.location.href="http://localhost:5000/menu"},children:"Go to Dashboard"})}),Object(x.jsx)(S.c,{children:Object(x.jsx)(w.a,{onClick:function(){$.a.get("http://localhost:3001/api/auth/logout",{withCredentials:!0}),localStorage.clear(),r(!0)},background:"white",colorScheme:"gray",textColor:"red",children:"Log out"})})]})]})})}if(!n.getUser||a)return Object(x.jsx)(w.a,{onClick:function(){window.location.href="http://localhost:3001/api/auth/discord"},variantcolor:"orange",children:"Login"})}return Object(x.jsx)("h1",{children:"loading"})}var L,F,P,U,_,G,M,D,W=t(56),z=Object(j.gql)(L||(L=Object(W.a)(["\n  query getMenuPageQuery {\n    getUser {\n      discordId\n      discordTag\n      avatar\n    }\n    getMutualGuilds {\n      included {\n        name\n        icon\n        id\n      }\n      excluded {\n        name\n        icon\n        id\n      }\n    }\n  }\n"]))),R=Object(j.gql)(F||(F=Object(W.a)(["\n  query getMenuPageQuery {\n    getUser {\n      discordId\n      discordTag\n      avatar\n    }\n  }\n"]))),Q=(Object(j.gql)(P||(P=Object(W.a)(["\n  query statsQuery {\n    getStats {\n      id\n      playingTime\n      weeklylbcd\n      commands\n      cleverbotMessages\n      logs\n      guildCount\n    }\n  }\n"]))),Object(j.gql)(U||(U=Object(W.a)(["\n  query getDashboardPageData($guildId: String!) {\n    getUser {\n      discordId\n      discordTag\n      avatar\n    }\n    getGuildConfig(guildId: $guildId) {\n      prefix\n      welcomechannelid\n      id\n    }\n    getChannels(guildId: $guildId) {\n      name\n      type\n      id\n    }\n  }\n"])))),T=(Object(j.gql)(_||(_=Object(W.a)(["\n  query getChannels($channelId: String!) {\n    getChannels(channelId: $channelId) {\n      name\n      id\n    }\n  }\n"]))),Object(j.gql)(G||(G=Object(W.a)(["\n  query getChannels($channelId: String!) {\n    getChannels(channelId: $channelId) {\n      name\n      id\n    }\n  }\n"]))),Object(j.gql)(M||(M=Object(W.a)(["\n  mutation UpdateGuildPrefix($guildId: String!, $prefix: String!) {\n    updateGuildPrefix(guildId: $guildId, prefix: $prefix) {\n      prefix\n      id\n    }\n  }\n"])))),V=Object(j.gql)(D||(D=Object(W.a)(["\n  mutation updateWelcomeChannel($channelId: String!, $guildId: String!) {\n    updateWelcomeChannel(guildId: $guildId, channelId: $channelId) {\n      id\n    }\n  }\n"])));function B(e){e.history;var n=e.match,t=Object(j.useQuery)(Q,{variables:{guildId:n.params.id}}),c=t.loading,i=t.error,a=t.data,r=Object(j.useMutation)(T),o=Object(h.a)(r,1)[0],s=Object(j.useMutation)(V),d=Object(h.a)(s,1)[0],b=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.prefix){e.next=5;break}return e.next=3,o({variables:{guildId:n.params.id,prefix:t.prefix}});case 3:return e.sent,e.abrupt("return",Object(x.jsx)("h1",{children:"A"}));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.LogsChannel){e.next=5;break}return e.next=3,d({variables:{channelId:t.LogsChannel,guildId:n.params.id}});case 3:return e.sent,e.abrupt("return",Object(x.jsx)("h1",{children:"A"}));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();if(i&&console.log(i),!c){var g=a,O=a;return Object(x.jsx)("div",{children:Object(x.jsx)(I,{user:O,config:g,updatePrefix:b,updateChannelsWelcome:p})})}return Object(x.jsx)("h1",{children:"Loading..."})}function Y(e){var n=Object(j.useQuery)(R),t=n.loading,c=n.error,i=n.data;if(c&&console.log(c),!t){var a=i;return console.log(i),Object(x.jsx)("div",{children:Object(x.jsx)(A,{user:a})})}return Object(x.jsx)("div",{children:"Loading..."})}var E=t(172);function H(e){Object(E.a)(e);var n=Object(j.useQuery)(z),t=n.loading,c=n.error,i=n.data;if(c&&console.log(c),!t&&!c){console.log(i);var a=i.getMutualGuilds;return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Menu Page"}),Object(x.jsx)(O,{guilds:a})]})}return Object(x.jsx)("h1",{children:"Loading...."})}function J(e){var n=e.match;return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Dashboard Page"}),Object(x.jsx)(o.c,{to:"".concat(n.params.id,"/config"),children:" go to config "})]})}var K=t(243),N=t(249);function X(e){return $.a.put("http://localhost:3001/api/music/finduser",{data:e},{withCredentials:!0}).catch((function(e){return e}))}var Z=t(175);function ee(e){var n=i.a.useState(!0),t=Object(h.a)(n,2),c=t[0],a=t[1],r=i.a.useState({}),o=Object(h.a)(r,2),s=o[0],d=o[1],p=i.a.useState({}),g=Object(h.a)(p,2),O=(g[0],g[1]),f=Object(j.useQuery)(R&&z),m=f.loading,v=f.error,C=f.data;if(v&&console.log(v),!m){var w=C;if(c)(function(){var e=Object(u.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X(n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}})()(w).then((function(e){var n;e.response?c&&(O({error:e.response}),a(!1)):c&&(n=e.data[0].guild,$.a.put("http://localhost:3001/api/music/queue",{guildId:n},{withCredentials:!0}).catch((function(e){return e}))).then((function(n){d({data:e,queue:n}),a(!1)}))}));if(s!=={}&&!c)return 0===s.data.data.length?Object(x.jsx)("div",{children:Object(x.jsx)(K.a,{children:"You are not listening any music, bitch."})}):(console.log(s),Object(x.jsxs)("div",{children:[Object(x.jsx)(A,{user:w}),Object(x.jsxs)(N.a,{"aria-label":"slider-ex-4",defaultValue:s.data.data.position,onChangeEnd:function(e){return console.log(e)},children:[Object(x.jsx)(N.d,{bg:"red.100",children:Object(x.jsx)(N.b,{bg:"tomato"})}),Object(x.jsx)(N.c,{boxSize:6,children:Object(x.jsx)(b.a,{color:"tomato",as:Z.a})})]}),Object(x.jsx)("img",{src:s.queue.data.thumbnail}),Object(x.jsxs)(K.a,{children:["Current Playing: ",s.queue.data.title]}),Object(x.jsx)(K.a,{children:"Hey! I found you "})]}))}return Object(x.jsx)("div",{children:"Loading..."})}var ne=function(){return Object(x.jsx)(o.a,{children:Object(x.jsxs)(s.c,{children:[Object(x.jsx)(s.a,{path:"/",exact:!0,component:Y}),Object(x.jsx)(s.a,{path:"/menu",exact:!0,component:H}),Object(x.jsx)(s.a,{path:"/dashboard/:id/config",exact:!0,component:B}),Object(x.jsx)(s.a,{path:"/dashboard/:id",exact:!0,component:J}),Object(x.jsx)(s.a,{path:"/music",exact:!0,component:ee})]})})},te=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,255)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),c(e),i(e),a(e),r(e)}))},ce=t(244),ie=t(222),ae=Object(j.createHttpLink)({uri:"http://localhost:3001/graphql",credentials:"include"}),re=new j.ApolloClient({link:ae,cache:new j.InMemoryCache});r.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsxs)(ce.a,{children:[Object(x.jsx)(ie.a,{}),Object(x.jsx)(o.a,{children:Object(x.jsx)(j.ApolloProvider,{client:re,children:Object(x.jsx)(o.b,{children:Object(x.jsx)(ne,{})})})})]})}),document.getElementById("root")),te()}},[[219,1,2]]]);
//# sourceMappingURL=main.fe48d781.chunk.js.map