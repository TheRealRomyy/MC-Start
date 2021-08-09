export {
    errors,
    started
}

const errors = {
    modeRequired: "\"Mode\" is a required settings",
    choicesForMode: "\"mode\" setting have to be \"jar\", \"script\" or \"command\"",
    jarNotSpecified: "\"pathToJar\" is a required settings when mode is set to \"jar\"",
    scriptNotSpecified: "\"pathToScript\" is a required settings when mode is set to \"script\"",
    commandNotSpecified: "\"command\" is a required settings when mode is set to \"command\"",
    invalidPathToJar: "Specified path to jar file invalid !",
    unknownError: "An issues encoutred: ",
    invalidPathToScript: "Specified path to script invalid"
}

const started = {
    successStarted: "Minecraft Server rebooted !",
    successRebooted: "Minecraft server started !",
    commandExecuted: "Command has been executed !"
}