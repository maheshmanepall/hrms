var g=(a,t,r)=>new Promise((w,u)=>{var m=n=>{try{p(r.next(n))}catch(o){u(o)}},f=n=>{try{p(r.throw(n))}catch(o){u(o)}},p=n=>n.done?w(n.value):Promise.resolve(n.value).then(m,f);p((r=r.apply(a,t)).next())});import{O as i,c as S,a7 as h}from"./frappe-ui-D0s9hLeI.js";import{u as W}from"./index-6Eoza2Ey.js";const l=i({url:"hrms.api.get_company_currencies",auto:!0}),_=i({url:"hrms.api.get_currency_symbols",auto:!0});function C(a){var t,r;return(r=(t=l==null?void 0:l.data)==null?void 0:t[a])==null?void 0:r[0]}function E(a){var t,r;return(r=(t=l==null?void 0:l.data)==null?void 0:t[a])==null?void 0:r[1]}function O(a){var t;return(t=_==null?void 0:_.data)==null?void 0:t[a]}function v(a){const t=i({url:"hrms.api.get_workflow",params:{doctype:a},cache:["hrms:workflow",a]});t.reload();const r=S(()=>{const o=t==null?void 0:t.data;return Object.keys(o||{}).length>0}),w=()=>{var o,e;return(o=t.data)!=null&&o.override_status?"":(e=t.data)==null?void 0:e.workflow_state_field},u=o=>{var e;return(e=t.data)==null?void 0:e.states.find(s=>s.doc_status==o)},m=o=>g(this,null,function*(){return yield i({url:"frappe.model.workflow.get_transitions",params:{doc:o},transform:s=>{var c,d;const y=((d=(c=W)==null?void 0:c.data)==null?void 0:d.name)==o.owner;return s.filter(k=>k.allow_self_approval||!y).map(k=>k.action)}}).reload()}),f=o=>{var e;return(e=t.data)==null?void 0:e.states.filter(s=>s.state==o).map(s=>s.allow_edit)};return{hasWorkflow:r,workflowDoc:t,getWorkflowStateField:w,getTransitions:m,getDocumentStateRoles:f,isReadOnly:o=>{var c;const e=(c=t.data)==null?void 0:c.workflow_state_field;if(!e)return!1;const s=o[e]||u(o.docstatus);return!f(s).some(d=>W.data.roles.includes(d))},applyWorkflow:(o,e)=>g(this,null,function*(){yield i({url:"frappe.model.workflow.apply_workflow",params:{doc:o,action:e},onSuccess(){h({title:"Success",text:`Workflow action '${e}' applied successfully`,icon:"check-circle",position:"bottom-center",iconClasses:"text-green-500"})},onError(){h({title:"Error",text:`Error applying workflow action: ${e}`,icon:"alert-circle",position:"bottom-center",iconClasses:"text-red-500"}),console.log(`Error applying workflow action: ${e}`)}}).reload()})}}export{O as a,E as b,C as g,v as u};
//# sourceMappingURL=workflow-B78wL7-d.js.map
