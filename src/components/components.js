'use strict';

function submitComponent(extraClasses) {
  return `<button type="submit" class="btn btn-primary ${extraClasses || ""}">Enviar</button>`;
}

function attributesToString(attributes) {
  var attributesString = "";

  Object.entries(attributes).map(function (entry) {
    attributesString += `${attributesString.length ? " " : ""}${entry[0]}=${entry[1]}`
  });

  return attributesString;
}

function inputComponent(componentId, componentContent) {
  var {label, type, extraClasses, ...attributes} = componentContent;

  var attributesString = attributesToString(attributes);

  var input = `
    <label class="form-label" for="input-${componentId}">${label || componentId}</label>
    <input type="${type || "text"}" class="form-control ${extraClasses}" data-name="${componentId}" id="input-${componentId}" placeholder="${label || componentId}" ${attributesString || ""}>
  `;
  return divWrapper("form-group", input);
}

function selectorComponent(componentId, componentContent) {
  var {label, options, extraClasses, ...attributes} = componentContent;

  var attributesString = attributesToString(attributes);

  // var label = componentContent.label || componentId;
  var selector = `
    <label for="select-${componentId}" class="form-label">${label || componentId}</label>
    <select id="select-${componentId}" class="form-select ${extraClasses}" data-name="${componentId}" aria-label="${label || componentId}"  ${attributesString || ""}>
      ${options.map(function(item) {
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