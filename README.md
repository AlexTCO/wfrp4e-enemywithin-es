# WFRP4e - La Sombra Tras el Trono (Castellano)

Traducción al castellano del módulo **Power Behind the Throne** para **Warhammer Fantasy Roleplay 4th Edition** en Foundry VTT.

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

---

## Cómo contribuir / completar la traducción

### Flujo de trabajo recomendado

1. **Exportar el compendio original** usando el módulo [Babele Translation Files Generator](https://foundryvtt.com/packages/babele-translation-files-generator) para obtener todos los nombres exactos de las entradas (los `"keys"` del JSON deben coincidir exactamente con los nombres en inglés del módulo original).

2. **Para los diarios** (`journals.json`): el texto de las páginas va en el campo `"content"` dentro de cada `"page"`. El contenido es HTML.

3. **Para actores** (`actors.json`): la biografía va en `"biography"` y las notas del DJ en `"gmnotes"`. También se puede añadir traducción de `items` embebidos si los actores los tienen.

4. **Para objetos** (`items.json`): la descripción va en `"description"`.

### ¡IMPORTANTE! — Claves de entrada

Las claves del JSON (por ejemplo `"Ar-Ulric Emil Valgeir"`) deben coincidir **exactamente** con el nombre en inglés que aparece en el módulo PBTT original. Si el nombre tiene algún carácter especial, hay que respetarlo. Si Babele no encuentra la clave, no aplica la traducción.

La forma más fiable de obtener las claves correctas es usar el **Babele Translation Files Generator** directamente en Foundry con el módulo PBTT instalado.

### Consejo para los diarios

Los diarios de PBTT tienen muchas páginas. El contenido va en HTML. Puedes dejar el `"content"` vacío `""` para que Babele no sobreescriba el texto original, o rellenarlo con la traducción en HTML.

---

## Terminología (siguiendo a Txus5012 y la edición de Devir)

| Inglés | Castellano |
|--------|-----------|
| Power Behind the Throne | La Sombra Tras el Trono |
| Middenheim | Middenheim |
| Graf | Graf (sin traducir) |
| Purple Hand | Mano Púrpura |
| Jade Sceptre | Cetro de Jade |
| Carnival | Carnaval |
| Ulric | Ulric |
| Ar-Ulric | Ar-Ulric |
| The Enemy Within | El Enemigo Interior |
| GM | DJ (Director de Juego) |
| NPC | PNJ (Personaje No Jugador) |
| Witch Hunter | Cazador de Brujas |
| Watch | La Guardia |
| Grognard Box | Caja Gruñón |
| Journal Entry | Entrada de Diario |
| Handout | Documento del DJ |
| Powers That Be | Los que Mandan |

---

## Créditos

- Traducción base del sistema WFRP4e: [Txus5012](https://github.com/Txus5012/WFRP4e-Castellano)
- Power Behind the Throne: Cubicle 7 Games / Games Workshop
- Babele: [riccisi](https://gitlab.com/riccisi/foundryvtt-babele)
