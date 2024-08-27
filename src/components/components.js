'use strict';

function submitComponent(extraClasses) {
  return `<button type="submit" class="btn btn-primary ${extraClasses || ""}">Enviar</button>`;
}

function inputComponent(componentId, componentContent) {
  var {label, type, extraClasses, ...attributes} = componentContent;

  var attributesString = "";

  Object.entries(attributes).map(function (entry) {
    attributesString += `${attributesString.length ? " " : ""}${entry[0]}=${entry[1]}`
  });

  var input = `
    <label class="form-label" for="input-${componentId}">${label || componentId}</label>
    <input type="${type || "text"}" class="form-control ${extraClasses}" data-name="${componentId}" id="input-${componentId}" placeholder="${label || componentId}"  ${attributesString || ""}>
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


module.exports = {
  divWrapper: divWrapper,
  inputComponent: inputComponent,
  submitComponent: submitComponent,
  selectorComponent: selectorComponent
}