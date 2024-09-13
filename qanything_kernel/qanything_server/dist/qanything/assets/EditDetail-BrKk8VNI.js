import{_ as e}from"./bot-avatar-CBCRm2Zm.js";import{_ as a}from"./knowledge-zhu8jsrY.js";import{u as t}from"./useBots-DCM__qpD.js";import{r as l,u as s,a as o,b as n,C as i}from"./utils-kifUDenk.js";import{g as c,u as r}from"./index-AGU1Aiar.js";import{e as u,u as d,a as p,b as v,D as m,h as g,C as h,c as A,d as k,_ as f,T as w,f as b}from"./ChatInfoPanel-DPhUxKNf.js";import{u as y,a as C,b as _,I as S}from"./useChatSource-CsUDZzf8.js";import{u as I}from"./useBotsChat-U8DfZAqA.js";import{d as x,y as B,r as F,a as T,o as D,z as R,L as q,D as L,c as U,G as j,H as E,E as H,N as Q,V as K,F as V,M as O,C as z,J as Y,B as X,Z,$ as M,K as W,b as P,Q as G,R as N,U as J,a8 as $,a2 as ee,A as ae,T as te,a5 as le,O as se,p as oe}from"./index-BbMN_vfI.js";import{I as ne,_ as ie}from"./ActionButton-D5mx6iYZ.js";import{_ as ce}from"./lock-DmQwPPsI.js";import"./index-BkXAdH1Q.js";import"./class-CHaFijJu.js";import"./collapseMotion-BlciqUxw.js";import"./slide-tKqU-fto.js";import"./index-BBpe78hg.js";const re=e=>(Z("data-v-5f0304fb"),e=e(),M(),e),ue={class:"bot-detail-edit-comp"},de={class:"name-avatar"},pe=re((()=>L("img",{src:e,alt:"avatar"},null,-1))),ve={class:"title"},me={class:"title"},ge={class:"title"},he=re((()=>L("span",null,"*",-1))),Ae=re((()=>L("img",{class:"knowledge-icon",src:a,alt:"knowledge"},null,-1))),ke={class:"kb-name"},fe=["onClick"],we=re((()=>L("img",{class:"add-knowedge",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAOBSURBVFiFzZixdeJAEIb/WZAiAjqADiiBwAUQOHOg97BlhQQUQEABBIRCZ7+ngMwBBThQARfQgegAv4cTOHYuuFksQBJIYM5/AojVzqcZ7ezsEDNX8IOl/jfAKVUvuTkMw/p6vW4TUUNrXWfmBgAQ0UIptWTmhW3bkeM4y7I2qGiIwzCsbzYbZ7vddoioxcz1k0aIZkQ0c103/FZA3/d7RDQwUES0ZOY5gDkRLYkoBgBmbsqYFoB2YopYKTUsAnoW4Ovra2uz2bwBaMqlSCk1Pid85jXQWvcSsHGtVrt7eHhYXAwYBIHDzCPxSCQeiE5NnDWX1noAoCkef3Jdd1YacDKZDJh5ID/Hnuf1y4Adyvf9EYAeABDR8Pn5eVgYMAiCjtb6TX72Pc8bXwPOKPnwSqnHrPcyFXA6nTY+Pz9/M3P91BNeIt/3ewBGRLSsVqt33W53fjgmNVGvVqt3eefG3wUHABKVMTPXZREe6QgwCAIH/1ZrfK13Lk9iIwLQFI/mA8oqg1KqsOeCIHDSjJySsUVEgzAM9xL/HmDCe1GZrK+1fgEwKnqfpK1IQu1kAjJzBwCUUlddsefI2Nxut5296+ZLGIZ1A2jbdqlEfIls244kebeSYd4Brtdrsw1dVH2UleM4S2aeM3M9wfIFSEQN+XqUi26o+QHLF6DWeleh3J7rn4xtwwIkCtZEsRnnTSIb/kveGN/3/2T8lbtlElHMzDsWoETJn3y6olJKFY7OzoNEtBD6Zt4NZntK+894zvO8UkcJY5uIdnVicpHEMqi0hy6VsZ30dDLEH/LZuiXUgVoAwMzHHsxKlLeS2GwbliPArER5KxmbRDRLbhR7q7hSqcwAQA44N5WxSUR7Z5Q9QMuyQkmW7SAIynixr5R6LHqTVFFtAPFhFbUHKGEeAl91YRF5njcuWaZl1qBHiVryXAygLaevb5XYaCLFe6mAAGBZ1r2EulemQj5Xk8lkAKBHRMtarXaXNiYVsNvtzonInEdGMtFV5ft+zxw7iegpq8uQuRe7rhsS0RAAmHlwzXDLXCOBG+Z1F85pfXSY+ZdsQ4WbPwdztWVBtGVT6J+a66zm0XQ6baxWq3dcsXlkWdZ92kG9FKBRsvmTuBwhp/2W7CFKu25YpI1SuIFpQJm5Yw5ZuQakh1ipVGaWZYVFzzulAI3yWsDizY+bt4BvrR/f5f8LxA8rSSHVBD4AAAAASUVORK5CYII=",alt:"icon"},null,-1))),be={class:"save"},ye={class:"title"},Ce={class:"chat-setting-form-footer"},_e=W(x({__name:"BotDetailEdit",setup(e,{expose:a}){const{curBot:o,knowledgeList:n}=B(t()),{QA_List:i}=B(I()),{setSelectKnowledgeVisible:r,setCurBot:d}=t(),{setChatSettingConfigured:p}=y(),{bots:v,common:m}=c(),g=F(""),h=F(""),A=F(""),k=T((()=>h.value.match(/[^a-zA-Z\s]|\p{P}|\w+/g)));D((()=>{g.value=o.value.bot_name,A.value=o.value.welcome_message,h.value=o.value.prompt_setting}));const f=async e=>{try{const a=await l(await s.queryBotInfo({bot_id:e}));d(a[0])}catch(a){Y.error(a.msg||"获取Bot信息失败")}},w=async()=>{try{await l(await s.updateBot({bot_id:o.value.bot_id,bot_name:g.value,prompt_setting:h.value,welcome_message:A.value})),f(o.value.bot_id),Y.success(v.saveSuccessful)}catch(e){Y.error(e.msg||"保存失败，请重试")}},b=F(),C=async(e,a="应用成功")=>{const t=await b.value.onCheck();return!Object.hasOwn(t,"errorFields")&&(p(t),Y.success(a),!0)};return a({handleOk:C}),(e,a)=>{const t=ne,c=ie,d=X;return R(),q("div",ue,[L("div",de,[pe,U(t,{value:j(g),"onUpdate:value":a[0]||(a[0]=e=>E(g)?g.value=e:null),placeholder:j(v).inputBotName,"show-count":"",maxlength:20},null,8,["value","placeholder"])]),L("div",ve,H(j(v).roleSetting),1),U(c,{value:j(h),"onUpdate:value":a[1]||(a[1]=e=>E(h)?h.value=e:null),class:"role-setting-input","auto-size":{minRows:7,maxRows:7},rows:7},null,8,["value"]),L("div",{class:Q(["role-setting-length",j(k)&&j(k).length>2e3?"over-length":""])},H(j(k)?j(k).length:0)+" / 2000 ",3),L("div",me,H(j(v).welcomeMessage),1),U(c,{value:j(A),"onUpdate:value":a[2]||(a[2]=e=>E(A)?A.value=e:null),class:"greeting-input","show-count":"",maxlength:100,placeholder:j(v).inputWelcomMsg,"auto-size":{minRows:6,maxRows:6},rows:6},null,8,["value","placeholder"]),L("div",ge,[K(H(j(v).associatedKb),1),he]),(R(!0),q(V,null,O(j(o).kb_ids,((e,a)=>(R(),q("div",{key:e,class:"knowedge-item knowledge-info"},[Ae,L("div",ke,H(j(o).kb_names[a]),1),L("img",{class:"remove-icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAQBSURBVFiF1Zk/aBtnFMB/73TWUJwUi0CoS4KHxEPw4n+0aQMpGWwPLaQYeywt0l0OFxwC7ZohawuhHoR9Z2jwaFEayFDbgyGQ4BaEp5DBWURCFZoauSTOoujuZdB3RpKNY8e25P4m6b67e7+7033fe0/C+yGO41wErgADItINdAInzPgroKiqa0AeWA6CYAXQfQfaz86u655V1QkR+Qb4aJ+xnqvqnIhkfd9/eqiCmUzmdCKRuKmqDtBmNj8BFkXkgao+LpfLz7q6ul4CFAqFk8lk8oyIXFDVS8AwcN4c90ZEgjAMb83Ozv5zYEHHcb4VkZ+AU0AFmAemfN//ay8XF+O67ifAJDAO2MC6qv4YBMGd9xIcGxtLplKp26o6YTYtqOr1IAjW9iPWiOM43SLyCzACICLZUql0I5fLlfcsODEx0V6pVH4DhoBN4Aff92cOItaI67rXgJ+BdmDJtu3RbDa7+U7BsbGxZEdHxz1gSFWLiURieHp6+tFhysV4ntcThuGiiHQCSxsbG1813kmr8aBUKnU7loui6PJRyQFMT08/iqLosqoWgSETu466O2heiF+BTcuyLh6lXC2e5/VEUbQCtKvqd7UvTiL+kMlkTluWdRf4AJicmZn5oxlyAPl8/kV/f38J+FJELvX29s6trq6+hppHnEgkblKdShYO+4XYCybmAnDKuLAlaFYIB6io6vVmy8WY2BVVdVzXPbslaOa6NmD+oPPcQTCx54G2eP61ADFrK8BUq+RqmAIwTiKO43wmIg+BJ77vd7fWrYrrumvAeVX93KKaMgEsttCpkdjligUMAIjIg9b51FPjMmCZZBNVfdxCpzpiFxHptqhmwpTL5WcttaqhxqXTxqTpcbK5G67r/g5cPWD8u77vf73bDl1dXS+LxSLAiW3JwnHDplrgfFgoFE4C/+2287uu/LAwJQPAKwsoAiSTyTPNCL4XalyKlikNEZELLXSqI3ZR1TWLat2Kqb6OBTUueQtYNl+GW+SzE7HLsgDiuu7fVAvxT/dbTh42pjz9E3ju+/7HFqCqOmfGJ1untsUkgHFSC6q1KfAGGHccp2UZjYk9TrX7kAWTsPq+/1REAsA2RXVLMLFtEQni/s3WShKG4S1gHRgxRXVTMTFHgHXjAtRUdaurq6/7+vr+FZGrwBeDg4P38vn8i2bIeZ7Xo6rzQFJVv5+dnX0Yj9WtxUEQ3DHPvj0Mw8V0On3uqOXS6fS5MAwXgXYRyTY2k7YlC6VS6QawJCKdlmXd9zyv56jkPM/rsSzrftz6MLHr2CaYy+XKtm2PxpJRFK0cxW/Sdd1rURStxHK2bY/u1OH6f7bfGk54PBuYtRzrFnAtx7aJvtNxzfob4i2ESvnrjyWOcQAAAABJRU5ErkJggg==",alt:"remove",onClick:a=>(async e=>{let a=o.value.kb_ids;a=a.filter((a=>a!=e));try{await l(await s.updateBot({bot_id:o.value.bot_id,kb_ids:a})),f(o.value.bot_id),n.value=n.value.map((a=>(a.kb_id===e&&(a.state=0===a.state?1:0),a))),Y.success(v.removalSucessful)}catch(t){Y.error(t.msg||"请求失败")}})(e)},null,8,fe)])))),128)),L("div",{class:"knowedge-item add-knowledge-content",onClick:a[3]||(a[3]=e=>j(r)(!0))},[we,K(" "+H(j(v).clickAssociatedKb),1)]),L("div",be,[U(d,{class:"save-btn",type:"primary",onClick:w},{default:z((()=>[K(H(j(v).save),1)])),_:1})]),L("div",ye,H(j(m).modelSettingTitle),1),U(u,{ref_key:"chatSettingFormRef",ref:b,"context-length":j(i).length},null,8,["context-length"]),L("div",Ce,[U(d,{type:"primary",style:{width:"auto"},onClick:C},{default:z((()=>[K(H(j(m).confirmApplication),1)])),_:1})])])}}}),[["__scopeId","data-v-5f0304fb"]]),Se=e=>(Z("data-v-c8969e72"),e=e(),M(),e),Ie={class:"bots-chat-container"},xe={class:"my-page"},Be={class:"header"},Fe=Se((()=>L("img",{src:e,alt:"avatar"},null,-1))),Te={id:"chat",class:"chat"},De={class:"ai"},Re={class:"content"},qe=Se((()=>L("img",{class:"avatar",src:k,alt:"头像"},null,-1))),Le=["innerHTML"],Ue={key:0,class:"user"},je=Se((()=>L("img",{class:"avatar",src:f,alt:"头像"},null,-1))),Ee={class:"question-text"},He={key:1,class:"ai"},Qe={class:"content"},Ke=Se((()=>L("img",{class:"avatar",src:k,alt:"头像"},null,-1))),Ve={key:1},Oe={key:0},ze={key:1},Ye={class:"source-list"},Xe={class:"control"},Ze={class:"tips"},Me=["href"],We=["onClick"],Pe={class:"source-content"},Ge=["innerHTML"],Ne={class:"score"},Je={class:"tips"},$e={key:2,class:"feed-back"},ea=["onClick"],aa={class:"reload-text"},ta={class:"tools"},la={class:"stop-placeholder"},sa={class:"question-box"},oa={class:"question"},na={class:"send-plane"},ia={key:0,class:"mask"},ca=Se((()=>L("img",{src:ce,alt:"icon"},null,-1))),ra=W(x({__name:"Chat",props:{chatType:{type:String,default:"edit"},botInfo:{type:Object,default:()=>{}}},setup(e){const a=e,t=c().common,u=c().bots,k=new w((e=>{e&&(f.value[f.value.length-1].answer+=e||"")})),{QA_List:f}=B(I()),{chatSettingFormActive:x}=B(y()),{copy:D}=d(),{setChatSourceVisible:Z,setSourceType:M,setSourceUrl:W,setTextContent:oe}=C(),{language:ie}=B(r()),ce=F(""),re=T((()=>{const e=x.value.context;if(0===e)return[];const a=f.value.filter((e=>"ai"===e.type));return(11===e?a:a.slice(-e)).map((e=>[e.question,e.answer]))})),ue=F(!1),de=F([]);let pe;const ve=F(null),me=F(null),ge=()=>{ee((()=>{var e;null==(e=ve.value)||e.scrollIntoView(!1)}))},he=p(((e,a)=>{if(e.like=!e.like,e.unlike=!1,e.like){a.target.parentNode.style.animation="shake ease-in .5s";const e=setTimeout((()=>{clearTimeout(e),a.target.parentNode.style.animation=""}),600)}}),800),Ae=e=>{f.value.push({answer:"",question:e,onlySearch:x.value.capabilities.onlySearch,type:"ai",copied:!1,like:!1,unlike:!1,source:[],picList:null,showTools:!1})},ke=new i,fe=()=>{pe&&pe.abort(),k.done(),ue.value=!1,f.value[f.value.length-1].showTools=!0},we=async()=>{var e;if(!ce.value.trim().length)return;if(!ce.value.length)return void Y.warn("正在聊天中...请等待结束");if(!(await pa()))return void Y.error("模型设置错误，请先检查模型配置");const t=ce.value;ce.value="",(e=>{f.value.push({question:e,type:"user"}),ge()})(t),ue.value=!0,null==(e=ve.value)||e.scrollIntoView(!0),pe=new AbortController;b(n+"/local_doc_qa/local_doc_chat",{method:"POST",headers:{"Content-Type":"application/json",Accept:["text/event-stream","application/json"],"Transfer-Encoding":"chunked",Connection:"keep-alive"},openWhenHidden:!0,body:JSON.stringify({user_id:o,bot_id:a.botInfo.bot_id,history:re.value,question:t,streaming:!1===x.value.capabilities.onlySearch,networking:x.value.capabilities.networkSearch,product_source:"saas",rerank:x.value.capabilities.rerank,only_need_search_results:x.value.capabilities.onlySearch,hybrid_search:x.value.capabilities.mixedSearch,max_token:x.value.maxToken,api_base:x.value.apiBase,api_key:x.value.apiKey,model:x.value.apiModelName,api_context_length:x.value.apiContextLength,chunk_size:x.value.chunkSize,top_p:x.value.top_P,top_k:x.value.top_K,temperature:x.value.temperature}),signal:pe.signal,onopen(e){ke.addChatSetting(x.value),e.ok&&"text/event-stream"===e.headers.get("content-type")?(Ae(t),k.start()):"application/json"===e.headers.get("content-type")&&Ae(t)},onmessage(e){var a;const t=JSON.parse(e.data);if(200==(null==t?void 0:t.code)&&(null==t?void 0:t.response)&&"success"===t.msg)k.add(null==t?void 0:t.response.replaceAll("\n","<br/>")),ge();else{delete t.time_record.time_usage.retriever_search_by_milvus,ke.addTime(t.time_record.time_usage),ke.addToken(t.time_record.token_usage),ke.addDate(Date.now())}(null==(a=null==t?void 0:t.source_documents)?void 0:a.length)&&(f.value[f.value.length-1].source=null==t?void 0:t.source_documents)},onclose(e){k.done(),pe.abort(),ue.value=!1,f.value[f.value.length-1].showTools=!0,f.value.at(-1).itemInfo=ke.getChatInfo(),ee((()=>{ge()}))},onerror(e){throw k.done(),pe.abort(),ue.value=!1,f.value[f.value.length-1].showTools=!0,ee((()=>{ge()})),e}})},{showModal:be}=B(v()),{clearQAList:ye}=I(),Ce=F(!1),_e=F(""),Se=F(""),ra=()=>{Se.value="download",be.value=!0,_e.value=t.saveTip},ua=async()=>{if(Ce.value=!0,"download"===Se.value)try{const e=document.getElementById("chat-ul"),a=(await g(e,{useCORS:!0})).toDataURL("image/png"),t=document.createElement("a");t.style.display="none",t.href=a,t.setAttribute("download","chat-shot.png"),void 0===t.download&&t.setAttribute("target","_blank"),document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(a),Y.success(u.downloadSuccessful),Promise.resolve()}catch(e){Y.error(e.message||e.msg||"出错了")}else"delete"===Se.value&&ye();Se.value="",_e.value="",Ce.value=!1,be.value=!1},da=P("checkSettingOk"),pa=async()=>await da();let va=["pdf","docx","xlsx","txt","jpg","png","jpeg"];const ma=e=>{if(!e)return!1;const a=e.split(".");if(a.length){const e=a.pop();return!!va.includes(e)}return!1},ga=e=>{ma(e.file_name)&&async function(e){try{W(null);const a=await l(await s.getFile({file_id:e.file_id})),t=e.file_name.split(".").pop(),o=function(e){const a=va.indexOf(e);return ha[a]}(t);if(M(t),W(`data:${o};base64,${a.base64_content}`),"txt"===t){const e=atob(a.base64_content),t=decodeURIComponent(escape(e));oe(t),Z(!0)}else Z(!0)}catch(a){Y.error(a.msg||"获取文件失败")}}(e)};let ha=["application/pdf","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","text/plain","image/jpeg","image/png","image/jpeg"];return ge(),(a,l)=>{const s=S,o=X,n=ne;return R(),q(V,null,[L("div",Ie,[L("div",xe,[L("div",Be,[Fe,K(" "+H(e.botInfo.bot_name),1)]),L("div",Te,[L("ul",{id:"chat-ul",ref_key:"scrollDom",ref:ve},[L("div",De,[L("div",Re,[qe,L("p",{class:"question-text",innerHTML:e.botInfo.welcome_message},null,8,Le)])]),(R(!0),q(V,null,O(j(f),((e,a)=>{var l,o,n;return R(),q("li",{key:a},["user"===e.type?(R(),q("div",Ue,[je,L("p",Ee,H(e.question),1)])):(R(),q("div",He,[L("div",Qe,[Ke,e.onlySearch?J("",!0):(R(),q("p",{key:0,class:Q(["question-text",[e.source.length||(null==(l=null==e?void 0:e.picList)?void 0:l.length)?"":"change-radius",e.showTools?"":"flashing"]])},[e.answer?(R(),ae(_,{key:0,content:e.answer},null,8,["content"])):(R(),q("span",Ve,H(e.answer),1)),Object.keys((null==(o=null==e?void 0:e.itemInfo)?void 0:o.tokenInfo)||{}).length?(R(),ae(h,{key:2,"chat-item-info":e.itemInfo},null,8,["chat-item-info"])):J("",!0)],2))]),(null==(n=null==e?void 0:e.picList)?void 0:n.length)?(R(!0),q(V,{key:0},O(e.picList,((a,t)=>(R(),q("div",{key:a+t,class:Q(["data-picList",e.source.length||t+1!==e.picList.length?"":"picList-radius"])},[U(s,{width:150,src:a,class:"responsive-image"},null,8,["src"])],2)))),128)):J("",!0),e.source.length?(R(),q(V,{key:1},[L("div",{class:Q(["source-total",j(de).includes(a)?"":"source-total-last"])},["zh"===j(ie)?(R(),q("span",Oe,"找到了"+H(e.source.length)+"个信息来源：",1)):(R(),q("span",ze,"Found "+H(e.source.length)+" source of information",1)),G(U(te,{name:"down",onClick:e=>(e=>{de.value.push(e)})(a)},null,8,["onClick"]),[[N,!j(de).includes(a)]]),G(U(te,{name:"up",onClick:e=>(e=>{de.value=de.value.filter((a=>a!==e))})(a)},null,8,["onClick"]),[[N,j(de).includes(a)]])],2),G(L("div",Ye,[(R(!0),q(V,null,O(e.source,((a,l)=>(R(),q("div",{key:l,class:"data-source"},[G(L("p",Xe,[L("span",Ze,H(j(t).dataSource)+H(l+1)+":",1),a.file_id.startsWith("http")?(R(),q("a",{key:0,href:a.file_id,target:"_blank"},H(a.file_name),9,Me)):(R(),q("span",{key:1,class:Q(["file",ma(a.file_name)?"filename-active":""]),onClick:e=>ga(a)},H(a.file_name),11,We)),G(U(te,{name:"iconup",onClick:a=>((e,a)=>{e.source[a].showDetailDataSource=!1})(e,l)},null,8,["onClick"]),[[N,a.showDetailDataSource]]),G(U(te,{name:"icondown",onClick:a=>((e,a)=>{e.source[a].showDetailDataSource=!e.source[a].showDetailDataSource})(e,l)},null,8,["onClick"]),[[N,!a.showDetailDataSource]])],512),[[N,a.file_name]]),U(le,{name:"sourceitem"},{default:z((()=>{var e;return[G(L("div",Pe,[L("p",{innerHTML:null==(e=a.content)?void 0:e.replaceAll("\n","<br/>")},null,8,Ge),L("p",Ne,[L("span",Je,H(j(t).correlation),1),K(H(a.score),1)])],512),[[N,a.showDetailDataSource]])]})),_:2},1024)])))),128))],512),[[N,j(de).includes(a)]])],64)):J("",!0),e.showTools?(R(),q("div",$e,[L("div",{class:"reload-box",onClick:a=>(e=>{ce.value=e.question,we()})(e)},[U(te,{name:"reload"}),L("span",aa,H(j(t).regenerate),1)],8,ea),L("div",ta,[U(te,{style:se({color:e.copied?"#4D71FF":""}),name:"copy",onClick:a=>(e=>{D(e.answer).then((()=>{e.copied=!e.copied,Y.success(t.copySuccess,1);const a=setTimeout((()=>{clearTimeout(a),e.copied=!e.copied}),1e3)})).catch((()=>{Y.error(t.copyFailed,1)}))})(e)},null,8,["style","onClick"]),U(te,{style:se({color:e.like?"#4D71FF":""}),name:"like",onClick:a=>j(he)(e,a)},null,8,["style","onClick"]),U(te,{style:se({color:e.unlike?"#4D71FF":""}),name:"unlike",onClick:a=>(e=>{e.unlike=!e.unlike,e.like=!1})(e)},null,8,["style","onClick"])])])):J("",!0)]))])})),128)),G(L("div",la,null,512),[[N,j(ue)]]),G(L("div",{ref_key:"stopBtn",ref:me,class:"stop-btn"},[U(o,{onClick:fe},{icon:z((()=>[U(te,{name:"stop",class:Q(j(ue)?"loading":"")},null,8,["class"])])),default:z((()=>[K(" "+H(j(t).stop),1)])),_:1})],512),[[N,j(ue)]])],512)]),L("div",sa,[L("div",oa,["share"===e.chatType?(R(),q("span",{key:0,class:"download",onClick:ra},[U(te,{name:"chat-download"})])):J("",!0),U(n,{value:j(ce),"onUpdate:value":l[0]||(l[0]=e=>E(ce)?ce.value=e:null),"max-length":"200",placeholder:j(t).problemPlaceholder,onKeyup:$(we,["enter"])},{suffix:z((()=>[L("div",na,[U(o,{type:"primary",disabled:j(ue),onClick:we},{default:z((()=>[U(te,{name:"sendplane"})])),_:1},8,["disabled"])])])),_:1},8,["value","placeholder"])])])]),e.botInfo.kb_ids&&e.botInfo.kb_ids.length?J("",!0):(R(),q("div",ia,[ca,L("p",null,H(j(u).bindKbtoPreview),1)])),U(A,{ref:"chatSettingForDialogRef"},null,512)]),U(m,{content:j(_e),"confirm-loading":j(Ce),onOk:ua},null,8,["content","confirm-loading"])],64)}}}),[["__scopeId","data-v-c8969e72"]]),ua={class:"edit-detail"},da={class:"bots-chat-page"},pa=W(x({__name:"EditDetail",setup(e){const{curBot:a}=B(t()),l=F();return oe("checkSettingOk",(()=>l.value.handleOk(null,"模型配置已自动保存"))),(e,t)=>(R(),q("div",ua,[U(_e,{ref_key:"botDetailEditRef",ref:l},null,512),L("div",da,[U(ra,{"bot-info":j(a),"chat-type":"edit"},null,8,["bot-info"])])]))}}),[["__scopeId","data-v-3807c075"]]);export{pa as default};