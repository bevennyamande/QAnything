import{u as E}from"./icon-loading-BT-1esjm.js";import{r as S,u as _}from"./utils-CXxq_1WL.js";import{z as Q,x as K,r,w as v}from"./index-uS7D60Vj.js";const{currentId:R,knowledgeBaseList:y}=Q(E()),j=K("useQuickStart",()=>{const i=r([]),f=t=>{i.value=t},I=r(!1);let h=r(i.value.length);v(()=>i.value.length,()=>{h.value=i.value.length});const e=r([]),c=t=>{e.value=t},L=t=>{var a;const s=(((a=e.value.at(-1))==null?void 0:a.historyId)||0)+1,o={historyId:s,title:t},u=[...e.value,o];return c(u),s},g=t=>{const s=e.value.filter(o=>o.historyId!==t);c(s)},w=(t,s,o)=>{const u=e.value.map(a=>(a.historyId===s&&(a.title=t,a.kbId=o),a));c(u)},H=t=>e.value.find(s=>s.historyId===t),k=(t,s)=>{e.value.forEach(async o=>{o.historyId===t&&(await S(await _.kbConfig({kb_id:n.value,new_kb_name:s})),o.title=s)})},l=r([]),b=(t,s)=>{const o={historyId:t,list:s};l.value.some(a=>a.historyId===t)?l.value.forEach(a=>{a.historyId===t&&(a.list=s)}):l.value.push(o)},p=t=>l.value.find(s=>s.historyId===t),C=t=>{l.value=l.value.filter(s=>s.historyId!==t),e.value=e.value.filter(s=>s.historyId!==t),d.value=null,n.value="",i.value=[]},d=r(null),m=t=>{d.value=t},n=r(""),x=t=>{n.value=t};v(()=>n.value,()=>{R.value=n.value}),v(()=>y.value,()=>{e.value=e.value.filter(t=>y.value.some(s=>s.kb_id===t.kbId))});const B=r(null);return{QA_List:i,setQaList:f,showLoading:I,contextLength:h,historyList:e,addHistoryList:L,deleteHistoryList:g,updateHistoryList:w,getHistoryById:H,renameHistory:k,chatList:l,addChatList:b,getChatById:p,clearChatList:C,chatId:d,setChatId:m,kbId:n,setKbId:x,deleteChatId:B}},{persist:{storage:localStorage}});export{j as u};