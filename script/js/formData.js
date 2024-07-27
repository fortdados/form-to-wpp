var params = new URLSearchParams(location.search);

var formData = params.get("c") === "proto" ? {
  "titleWpp": "Informações de projeto",
  "title": "Controle de projeto",
  "components": {
    "Projeto": {"type": "selector", "options": ["1 - Projeto Cliente", "2 - Projeto Cliente 2", "3 - Projeto Cliente 3"]},
    "Data": {"type": "date", "label": "Data de finalização"},
    "Equipe": {"type": "selector", "options": ["", "Desenvolvimento", "Arquitetura"]},
    "Dias": {"type": "number", "label": "Dias com o projeto"},
    "Obs": {"type": "text", "label": "Observação"}
  }
} : {
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
};
