# WFRP4e - El Poder Tras el Trono (Castellano)

Traducción al castellano del módulo **Power Behind the Throne**, **The Horned Rat** y **Empire in ruins** para **Warhammer Fantasy Roleplay 4th Edition** en Foundry VTT.

Basada en el estilo y metodología de la traducción de [Txus5012/WFRP4e-Castellano](https://github.com/Txus5012/WFRP4e-Castellano).

---

## Requisitos

- [Warhammer Fantasy Roleplay 4th Edition](https://foundryvtt.com/packages/wfrp4e) (sistema)
- [WFRP4e Core Module](https://foundryvtt.com/packages/wfrp4e-core)
- [Power Behind the Throne](https://foundryvtt.com/packages/wfrp4e-pbtt) (módulo oficial — de pago)
- [Babele](https://foundryvtt.com/packages/babele)
- [WFRP4e-Castellano de Txus5012](https://github.com/Txus5012/WFRP4e-Castellano) (traducción base del sistema)

---

## Instalación

1. Descarga o clona este repositorio.
2. Copia la carpeta del módulo en tu directorio de módulos de Foundry VTT:  
   `[foundry-data]/modules/wfrp4e-pbtt-es/`
3. Activa el módulo desde el gestor de módulos de Foundry.
4. Asegúrate de que Babele está activo y configurado en español.

---

## Estructura del módulo

```
wfrp4e-pbtt-es/
├── module.json                  # Manifest del módulo
├── babele-register.js           # Registro en Babele
├── README.md                    # Este archivo
└── compendium/
    └── wfrp4e-pbtt/
        ├── actors.json          # Traducción de PNJs (94 actores)
        ├── items.json           # Traducción de objetos (60 items)
        ├── journals.json        # Traducción de entradas de diario (135 entradas) ⭐ PRINCIPAL
        ├── tables.json          # Traducción de tablas (4 tablas)
        └── scenes.json          # Traducción de escenas (12 escenas)
```

---

## Estado de la traducción

| Compendio | Estado | Notas |
|-----------|--------|-------|
| Actores | 🟡 Parcial | Nombres traducidos; falta biografía |
| Objetos | 🟡 Parcial | Nombres traducidos; falta descripción |
| Diarios | 🔴 En progreso | Estructura creada; falta texto |
| Tablas | 🟡 Parcial | Nombres y algunos resultados |
| Escenas | 🟡 Parcial | Nombres traducidos |


## Créditos

- Traducción base del sistema WFRP4e: [Txus5012](https://github.com/Txus5012/WFRP4e-Castellano)
- Power Behind the Throne: Cubicle 7 Games / Games Workshop
- Babele: [riccisi](https://gitlab.com/riccisi/foundryvtt-babele)
