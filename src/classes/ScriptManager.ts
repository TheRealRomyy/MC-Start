import { scriptOptionsInterface, langFileInterface } from "../interfaces";
import * as Servers from "../servers.json";
import { exec } from "child_process";
import { statSync, writeFileSync } from "fs";
import { resolve } from "path";

export class ScriptManager {

    public readonly langFile : langFileInterface;
    public readonly pathToScript : string;

    constructor(options : scriptOptionsInterface) {
        this.langFile = options.langFile;
        this.pathToScript = options.pathToScript;
    }

    async start() : Promise<void> {
        
        let status = "Start";

        const resolvedPathToScript = await resolve(this.pathToScript);
        if(!resolvedPathToScript) throw new Error(this.langFile.errors.invalidPathToScript);
    
        try { statSync(resolvedPathToScript) } catch(error) {
            if(error.code === 'ENOENT') if(!resolvedPathToScript) throw new Error(this.langFile.errors.invalidPathToScript);
        }

        try {

            const isAnShScript : boolean = resolvedPathToScript.slice(resolvedPathToScript.length - 2) === "sh" ? true : false;

            exec(`${isAnShScript ? "sh" : ""} ${isAnShScript}`);

            if((Servers as string[]).includes(resolvedPathToScript)) status = "Restart";

            if(status === "Restart") console.log(this.langFile.started.successRebooted);
            else console.log(this.langFile.started.successStarted);

            if(!Servers.includes(resolvedPathToScript)) Servers.push(resolvedPathToScript);

            writeFileSync('../servers.json', JSON.stringify(Servers));

        } catch(error) {
            throw new Error(this.langFile.errors.unknownError + error);
        }
    }
}