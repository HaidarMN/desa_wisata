import{_ as m,R as h,u,x as g,e as p,I as f,g as x,i as c,m as r,s as a,F as v,q as k,f as A,t as i,l as D,k as N,y as E}from"./index-ddffbfb3.js";const B={data(){return{events:[]}},methods:{date:function(s){const e=new Date(s*1e3);return this.$moment.formatDate(e)}},mounted(){const s=h(p(A,"event"),g("tanggal_acara","asc"),u(3));f(s,e=>{e.forEach(t=>{const o={id:t.id,name:t.data().nama_acara,img:t.data().gambar_acara,tgl:t.data().tanggal_acara};this.events.push(o)})})}},V={class:"acara"},$=a("h1",{class:"acara-title"},"Acara",-1),b={class:"acara-list"},q={class:"acara-content"},w=["src"],y={class:"acara-text"},C={class:"text-title"},F={class:"text-date"};function I(s,e,t,o,l,_){const d=x("router-link");return c(),r("div",V,[$,a("div",b,[(c(!0),r(v,null,k(l.events,n=>(c(),r("div",q,[a("img",{src:n.img,alt:"",class:"acara-img"},null,8,w),a("div",y,[a("h2",C,i(n.name),1),a("span",F,"Dimulai tanggal "+i(_.date(n.tgl.seconds)),1),D(d,{to:{name:"Acara Detail",params:{acara:n.name}},class:"text-more"},{default:N(()=>[E("SELENGKAPNYA")]),_:2},1032,["to"])])]))),256))])])}const R=m(B,[["render",I]]);export{R as default};