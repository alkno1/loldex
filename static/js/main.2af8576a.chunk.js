(this.webpackJsonploldex=this.webpackJsonploldex||[]).push([[0],{34:function(e,a,n){e.exports=n(46)},39:function(e,a,n){},41:function(e,a,n){},42:function(e,a,n){},46:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(13),c=n.n(o),s=(n(39),n(9)),l=(n(40),n(41),n(42),n(19)),i=n(27),m=n(10),h=function(e,a){var n=[],t=[],r=[],o=[],c=[],s=[];for(var i in e.generalChampionsInfo.data){var m,h=Object(l.a)(e.generalChampionsInfo.data[i].tags);try{for(h.s();!(m=h.n()).done;){var u=m.value;"Tank"===u&&n.push(i),"Fighter"===u&&t.push(i),"Assassin"===u&&r.push(i),"Marksman"===u&&o.push(i),"Mage"===u&&c.push(i),"Support"===u&&s.push(i)}}catch(p){h.e(p)}finally{h.f()}}return"Tank"===a?n:"Fighter"===a?t:"Assassin"===a?r:"Marksman"===a?o:"Mage"===a?c:"Support"===a?s:void 0},u={all:!0,tank:!1,fighter:!1,assassin:!1,marksman:!1,mage:!1,support:!1};var p=function(e){var a=Object(t.useState)(u),n=Object(s.a)(a,2),o=n[0],c=n[1];Object(t.useEffect)((function(){if(""===e.searchInput);else{var a=Object.assign({},u);a.all=!1,a.tank=!1,a.fighter=!1,a.assassin=!1,a.marksman=!1,a.mage=!1,a.support=!1,c(a)}}),[c,e]);var l=Object(t.useCallback)((function(a){return function(n){var t=Object.assign({},u);switch(a){case"All":t.all=!0,e.setSearchInput(""),e.setChampionListToShow(e.championNameList);break;case"Tank":t.tank=!0,t.all=!1,e.setSearchInput(""),e.setChampionListToShow(h(e,a));break;case"Fighter":t.fighter=!0,t.all=!1,e.setSearchInput(""),e.setChampionListToShow(h(e,a));break;case"Assassin":t.assassin=!0,t.all=!1,e.setSearchInput(""),e.setChampionListToShow(h(e,a));break;case"Marksman":t.marksman=!0,t.all=!1,e.setSearchInput(""),e.setChampionListToShow(h(e,a));break;case"Mage":t.mage=!0,t.all=!1,e.setSearchInput(""),e.setChampionListToShow(h(e,a));break;case"Support":t.support=!0,t.all=!1,e.setSearchInput(""),e.setChampionListToShow(h(e,a))}c(t)}}),[c,e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{onClick:l("All"),variant:o.all?"info":"secondary",className:"ChangeCursorToPointer"},"All Champions")," ",r.a.createElement(m.a,{onClick:l("Tank"),variant:o.tank?"info":"secondary",className:"ChangeCursorToPointer"},"Tank")," ",r.a.createElement(m.a,{onClick:l("Fighter"),variant:o.fighter?"info":"secondary",className:"ChangeCursorToPointer"},"Fighter")," ",r.a.createElement(m.a,{onClick:l("Assassin"),variant:o.assassin?"info":"secondary",className:"ChangeCursorToPointer"},"Assassin")," ",r.a.createElement(m.a,{onClick:l("Marksman"),variant:o.marksman?"info":"secondary",className:"ChangeCursorToPointer"},"Marksman")," ",r.a.createElement(m.a,{onClick:l("Mage"),variant:o.mage?"info":"secondary",className:"ChangeCursorToPointer"},"Mage")," ",r.a.createElement(m.a,{onClick:l("Support"),variant:o.support?"info":"secondary",className:"ChangeCursorToPointer"},"Support")," ")};var d=function(e){var a=Object(t.useState)(""),n=Object(s.a)(a,2),o=n[0],c=n[1],m=Object.keys(e.generalChampionsInfo.data);return Object(t.useEffect)((function(){var a,n=Object.keys(e.generalChampionsInfo.data),t=n.map((function(a){return e.generalChampionsInfo.data[a].name})),r=n.map((function(a){return e.generalChampionsInfo.data[a].id})),c=[],s=Object(l.a)(t);try{for(s.s();!(a=s.n()).done;){var i=a.value;""===o||(i.includes(o)||i.toLowerCase().includes(o)||i.toUpperCase().includes(o))&&c.push(i)}}catch(v){s.e(v)}finally{s.f()}for(var m=[],h=0,u=c;h<u.length;h++){var p,d=u[h],f=Object(l.a)(r);try{for(f.s();!(p=f.n()).done;){var g=p.value;d===e.generalChampionsInfo.data[g].name&&m.push(g)}}catch(v){f.e(v)}finally{f.f()}}var C=e.setChampionListToShow;C(""===o?n:m)}),[o,e.setChampionListToShow,e.generalChampionsInfo.data]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid-header headerbg"},r.a.createElement("div",{className:"grid-header-badge-group"},r.a.createElement(p,{generalChampionsInfo:e.generalChampionsInfo,championNameList:m,setChampionListToShow:e.setChampionListToShow,searchInput:o,setSearchInput:c})),r.a.createElement("div",{className:"grid-header-searchbar"},r.a.createElement(i.a,null,r.a.createElement(i.a.Group,{controlId:"searchChampionName"},r.a.createElement(i.a.Control,{autoComplete:"off",onChange:function(e){c(e.target.value)},type:"search",placeholder:"Enter champion name",className:"searchbarLength searchbarAlignment",value:o}))))))},f=n(29),g=n(22),C=n(28);var v=function(){return r.a.createElement(r.a.Fragment,null," ")};var E=function(e){var a=e.generalChampionsInfo.data[e.champion].tags.map((function(e){return r.a.createElement("span",{key:e},r.a.createElement(m.a,{variant:"secondary"},e)," ",r.a.createElement(v,null)," ")}));return r.a.createElement(r.a.Fragment,null,a)};var k=function(e){var a="";return a="default"===e.skin.name?"Normal skin":e.skin.name,r.a.createElement(r.a.Fragment,null,a)};var b=function(e){var a="";return a="default"===e.skin.name?e.lore:"",r.a.createElement(r.a.Fragment,null,a)};var I=function(e){var a=Object(t.useState)(),n=Object(s.a)(a,2),o=n[0],c=n[1];if(Object(t.useEffect)((function(){fetch("".concat("http://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion/").concat(e.champion).concat(".json")).then((function(e){return e.json()})).then((function(e){c(e)}))}),[e.champion]),void 0===o)return null;var l=o.data[e.champion].allytips.map((function(e){return r.a.createElement("li",{key:e},e)})),i=o.data[e.champion].enemytips.map((function(e){return r.a.createElement("li",{key:e},e)})),m=o.data[e.champion].skins.map((function(a){return r.a.createElement(C.a.Item,{key:a.id},r.a.createElement("img",{className:"d-block w-100",src:"".concat("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/").concat(e.champion).concat("_").concat(a.num).concat(".jpg"),alt:"First slide"}),r.a.createElement(C.a.Caption,null,r.a.createElement("h3",{className:"splashTextAlpha"},r.a.createElement(k,{skin:a})),r.a.createElement("div",{className:"lore splashTextAlpha"},r.a.createElement(b,{skin:a,lore:o.data[e.champion].lore}))))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{show:e.modalShow,onHide:e.handleClose,size:"lg"},r.a.createElement(g.a.Header,null,r.a.createElement(g.a.Title,null,r.a.createElement(C.a,null,m))),r.a.createElement(g.a.Body,null,r.a.createElement("div",{className:"grid-card-title"},r.a.createElement("div",{className:"cardChampionName"},e.generalChampionsInfo.data[e.champion].name," "),r.a.createElement("div",{className:"cardChampionTagGroup"},r.a.createElement(E,{generalChampionsInfo:e.generalChampionsInfo,champion:e.champion}))),r.a.createElement("br",null),"Ally tips:",r.a.createElement("ol",null,l),"Enemy tips:",r.a.createElement("ol",null,i))))};var S=function(e){var a="",n=e.generalChampionsInfo.data[e.champion].info.difficulty;return n<4&&(a="Easy"),n>3&&n<7&&(a="Average"),n>6&&n<9&&(a="Hard"),n>8&&(a="Severe"),r.a.createElement(r.a.Fragment,null,a)};var y=function(e){var a=Object(t.useState)(!1),n=Object(s.a)(a,2),o=n[0],c=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{className:"ChangeCursorToPointer",style:{width:"18rem"},onClick:function(){return c(!0)}},r.a.createElement(f.a.Img,{variant:"top",src:"".concat("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/").concat(e.champion).concat("_0.jpg")}),r.a.createElement(f.a.Body,null,r.a.createElement("div",{className:"grid-card-title"},r.a.createElement("div",{className:"cardChampionName"},e.generalChampionsInfo.data[e.champion].name," "),r.a.createElement("div",{className:"cardChampionTagGroup"},r.a.createElement(E,{generalChampionsInfo:e.generalChampionsInfo,champion:e.champion}))),r.a.createElement("div",{className:"cardSubTitle"},e.generalChampionsInfo.data[e.champion].title),r.a.createElement("div",null,r.a.createElement(S,{generalChampionsInfo:e.generalChampionsInfo,champion:e.champion})))),r.a.createElement(I,{modalShow:o,handleClose:function(){return c(!1)},generalChampionsInfo:e.generalChampionsInfo,champion:e.champion}))};var T=function(e){var a=e.championListToShow.map((function(a){return r.a.createElement("div",{key:a},r.a.createElement(y,{generalChampionsInfo:e.generalChampionsInfo,champion:a}))}));return r.a.createElement("div",{className:"grid-outerCardsContainer cardsArea"},a)};var j=function(){var e=Object(t.useState)(),a=Object(s.a)(e,2),n=a[0],o=a[1],c=Object(t.useState)([]),l=Object(s.a)(c,2),i=l[0],m=l[1];return Object(t.useEffect)((function(){fetch("http://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion.json").then((function(e){return e.json()})).then((function(e){o(e);var a=Object.keys(e.data);m(a)}))}),[]),void 0===n?null:r.a.createElement("div",null,r.a.createElement(d,{generalChampionsInfo:n,setChampionListToShow:m}),r.a.createElement(T,{generalChampionsInfo:n,championListToShow:i}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.2af8576a.chunk.js.map