interface optionInterface {
    language: string,
    mode: string,
    pathToJar: string,
    pathToScript: string,
    command: string
}

interface jarOptionsInterface {
    langFile: langFileInterface,
    pathToJar: string
}

interface commandOptionsInterface {
    langFile: langFileInterface,
    command: string
}

interface scriptOptionsInterface {
    langFile: langFileInterface,
    pathToScript: string
}

interface langFileInterface {
    errors: errorsInterface,
    started: startedInterface
}

interface errorsInterface {
    modeRequired: string,
    choicesForMode: string,
    jarNotSpecified: string,
    scriptNotSpecified: string,
    commandNotSpecified: string,
    invalidPathToJar: string,
    unknownError: string,
    invalidPathToScript: string
}

interface startedInterface {
    successStarted: string,
    successRebooted: string,
    commandExecuted: string
}

export { optionInterface, jarOptionsInterface, langFileInterface, commandOptionsInterface, scriptOptionsInterface }