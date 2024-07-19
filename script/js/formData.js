var formData = {
  "title": "Estoque",
  "components": {
    "Produto": {"type": "selector", "options": ["Argamassa Megamassa AC1", "Argamassa Megamassa AC2", "Argamassa Megamassa AC3"]},
    "Quantidade": {"type": "selector", "options": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]},
    "Lote": {"type": "number"},
    "Reprocessado (em sacas)": {"type": "number"},
    "Data": {"type": "date"},
    "Confirmado": {"type": "selector", "options": ["", "Sim", "Não"]},
    "Obs": {"type": "text", "label": "Observação"}
  }
};
