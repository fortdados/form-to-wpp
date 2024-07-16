'use strict';

function submitComponent(extraClasses) {
  return `<button type="submit" class="btn btn-primary ${extraClasses || ""}">Enviar</button>`;
}

function inputComponent(componentId, componentContent) {
  var label = componentContent.label || componentId;
  var input = `
    <label for="input-${componentId}" class="form-label">${label}</label>
    <input type="${componentContent.type || "text"}" class="form-control" data-name="${componentId}" id="input-${componentId}" placeholder="${label}">
  `;
  return divWrapper("form-group", input);
}

function selectorComponent(componentId, componentContent) {
  var label = componentContent.label || componentId;
  var selector = `
    <label for="select-${componentId}" class="form-label">${label}</label>
    <select id="select-${componentId}" class="form-select" data-name="${componentId}" aria-label="${label}">
      ${componentContent.options.map(function(item) {
        return `<option value="${item}">${item}</option>`;
      })}
    </select>
  `;

  return divWrapper("form-group", selector);
}

function divWrapper(classes, element) {
  return `<div class="${classes}">${element}</div>`;
}