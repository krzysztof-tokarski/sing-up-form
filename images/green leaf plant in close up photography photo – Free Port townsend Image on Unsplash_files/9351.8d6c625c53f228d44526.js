"use strict";(globalThis.webpackChunkunsplash_web=globalThis.webpackChunkunsplash_web||[]).push([[9351],{58856:(e,o,t)=>{t.d(o,{Z:()=>l});var n=t(66952),r=t(76623);const i="rfzWF",a="PTz06",l=e=>{let{type:o}=e;return n.az("div",{className:i},n.az(r.Z,{alt:"No content available",className:a,src:`/a/img/empty-states/${o}.png`}))}},70609:(e,o,t)=>{t.d(o,{m:()=>i});var n=t(43856),r=t(91361);const i=e=>n.Y3((()=>window.btoa(e)),(e=>new Error(`Encoding base64 failed: ${(0,r.e$)(e,{includeStack:!1})}`)))},76905:(e,o,t)=>{t.d(o,{sF:()=>n,SN:()=>c.SN,v8:()=>d,$E:()=>c.$E,gw:()=>p});var n={};t.r(n),t.d(n,{forEachUrl:()=>l});var r=t(3735),i=t(31461),a=t(84162);const l=e=>(0,r.zG)(i.id(),i.prop("urls"),i.modify(a.UI(e)));var s=t(60173),c=t(78260);const d=e=>(0,c.t2)(e)&&(()=>{switch(e.evaluation_status){case"in_review":case"approved":return!1;case"dmca_requested":case"dmca_pending_review":case"dmca_approved":return!0}})(),p=e=>(0,s.$K)(e.sponsorship)},44743:(e,o,t)=>{t.d(o,{ug:()=>n,aX:()=>A,hm:()=>L});var n={};t.r(n),t.d(n,{_y:()=>d,xP:()=>p,f5:()=>s,Sy:()=>f,US:()=>u,c3:()=>h,EJ:()=>c});var r=t(13904),i=t.n(r),a=t(12164),l=t(66952);const s=i()({Topic:(0,r.ofType)(),Collection:(0,r.ofType)(),Editorial:(0,r.ofType)(),Following:(0,r.ofType)(),UserProfile:(0,r.ofType)(),UserStats:(0,r.ofType)(),UserLikes:(0,r.ofType)(),RelatedPhotos:(0,r.ofType)(),VisualSearch:(0,r.ofType)(),Search:(0,r.ofType)(),Explore:(0,r.ofType)()}),c=i()({PhotoOfTheDay:(0,r.ofType)(),Photo:(0,r.ofType)(),CollectionThumbnail:(0,r.ofType)(),...s._Record}),d=l.kr(a.YP);var p,u,f,h;!function(e){e.Topic="topic-feed",e.Collection="collection-page",e.CollectionThumbnail="collection-thumbnail"}(p||(p={})),function(e){e.Editorial="editorial-feed",e.KeywordSearch="search"}(u||(u={})),function(e){e.PhotoPage="photo-page",e.PhotoOfTheDay="photo-of-the-day"}(f||(f={})),function(e){e.Following="following-feed",e.UserProfile="profile-page",e.UserStats="profile-stats",e.UserLikes="profile-liked",e.RelatedPhotos="photo-related",e.Explore="explore-feed",e.VisualSearch="visual-search"}(h||(h={}));var m,y,T=t(3735),g=t(8585),w=t(60026),k=t(70609),v=t(63093),P=t(62073),S=t(43856),U=t(31169),x=t(76905),E=t(94597),b=t(66510),C=t(99590);!function(e){e.English="en"}(m||(m={})),function(e){e[e.False=0]="False",e[e.True=1]="True"}(y||(y={}));const I={[C.KM.Relevant]:0,[C.KM.Latest]:2},F={[C.i5.Landscape]:0,[C.i5.Portrait]:1,[C.i5.Squareish]:2},R=e=>e?y.True:y.False,_=e=>F[e],z=e=>Math.max(0,e+1),B=e=>{const o=encodeURIComponent(e);return(0,T.zG)(k.m(o),S.UI((0,T.a9)(o)))},D=(0,b.FH)()(["version","appId","ad","fromApi","placement","position","deckId","keywords","language","safety","orientation","orderBy","color","timestamp"]),G=(0,T.ls)((e=>({version:2,appId:1207,ad:"ad"in e?e.ad:R(!1),fromApi:R(!1),placement:e.placement,position:"position"in e?e.position:null,deckId:"deckId"in e?e.deckId:null,keywords:"keywords"in e?e.keywords:null,language:m.English,safety:"safety"in e?e.safety:R(!1),orientation:"orientation"in e?e.orientation:null,orderBy:"orderBy"in e?e.orderBy:null,color:"color"in e?e.color:null,timestamp:null})),(e=>(0,T.zG)(D,E.UID((o=>e[o])),E.UID((e=>{if(null===e)return"";switch(typeof e){case"string":return e;case"number":return e.toString()}})),E.MJ0("|")))),L=c.match({Editorial:e=>{let{ad:o,index:t}=e;return{placement:u.Editorial,ad:R(o),position:z(t)}},Collection:e=>{let{id:o,index:t}=e;return{placement:p.Collection,deckId:o,position:z(t)}},CollectionThumbnail:e=>{let{id:o}=e;return{placement:p.CollectionThumbnail,deckId:o}},Following:e=>{let{index:o}=e;return{placement:h.Following,position:z(o)}},Photo:e=>{let{ad:o}=e;return{placement:f.PhotoPage,ad:R(o)}},PhotoOfTheDay:e=>{let{ad:o}=e;return{placement:f.PhotoOfTheDay,ad:R(o)}},RelatedPhotos:e=>{let{index:o}=e;return{placement:h.RelatedPhotos,position:z(o)}},Topic:e=>{let{id:o,index:t}=e;return{placement:p.Topic,deckId:o,position:z(t)}},UserLikes:e=>{let{index:o}=e;return{placement:h.UserLikes,position:z(o)}},UserProfile:e=>{let{index:o}=e;return{placement:h.UserProfile,position:z(o)}},UserStats:e=>{let{index:o}=e;return{placement:h.UserStats,position:z(o)}},VisualSearch:e=>{let{index:o}=e;return{placement:h.VisualSearch,position:z(o)}},Search:e=>{let{keywords:o,orientation:t,orderBy:n,safety:r,color:i,index:l,ad:s}=e;return{placement:u.KeywordSearch,ad:R(s),position:z(l),keywords:(0,T.zG)(B(o),S.fS((e=>((0,v.wj)({error:e}),null)))),color:a.WG(i),safety:R(r),orderBy:(c=n,I[c]),orientation:(0,T.zG)(t,a.WA(_))};var c},Explore:e=>{let{index:o}=e;return{placement:h.Explore,position:z(o)}}}),$=(0,T.ls)(G,k.m),K=(0,T.ls)($,S.gf),N=(0,w.RR)((e=>x.sF.forEachUrl((e=>g.mB((0,T.ls)(g.XR((e=>null!==e?U.CE(e,P.Cr):null)),g.Ar({[P.Cr]:e}))))(e)))),A=e=>(0,T.ls)(K,N(e))}}]);
//# sourceMappingURL=9351.8d6c625c53f228d44526.js.map