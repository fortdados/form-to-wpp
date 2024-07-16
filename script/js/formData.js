var formData = {
  "title": "Estoque",
  "components": {
    "Produto": {"type": "selector", "options": ["Argamassa Megamassa AC1", "Argamassa Megamassa AC2", "Argamassa Megamassa AC3"]},
    "Quantidade": {"type": "number"},
    "Lote": {"type": "number"},
    "Reprocessado (em sacas)": {"type": "number"},
    "Data": {"type": "date"},
    "Confirmado": {"type": "selector", "options": ["", "Sim", "Não"]},
    "Obs": {"type": "text", "label": "Observação"}
  }
}