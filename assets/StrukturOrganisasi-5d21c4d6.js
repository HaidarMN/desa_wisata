import{_ as b,I as h,e as m,i,m as n,s,t as r,v as d,F as u,q as g,f as p}from"./index-ddffbfb3.js";const v={data(){return{pemerintahDesa:[],badanPermusyawaratanDesa:[],lembagaKemasyarakatanDesa:[],pd:!0,bpd:!1,lkd:!1,subtitle:"Pemerintah Desa"}},methods:{chooseCategories:function(e){e==1?(this.pd=!0,this.bpd=!1,this.lkd=!1,this.subtitle="Pemerintah Desa"):e==2?(this.pd=!1,this.bpd=!0,this.lkd=!1,this.subtitle="Badan Permusyawaratan Desa"):(this.pd=!1,this.bpd=!1,this.lkd=!0,this.subtitle="Lembaga Kemasyarakatan Desa"),console.log(e)}},mounted(){h(m(p,"pemerintah_desa"),e=>{e.forEach(a=>{const c={id:a.id,name:a.data().nama,position:a.data().jabatan,img:a.data().foto};this.pemerintahDesa.push(c)})}),h(m(p,"badan_permusyarawatan_desa"),e=>{e.forEach(a=>{const c={id:a.id,name:a.data().nama,position:a.data().jabatan,img:a.data().foto};this.badanPermusyawaratanDesa.push(c)})}),h(m(p,"lembaga_kemasyarakatan_desa"),e=>{e.forEach(a=>{const c={id:a.id,name:a.data().nama,position:a.data().jabatan,img:a.data().foto};this.lembagaKemasyarakatanDesa.push(c)})})}},f={class:"organisasi"},k={class:"organisasi-title"},D=s("h2",{class:"organisasi-subtitle"},"Struktur Organisasi",-1),y={class:"organisasi-maintitle"},P=s("hr",{class:"border-t-2"},null,-1),C={class:"organisasi-panel"},w={class:"organisasi-left"},K=s("span",null,"Pemerintah Desa",-1),B=[K],E=s("span",null,"Badan Permusyawaratan Desa",-1),j=[E],x=s("span",null,"Lembaga Kemasyarakatan Desa",-1),L=[x],S={class:"organisasi-right"},F={key:0,class:"organisasi-content"},I={class:"organisasi-list"},O=["src"],q={class:"list-content-text"},z={class:"list-content-name"},N={class:"list-content-position"},V={key:1,class:"organisasi-content"},A={class:"organisasi-list"},G=["src"],H={class:"list-content-text"},J={class:"list-content-name"},M={class:"list-content-position"},Q={key:2,class:"organisasi-content"},R={class:"organisasi-list"},T=["src"],U={class:"list-content-text"},W={class:"list-content-name"},X={class:"list-content-position"};function Y(e,a,c,Z,o,_){return i(),n("div",f,[s("div",k,[D,s("h1",y,r(o.subtitle),1)]),P,s("div",C,[s("div",w,[s("div",{onClick:a[0]||(a[0]=t=>_.chooseCategories(1)),class:d([o.pd?"active":"","ol-border"])},B,2),s("div",{onClick:a[1]||(a[1]=t=>_.chooseCategories(2)),class:d([o.bpd?"active":"","ol-border"])},j,2),s("div",{onClick:a[2]||(a[2]=t=>_.chooseCategories(3)),class:d([o.lkd?"active":"","ol-border"])},L,2)]),s("div",S,[o.pd?(i(),n("div",F,[s("div",I,[(i(!0),n(u,null,g(o.pemerintahDesa,(t,l)=>(i(),n("div",{key:t,class:d([{"md:col-start-1":l==1||l==2||l==6},"list-content"])},[s("img",{src:t.img,alt:"",class:"list-content-img"},null,8,O),s("div",q,[s("span",z,r(t.name),1),s("span",N,r(t.position),1)])],2))),128))])])):o.bpd?(i(),n("div",V,[s("div",A,[(i(!0),n(u,null,g(o.badanPermusyawaratanDesa,(t,l)=>(i(),n("div",{key:t,class:d([{"md:col-start-1":l==1||l==3},"list-content"])},[s("img",{src:t.img,alt:"",class:"list-content-img"},null,8,G),s("div",H,[s("span",J,r(t.name),1),s("span",M,r(t.position),1)])],2))),128))])])):(i(),n("div",Q,[s("div",R,[(i(!0),n(u,null,g(o.lembagaKemasyarakatanDesa,(t,l)=>(i(),n("div",{key:t,class:d([{"md:col-start-1":l==10},"list-content"])},[s("img",{src:t.img,alt:"",class:"list-content-img"},null,8,T),s("div",U,[s("span",W,r(t.name),1),s("span",X,r(t.position),1)])],2))),128))])]))])])])}const ss=b(v,[["render",Y]]);export{ss as default};
