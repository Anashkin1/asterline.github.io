import{_ as M,A,r as d,o as i,c as f,w as s,b as r,d as a,g as E,h as L,F as P,e as _,t as n,i as p,f as D,j as F,p as B,k as H}from"./index-1482ff37.js";import{B as V}from"./BitrixService-de8aa495.js";const K={name:"OperatorView",data(){return{isAll:!1,operators:[],crmUsers:[],usersList:[],selectedOperator:null,searchUser:null}},methods:{searchCrm(l){this.searchUser&&V.searchUser(this.searchUser).then(t=>{this.usersList=t.data.result,console.log(t.data.result)})},getUsers(l){const t=l.map(o=>o.crm_user_id);t.length&&V.getUsers(t).then(o=>this.crmUsers=o.data.result)},getFullName(l){const t=this.crmUsers.find(u=>parseInt(u.ID)===l);if(!t)return;let o="";return t.LAST_NAME&&(o+=t.LAST_NAME),t.NAME&&(o+=" "+t.NAME),t.SECOND_NAME&&(o+=" "+t.SECOND_NAME),o},saveOperator(){const l=parseInt(this.selectedOperator.ID),t=this.selectedOperator.UF_PHONE_INNER;if(!t)return this.$notify({title:"Номер пуст",type:"error"}),this.selectedOperator=null,!1;if([...this.operators].find(u=>u.crm_user_id===l))return this.selectedOperator=null,this.$notify({title:"Сотрудник уже подключен",type:"warn"}),!1;A.operatorAdd(l,t).then(u=>(this.selectedOperator=null,this.getOperators(),this.$notify({title:"Добавлен новый сотрудник",type:"success"}),!0))},getOperators(){A.operatorGetList().then(l=>{let t=l.data.data;this.getUsers(t),t.forEach(o=>o.delete=!1),this.operators=t})},deleteOperators(){const l=[...this.operators].filter(o=>o.delete),t=l.map(o=>o.id);A.operatorDelete(t).then(o=>{if(o.data.data.success){const u=[...this.operators].filter(c=>l.indexOf(c)===-1);this.operators=u,this.$notify({title:"Список обновлен",type:"success"})}else this.$notify({title:"Ошибка при удалении",type:"error"})}).catch(o=>{this.$notify({title:o.response.data.message,type:"error"})})}},mounted(){this.getOperators()},watch:{isAll(l){const t=[...this.operators];t.forEach(o=>{o.delete=l}),this.operators=t}}},v=l=>(B("data-v-e0adddbb"),l=l(),H(),l),W={class:"text-left th-border-right",style:{width:"80px"}},Y=v(()=>a("th",{class:"text-center th-border-right",style:{width:"80px"}}," № ",-1)),j=v(()=>a("th",{class:"text-left th-border-right"}," ФИО ",-1)),G=v(()=>a("th",{class:"text-left"}," Внутр. телефон ",-1)),q={class:"th-border-right"},z={class:"th-border-right text-center"},J={class:"th-border-right"},Q=v(()=>a("td",{class:"th-border-right text-center"},null,-1)),X=v(()=>a("td",{class:"th-border-right text-center"},null,-1)),Z={class:"th-border-right pa-3"},$={key:0},ee={key:1};function te(l,t,o,u,c,m){const b=d("v-checkbox"),k=d("v-text-field"),y=d("v-list-item"),C=d("v-divider"),x=d("v-spacer"),h=d("v-chip"),N=d("v-row"),w=d("v-list-item-title"),S=d("v-list-item-content"),R=d("v-select"),I=d("v-btn"),T=d("v-table"),O=d("v-col"),U=d("v-container");return i(),f(U,null,{default:s(()=>[r(N,null,{default:s(()=>[r(O,{cols:"12"},{default:s(()=>[r(T,{density:"compact"},{default:s(()=>[a("thead",null,[a("tr",null,[a("th",W,[r(b,{modelValue:c.isAll,"onUpdate:modelValue":t[0]||(t[0]=e=>c.isAll=e),"hide-details":!0},null,8,["modelValue"])]),Y,j,G])]),a("tbody",null,[(i(!0),E(P,null,L(c.operators,e=>(i(),E("tr",{key:e.id},[a("td",q,[r(b,{"hide-details":!0,"model-value":e.delete,modelValue:e.delete,"onUpdate:modelValue":g=>e.delete=g},null,8,["model-value","modelValue","onUpdate:modelValue"])]),a("td",z,n(e.id),1),a("td",J,n(m.getFullName(e.crm_user_id)),1),a("td",null,n(e.phone),1)]))),128)),a("tr",null,[Q,X,a("td",Z,[r(R,{modelValue:c.selectedOperator,"onUpdate:modelValue":t[2]||(t[2]=e=>c.selectedOperator=e),items:c.usersList,attach:"",label:"Сотрудник"},{"prepend-item":s(()=>[r(y,null,{default:s(()=>[r(k,{"hide-details":!0,modelValue:c.searchUser,"onUpdate:modelValue":t[1]||(t[1]=e=>c.searchUser=e),placeholder:"Поиск по ФИО",onInput:m.searchCrm},null,8,["modelValue","onInput"])]),_:1}),r(C,{class:"mt-2"})]),selection:s(({item:e})=>[r(N,{"no-gutters":"",align:"center",justify:"space-between"},{default:s(()=>[_(n(e.value.LAST_NAME)+" "+n(e.value.NAME)+" "+n(e.value.SECOND_NAME)+" ",1),r(x),e.value.PERSONAL_CITY?(i(),f(h,{key:0,class:"ml-1 mr-1","text-color":"white",color:"blue"},{default:s(()=>[_(n(e.value.PERSONAL_CITY),1)]),_:2},1024)):p("",!0),e.value.WORK_DEPARTMENT?(i(),f(h,{key:1,class:"mr-1","text-color":"white",color:"orange"},{default:s(()=>[_(n(e.value.WORK_DEPARTMENT),1)]),_:2},1024)):p("",!0)]),_:2},1024)]),item:s(({item:e,attrs:g,on:se,active:re})=>[r(y,D(F(e),g,{default:"{ active }"}),{default:s(()=>[r(S,null,{default:s(()=>[r(w,{onClick:oe=>c.selectedOperator=e.value,ripple:""},{default:s(()=>[r(N,{"no-gutters":"",align:"center"},{default:s(()=>[a("span",null,n(e.value.LAST_NAME)+" "+n(e.value.NAME)+" "+n(e.value.SECOND_NAME),1),r(x),e.value.PERSONAL_CITY?(i(),f(h,{key:0,class:"mr-1","text-color":"white",color:"blue"},{default:s(()=>[_(n(e.value.PERSONAL_CITY),1)]),_:2},1024)):p("",!0),e.value.WORK_DEPARTMENT?(i(),f(h,{key:1,class:"mr-1","text-color":"white",color:"orange"},{default:s(()=>[_(n(e.value.WORK_DEPARTMENT),1)]),_:2},1024)):p("",!0),r(h,{"text-color":"white",color:e.value.UF_PHONE_INNER?"green":"red",small:""},{default:s(()=>[_(n(e.value.UF_PHONE_INNER?e.value.UF_PHONE_INNER:"Номер отсутствует"),1)]),_:2},1032,["color"])]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","items"])]),c.selectedOperator?(i(),E("td",$,n(c.selectedOperator.UF_PHONE_INNER),1)):p("",!0),c.selectedOperator?(i(),E("td",ee,[r(I,{onClick:m.saveOperator,"prepend-icon":"mdi-content-save-outline"},{default:s(()=>[_(" Добавить ")]),_:1},8,["onClick"])])):p("",!0)])])]),_:1})]),_:1}),r(O,{cols:"12"},{default:s(()=>[r(U,null,{default:s(()=>[r(N,null,{default:s(()=>[r(O,{cols:"10"}),r(O,{cols:"2"},{default:s(()=>[r(I,{onClick:m.deleteOperators,"prepend-icon":"mdi-delete-circle-outline"},{default:s(()=>[_(" Удалить ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const ne=M(K,[["render",te],["__scopeId","data-v-e0adddbb"]]);export{ne as default};
