var params = new URLSearchParams(location.search);

var tabsMap = {
  "estoque": {
    "titleWpp": "Informações de estoque",
    "title": "Estoque",
    "components": {
      "Produto": {"type": "selector", "options": ["Argamassa Megamassa AC1", "Argamassa Megamassa AC2", "Argamassa Megamassa AC3"]},
      "Quantidade": {"type": "selector", "options": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]},
      "Lote": {"type": "number"},
      "Reprocessado": {"type": "number", "label": "Reprocessado (em sacas)"},
      "Data": {"type": "date"},
      "Confirmado": {"type": "selector", "options": ["", "Sim", "Não"]},
      "Obs": {"type": "text", "label": "Observação"}
    }
  },
  "vendas": {
    "titleWpp": "Informações de vendas",
    "title": "Vendas",
    "components": {
      "Cliente": {"type": "text"},
      "Cidade": {"type": "selector", "options": ["SOURE", "SALVATERRA", "CACHOEIRA", "OUTRO"]},
      "O.V.": {"type": "selector", "options": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]},
      "Produto": {"type": "selector", "options": ["Argamassa Megamassa AC1", "Argamassa Megamassa AC2", "Argamassa Megamassa AC3"]},
      "Valor": {"type": "text", "label": "Valor Unitário", "extraClasses": "money"},
      "Quantidade": {"type": "selector", "options": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]},
      "Data": {"type": "date"},
      "Validação": {"type": "selector", "options": ["", "SIM", "NÃO"]}
    }
  }
}

// var formData = tabsMap[params.get("form")] || {};
