"use strict";

var components = require("./components");

module.exports = {
  init: function () {
    var tabsMapping = JSON.parse(tabsMap);
    var params = new URLSearchParams(location.search);
    var formData = tabsMapping[params.get("form")] || {};

    function fillForm(inputFields) {
      inputFields.forEach(function (componentContent) {
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
    $(document).ready(function(){
      $('.money').mask('000.000.000.000.000,00', {reverse: true});
      var mainForm = document.querySelector("#mainForm");
      var title = document.querySelector("#title");
      if (!title.innerHTML) {
        title.insertAdjacentHTML("beforeend", `${formData.title || "Formulário não encontrado"}`);
        if (formData.components) {
          fillForm(formData.components);
        }
      }
    });
  }
}