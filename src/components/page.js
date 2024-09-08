"use strict";

var components = require("./components");

function updateElements(formData, mainForm) {
  mainForm.setHTMLUnsafe("");

  formData.components.forEach(function (componentContent) {
    var classWrapper = "mb-3";
    var component;
  
    switch (componentContent.type) {
      case "selector":
        component = components.selectorComponent;
        break;
      default:
        component = components.inputComponent;
        break;
    }
  
    mainForm.insertAdjacentHTML("beforeend", components.divWrapper(classWrapper, component(componentContent.ID, componentContent)));
  });

  mainForm.insertAdjacentHTML("beforeend", components.divWrapper("col-12 d-flex justify-content-end pt-4", components.submitComponent("col-4")));
}

function updateForm(formEventData) {
  var {titleSelector, formSelector, form, callback} = formEventData;
  var titleElement = document.querySelector(titleSelector);
  var mainForm = document.querySelector(formSelector);
  var titleString = form && form.title ? form.title : null;
  titleElement.setHTMLUnsafe(`${titleString || 'Formulário não encontrado'}`);
  titleElement.classList += titleElement.classList.value.replace("title-missing", "") + titleString ? " title-missing" : "";

  if (!form) {
    return;
  }

  if (form.components) {
    updateElements(form, mainForm);
  }

  if (form.action) {
    mainForm.action = form.action;
  }

  $('.money').mask('000.000.000.000.000,00', {reverse: true});

  if (callback) {
    callback(mainForm, form);
  }
}

function create(formEventData) {
  mainForm.addEventListener("dynamicForm:updateForm", function(e) {
    var formEventData = e.detail;
    updateForm(formEventData);
  });

  updateForm(formEventData);
}

module.exports = {
  init: function () {
    document.addEventListener("dynamicForm:create", function(e) {
      var formEventData = e.detail;

      if (!formEventData) {
        return;
      }

      create(formEventData);
    });

    var event = new CustomEvent("dynamicForm:loaded");
    document.dispatchEvent(event);
  }
}