// Registro Babele para WFRP4e - La Sombra Tras el Trono (Power Behind the Throne)
// Basado en la estructura de traducción de Txus5012/WFRP4e-Castellano

Hooks.once("babele.init", (babele) => {
    console.log("PBTT-ES: babele.init ejecutado");
    babele.register({
        module: "wfrp4e-pbtt-es",
        lang: "es",
        dir: "compendium",
    });
});

Hooks.once("ready", () => {
    console.log("PBTT-ES: babele ready ejecutado");
});
