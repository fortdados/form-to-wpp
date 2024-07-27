"use strict";

function fillForm(inputFields) {
  Object.keys(inputFields).forEach(function (key) {
    var componentContent = inputFields[key];
    var classWrapper = "mb-3";
    var component;
  
    switch (componentContent.type) {
      case "selector":
        component = selectorComponent;
        break;
      default:
        component = inputComponent;
        break;
    }
  
    mainForm.insertAdjacentHTML("beforeend", divWrapper(classWrapper, component(key, componentContent)));
  });
  
  mainForm.insertAdjacentHTML("beforeend", divWrapper("col-12 d-flex justify-content-end pt-4", submitComponent("col-4")));

  mainForm.addEventListener("submit", function(e) {
    e.preventDefault();
    var params = new URLSearchParams(location.search);
    var phoneNumber = params.get("phone") || "123456789";
    var url = `https://wa.me/${phoneNumber}?text=${formData.titleWpp}%0A%0A`;
    var text = "";
    for (var index = 0; index < e.target.length; index++) {
      var element = e.target[index];
      if (element.value) {
        if (text.length) {
          text += `%0A`
        }
        text += `${element.getAttribute("data-name")}:${element.value}`
      }
    }

    if (text) {
      // window.open(url + text, "_blank").focus();
      window.location = url + text;
    }
  });
}

var mainForm = document.querySelector("#mainForm");
var title = document.querySelector("#title");
title.insertAdjacentHTML("beforeend", `${formData.title}`);
fillForm(formData.components);

