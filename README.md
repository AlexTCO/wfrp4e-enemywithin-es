# WFRP4e - El Enemigo Interior (Castellano)

Traducción al castellano, mediante **Babele**, de los módulos oficiales de la campaña **El Enemigo Interior** para **Warhammer Fantasy Roleplay 4.ª edición** en Foundry VTT:

- **El Poder tras el Trono** (*Power Behind the Throne*, `wfrp4e-pbtt`): ✅ terminado
- **La Rata Cornuda** (*The Horned Rat*, `wfrp4e-horned-rat`): ✅ terminado
- **Imperio en Ruinas** (*Empire in Ruins*, `wfrp4e-empire-ruins`): 🔴 pendiente

Los textos siguen las ediciones oficiales en castellano de cada libro y su Compendio. La terminología de reglas (habilidades, talentos, Estados…) sigue la traducción base de [Txus5012/WFRP4e-Castellano](https://github.com/Txus5012/WFRP4e-Castellano).

---

## Requisitos

- [Warhammer Fantasy Roleplay 4th Edition](https://foundryvtt.com/packages/wfrp4e) (sistema)
- [WFRP4e Core Module](https://foundryvtt.com/packages/wfrp4e-core)
- [Babele](https://foundryvtt.com/packages/babele), versión 2.9.1 o superior
- [WFRP4e-Castellano de Txus5012](https://github.com/Txus5012/WFRP4e-Castellano) (traducción base del sistema)
- Los módulos oficiales (de pago) que quieras traducir:
  - [Power Behind the Throne](https://foundryvtt.com/packages/wfrp4e-pbtt)
  - [The Horned Rat](https://foundryvtt.com/packages/wfrp4e-horned-rat)
  - [Empire in Ruins](https://foundryvtt.com/packages/wfrp4e-empire-ruins)

Compatible con Foundry VTT v13 (verificado en v14).

---

## Instalación

1. Instálalo desde Foundry con la URL del manifiesto:
   `https://raw.githubusercontent.com/AlexTCO/wfrp4e-enemywithin-es/main/module.json`
   También puedes descargar el repositorio y copiarlo en `[foundry-data]/modules/wfrp4e-pbtt-es/`. La carpeta debe llamarse así, porque es el identificador del módulo.
2. Activa en tu mundo **Babele**, **WFRP4e-Castellano**, los módulos oficiales de la campaña y este módulo.
3. Asegúrate de que el idioma de Foundry está en español.

---

## Estructura del módulo

```
wfrp4e-pbtt-es/
├── module.json              # Manifiesto del módulo
├── babele-register.js       # Registro en Babele (carga la carpeta compendium/)
├── lang/es.json
├── README.md
└── compendium/              # Un fichero por compendio oficial
    ├── wfrp4e-pbtt.{actors,items,journals,scenes,tables}.json
    ├── wfrp4e-horned-rat.{actors,items,journals,scenes,tables}.json
    └── wfrp4e-empire-ruins.{actors,items,journals,scenes,tables}.json
```

---

## Estado de la traducción

### El Poder tras el Trono: ✅ terminado

| Compendio | Contenido | Estado |
|-----------|-----------|--------|
| Diarios | 19 entradas, 142 páginas | ✅ Traducido |
| Actores | 92 PNJ | ✅ Traducido (los nombres propios se mantienen) |
| Objetos | 53 | ✅ Traducido |
| Tablas | 4 | ✅ Traducido |
| Escenas | 12 | ✅ Traducido |

### La Rata Cornuda: ✅ terminado

| Compendio | Contenido | Estado |
|-----------|-----------|--------|
| Diarios | 36 entradas, 121 páginas (libro y Compendio) | ✅ Traducido |
| Actores | 126 PNJ y criaturas, con biografía | ✅ Traducido |
| Objetos | 107 | ✅ Traducido |
| Tablas | 18 | ✅ Traducido |
| Escenas | 14 (nombres y rótulos de mapas) | ✅ Traducido |

### Imperio en Ruinas: 🔴 pendiente

| Compendio | Contenido | Estado |
|-----------|-----------|--------|
| Diarios | 27 entradas, 150 páginas (libro y Compendio) | 🔴 Sin traducir |
| Actores | 158 | 🔴 Sin traducir (solo las carpetas están en español) |
| Objetos | 17 | 🔴 Sin traducir (falta reexportar con descripciones) |
| Tablas | 16 | 🔴 Sin traducir |
| Escenas | 7 | 🔴 Sin traducir |

---

## Pendiente

- **Imperio en Ruinas:** traducir el módulo entero. El orden previsto es objetos, tablas y actores, y después los diarios capítulo a capítulo.
- Corregir las erratas de las carpetas de actores de Imperio en Ruinas («rocha», «ominiosas», «Principe», «Conclave»).
- Reexportar los objetos de Imperio en Ruinas con sus descripciones (ahora el fichero solo trae los nombres).

---

## Convenciones de traducción

- Se usa el texto de los PDF oficiales en castellano. Si contradice los datos del módulo inglés, mandan los datos del módulo.
- Terminología de reglas de WFRP4e-Castellano: Empatía, Seguir rastros, Escalar, `Chequeo Complicado (–10) de Percepción`… Los Estados (`@Condition`), Síntomas y Corrupción usan la clave en español.
- «Personajes» en lugar de «PJs», y comillas latinas «».
- Los encabezados que sirven de ancla a enlaces (`#anchor`) se mantienen en inglés, para no romper esos enlaces.

---

## Créditos

- Traducción base del sistema WFRP4e: [Txus5012](https://github.com/Txus5012/WFRP4e-Castellano)
- El Enemigo Interior: Cubicle 7 Entertainment / Games Workshop
- Babele: [riccisi](https://gitlab.com/riccisi/foundryvtt-babele)
