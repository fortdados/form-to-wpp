(()=>{"use strict";var e={653:e=>{function t(e){var t="";return Object.entries(e).map((function(e){t+=`${t.length?" ":""}${e[0]}=${e[1]}`})),t}function n(e,t){return`<div class="${e}">${t}</div>`}e.exports={divWrapper:n,inputComponent:function(e,o){var{label:r,type:a,extraClasses:i,...s}=o;return n("form-group",`\n    <label class="form-label" for="input-${e}">${r||e}</label>\n    <input type="${a||"text"}" class="form-control ${i}" data-name="${e}" id="input-${e}" placeholder="${r||e}" ${t(s)||""}>\n  `)},submitComponent:function(e){return`<button type="submit" class="btn btn-primary ${e||""}">Enviar</button>`},selectorComponent:function(e,o){var{label:r,options:a,extraClasses:i,...s}=o;return n("form-group",`\n    <label for="select-${e}" class="form-label">${r||e}</label>\n    <select id="select-${e}" class="form-select ${i}" data-name="${e}" aria-label="${r||e}"  ${t(s)||""}>\n      ${a.map((function(e){return`<option value="${e}">${e}</option>`}))}\n    </select>\n  `)}}},830:(e,t,n)=>{var o=n(653);function r(e){var{titleSelector:t,formSelector:n,form:r,callback:a}=e,i=document.querySelector(t),s=document.querySelector(n),c=r&&r.title?r.title:null;i.setHTMLUnsafe(`${c||"Formulário não encontrado"}`),i.classList+=i.classList.value.replace("title-missing","")+c?" title-missing":"",r&&(r.components&&function(e,t){t.setHTMLUnsafe(""),e.components.forEach((function(e){var n;n="selector"===e.type?o.selectorComponent:o.inputComponent,t.insertAdjacentHTML("beforeend",o.divWrapper("mb-3",n(e.ID,e)))})),t.insertAdjacentHTML("beforeend",o.divWrapper("col-12 d-flex justify-content-end pt-4",o.submitComponent("col-4")))}(r,s),r.action&&(s.action=r.action),$(".money").mask("000.000.000.000.000,00",{reverse:!0}),a&&a(s,r))}e.exports={init:function(){var e=new CustomEvent("dynamicForm:loaded");document.dispatchEvent(e),document.addEventListener("dynamicForm:create",(function(e){var t=e.detail;t&&function(e){mainForm.addEventListener("dynamicForm:updateForm",(function(e){r(e.detail)})),r(e)}(t)}))}}}},t={};(function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports})(830).init()})();