(this["webpackJsonpreact-spotify-clone"]=this["webpackJsonpreact-spotify-clone"]||[]).push([[0],{49:function(e,t,a){e.exports=a(69)},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(16),r=a.n(c),o=(a(54),a(10)),i=(a(55),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("29cba9ed25824cab8c7ea1083f7a0964","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true")),s=a(26),m=a.n(s),u=(a(56),function(){return l.a.createElement("div",{className:"login"},l.a.createElement("h1",null,"Login"),l.a.createElement("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),l.a.createElement("a",{href:i},"LOGIN WITH SPOTIFY"))}),E=(a(57),a(58),a(59),function(e){var t=e.title,a=e.Icon;return l.a.createElement("div",{className:"sidebarOption"},a&&l.a.createElement(a,{className:"sidebarOption__icon"}),a?l.a.createElement("h4",null,t):l.a.createElement("p",null,t))}),p=a(27),d=a.n(p),f=a(19),y=a.n(f),_=a(32),v=a.n(_),g=Object(n.createContext)(),h=function(e){var t=e.reducer,a=e.initialState,c=e.children;return l.a.createElement(g.Provider,{value:Object(n.useReducer)(t,a)},c)},b=function(){return Object(n.useContext)(g)},N=function(){var e,t=b(),a=Object(o.a)(t,1)[0].playlists;return l.a.createElement("div",{className:"sidebar"},l.a.createElement("img",{className:"sidebar__logo",src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),l.a.createElement(E,{title:"Home",Icon:d.a}),l.a.createElement(E,{title:"Search",Icon:y.a}),l.a.createElement(E,{title:"Your Library",Icon:v.a}),l.a.createElement("br",null),l.a.createElement("strong",{className:"sidebar__title"},"PLAYLISTS"),l.a.createElement("hr",null),null===a||void 0===a||null===(e=a.items)||void 0===e?void 0:e.map((function(e){return l.a.createElement(E,{title:e.name})})))},S=(a(65),a(66),a(83)),T=function(){var e,t=b(),a=Object(o.a)(t,1)[0].user;return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header__left"},l.a.createElement(y.a,null),l.a.createElement("input",{placeholder:"Search for Artists, Songs, or Podcasts",type:"text"})),l.a.createElement("div",{className:"header__right"},l.a.createElement(S.a,{src:null===a||void 0===a||null===(e=a.images[0])||void 0===e?void 0:e.url,alt:null===a||void 0===a?void 0:a.display_name}),l.a.createElement("h4",null,null===a||void 0===a?void 0:a.display_name)))},k=(a(67),a(33)),I=a.n(k),O=function(e){var t=e.track,a=e.playSong;return l.a.createElement("div",{className:"songRow",onClick:function(){return a(t.id)}},l.a.createElement("img",{className:"songRow__album",src:t.album.images[0].url,alt:""}),l.a.createElement("div",{className:"songRow__info"},l.a.createElement("h1",null,t.name),l.a.createElement("div",{className:"songRow__songDetails"},l.a.createElement("p",null,t.explicit&&l.a.createElement(I.a,{fontSize:"small"}),t.artists.map((function(e){return e.name})).join(", ")," \u2022"," ",t.album.name),l.a.createElement("p",null,function(e){var t=Math.floor(e/6e4),a=(e%6e4/1e3).toFixed(0);return t+":"+(a<10?"0":"")+a}(t.duration_ms)))))},j=a(34),w=a.n(j),P=a(35),L=a.n(P),M=a(36),Y=a.n(M),C=function(e){var t=e.spotify,a=b(),n=Object(o.a)(a,2),c=n[0].discover_weekly,r=n[1],i=function(e){t.play({uris:["spotify:track:".concat(e)]}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){r({type:"SET_ITEM",item:e.item}),r({type:"SET_PLAYING",playing:!0})}))})).catch((function(e){403===e.status&&alert("You do not have PREMIUM.")}))};return l.a.createElement("div",{className:"body"},l.a.createElement(T,null),l.a.createElement("div",{className:"body__info"},l.a.createElement("img",{src:null===c||void 0===c?void 0:c.images[0].url,alt:""}),l.a.createElement("div",{className:"body__infoText"},l.a.createElement("strong",null,"PLAYLIST"),l.a.createElement("h2",null,"Discover Weekly"),l.a.createElement("p",null,null===c||void 0===c?void 0:c.description))),l.a.createElement("div",{className:"body__songs"},l.a.createElement("div",{className:"body__icons"},l.a.createElement(w.a,{className:"body__shuffle",onClick:function(){t.play({context_uri:"spotify:playlist:37i9dQZEVXcJZyENOWUFo7"}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){r({type:"SET_ITEM",item:e.item}),r({type:"SET_PLAYING",playing:!0})}))})).catch((function(e){403===e.status&&alert("You do not have PREMIUM.")}))}}),l.a.createElement(L.a,{fontSize:"large"}),l.a.createElement(Y.a,null)),null===c||void 0===c?void 0:c.tracks.items.map((function(e){return l.a.createElement(O,{playSong:i,track:e.track})}))))},A=(a(68),a(40)),x=a.n(A),R=a(39),G=a.n(R),W=a(38),U=a.n(W),z=a(41),V=a.n(z),D=a(37),J=a.n(D),K=a(42),F=a.n(K),Q=a(43),Z=a.n(Q),B=a(44),H=a.n(B),X=a(81),$=a(82),q=function(e){var t=e.spotify,a=b(),c=Object(o.a)(a,2),r=c[0],i=r.item,s=r.playing,m=c[1];Object(n.useEffect)((function(){t.getMyCurrentPlaybackState().then((function(e){m({type:"SET_PLAYING",playing:e.is_playing}),m({type:"SET_ITEM",item:e.item})}))}),[t]);var u=function(){s?(t.pause(),m({type:"SET_PLAYING",playing:!1})):(t.play(),m({type:"SET_PLAYING",playing:!0}))};return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer__left"},l.a.createElement("img",{className:"footer__albumLogo",src:null===i||void 0===i?void 0:i.album.images[0].urls,alt:""}),i?l.a.createElement("div",{className:"footer__songInfo"},l.a.createElement("h4",null,i.name),l.a.createElement("p",null,i.artists.map((function(e){return e.name})).join(", "))):l.a.createElement("div",{className:"footer__songInfo"},l.a.createElement("h4",null,"No song is playing"),l.a.createElement("p",null,"..."))),l.a.createElement("div",{className:"footer__center"},l.a.createElement(J.a,{className:"footer__green"}),l.a.createElement(U.a,{className:"footer__icon",onClick:function(){t.skipToPrevious(),t.getMyCurrentPlayingTrack().then((function(e){m({type:"SET_ITEM",item:e.item}),m({type:"SET_PLAYING",playing:!0})}))}}),s?l.a.createElement(G.a,{onClick:u,fontSize:"large",className:"footer__icon"}):l.a.createElement(x.a,{onClick:u,fontSize:"large",className:"footer__icon"}),l.a.createElement(V.a,{className:"footer__icon",onClick:function(){t.skipToNext(),t.getMyCurrentPlayingTrack().then((function(e){m({type:"SET_ITEM",item:e.item}),m({type:"SET_PLAYING",playing:!0})}))}}),l.a.createElement(F.a,{className:"footer__green"})),l.a.createElement("div",{className:"footer__right"},l.a.createElement(X.a,{container:!0,spacing:2},l.a.createElement(X.a,{item:!0},l.a.createElement(Z.a,null)),l.a.createElement(X.a,{item:!0},l.a.createElement(H.a,null)),l.a.createElement(X.a,{item:!0,xs:!0},l.a.createElement($.a,{"aria-labelledby":"continuous-slider"})))))},ee=function(e){var t=e.spotify;return l.a.createElement("div",{className:"player"},l.a.createElement("div",{className:"player__body"},l.a.createElement(N,null),l.a.createElement(C,{spotify:t})),l.a.createElement(q,{spotify:t}))},te=new m.a;var ae=function(){var e=b(),t=Object(o.a)(e,2),a=t[0].token,c=t[1];return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var a=t.split("=");return e[a[0]]=decodeURIComponent(a[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(c({type:"SET_TOKEN",token:t}),te.setAccessToken(t),te.getMe().then((function(e){c({type:"SET_USER",user:e})})),te.getUserPlaylists().then((function(e){c({type:"SET_PLAYLISTS",playlists:e})})),te.getPlaylist("37i9dQZEVXcJWSQE72aVEI").then((function(e){c({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})))}),[]),l.a.createElement("div",{className:"app"},a?l.a.createElement(ee,{spotify:te}):l.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=a(6);var le=function(e,t){switch(t.type){case"SET_USER":return Object(ne.a)(Object(ne.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(ne.a)(Object(ne.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object(ne.a)(Object(ne.a)({},e),{},{playlists:t.playlists});case"SET_DISCOVER_WEEKLY":return Object(ne.a)(Object(ne.a)({},e),{},{discover_weekly:t.discover_weekly});case"SET_ITEM":return Object(ne.a)(Object(ne.a)({},e),{},{item:t.item});case"SET_PLAYING":return Object(ne.a)(Object(ne.a)({},e),{},{playing:t.playing});default:return e}};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,{initialState:{user:null,playlists:[],playing:!1,item:null,token:null,discover_weekly:null},reducer:le},l.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.fc77acca.chunk.js.map