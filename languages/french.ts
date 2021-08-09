export {
    errors,
    started
}

const errors = {
    modeRequired: "\"Mode\" est un parametre requis",
    choicesForMode: "\"mode\" est un parametre qui doit être egal \"jar\", \"script\" ou \"command\"",
    jarNotSpecified: "\"pathToJar\" est un parametre requis quand mode est definis sur \"jar\"",
    scriptNotSpecified: "\"pathToScript\" est un parametre requis quand mode est definis sur \"script\"",
    commandNotSpecified: "\"command\" est un parametre requis quand mode est definis sur \"command\"",
    invalidPathToJar: "Le chemin specifie est invalide !",
    unknownError: "Une erreur a ete rencontree: ",
    invalidPathToScript: "Le chemin specifie est invalide"
}

const started = {
    successStarted: "Serveur minecraft re-démarré !",
    successRebooted: "Serveur minecraft démarré !",
    commandExecuted: "La commande a bien été exécutée !"
}