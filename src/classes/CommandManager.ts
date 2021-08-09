import { commandOptionsInterface, langFileInterface } from "../interfaces";
import { exec } from "child_process";

export class CommandManager {

    public readonly langFile : langFileInterface;
    public readonly command : string;

    constructor(options : commandOptionsInterface) {
        this.langFile = options.langFile;
        this.command = options.command;
    }

    async execute() : Promise<void> {

        try {

            exec(this.command);

            console.log(this.langFile.started.commandExecuted);

        } catch(error) {
            throw new Error(this.langFile.errors.unknownError + error);
        }
    }
}