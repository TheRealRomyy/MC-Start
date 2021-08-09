import { jarOptionsInterface, langFileInterface } from "../interfaces";
import * as Servers from "../servers.json";
import { exec } from "child_process";
import { statSync, writeFileSync } from "fs";
import { resolve } from "path";

export class JarManager {

    public readonly langFile : langFileInterface;
    public readonly pathToJar : string;

    constructor(options : jarOptionsInterface) {
        this.langFile = options.langFile;
        this.pathToJar = options.pathToJar;
    }

    async start() : Promise<void> {
        
        let status = "Start";

        const resolvedPathToJar = await resolve(this.pathToJar);
        if(!resolvedPathToJar) throw new Error(this.langFile.errors.invalidPathToJar);
    
        try { statSync(resolvedPathToJar) } catch(error) {
            if(error.code === 'ENOENT') if(!resolvedPathToJar) throw new Error(this.langFile.errors.invalidPathToJar);
        }

        try {

            exec("java -jar " + resolvedPathToJar);

            if((Servers as string[]).includes(resolvedPathToJar)) status = "Restart";

            if(status === "Restart") console.log(this.langFile.started.successRebooted);
            else console.log(this.langFile.started.successStarted);

            if(!Servers.includes(resolvedPathToJar)) Servers.push(resolvedPathToJar);

            writeFileSync('../servers.json', JSON.stringify(Servers));

        } catch(error) {
            throw new Error(this.langFile.errors.unknownError + error);
        }
    }
}