import { optionInterface, langFileInterface } from "./interfaces";
import { JarManager } from "./classes/JarManager"
import { CommandManager } from "./classes/CommandManager"
import { ScriptManager } from "./classes/ScriptManager"
import * as French from "../languages/french";
import * as English from "../languages/english";

export class MinecraftServer {

    public readonly language: string;
    public readonly mode: string;
    public readonly pathToJar: string;
    public readonly pathToScript: string;
    public readonly command: string;
    public readonly langFile : langFileInterface;

    constructor(options : optionInterface) {
        this.language = options.language;
        if(!options.language) this.language = "en";

        if(this.language === "en") this.langFile = English;
        else if(this.language === "fr") this.langFile = French;

        this.mode = options.mode;
        if(!options.mode) throw new Error(this.langFile.errors.modeRequired);
        if(options.mode !== "jar" && options.mode !== "script" && options.mode !== "command") throw new Error(this.langFile.errors.choicesForMode);

        this.pathToJar = options.pathToJar;
        if(!options.pathToJar && options.mode === "jar") throw new Error(this.langFile.errors.jarNotSpecified);
        this.pathToScript = options.pathToScript;
        if(!options.pathToScript && options.mode === "script") throw new Error(this.langFile.errors.scriptNotSpecified);
        this.command = options.command;
        if(!options.command && options.mode === "command") throw new Error(this.langFile.errors.commandNotSpecified);
    }

    async start() : Promise<void> {

        switch(this.mode) {
            case "jar":  {
                const jarManager : JarManager = new JarManager({
                    langFile: this.langFile,
                    pathToJar: this.pathToJar
                });

                jarManager.start()
                break;
            }
            case "command": {
                const commandManager : CommandManager = new CommandManager({
                    langFile: this.langFile,
                    command: this.command
                });

                commandManager.execute()
                break;
            }
            case "script": {
                const scriptManager : ScriptManager = new ScriptManager({
                    langFile: this.langFile,
                    pathToScript: this.pathToScript
                });

                scriptManager.start()
                break;
            }
        }
    }
}