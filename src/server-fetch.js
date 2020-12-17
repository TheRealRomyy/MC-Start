const StartedServers = require("../src/started.json");
const { exec } = require("child_process");
const { resolve, sep } = require("path");
const { statSync } = require("fs");
const chalk = require("chalk");

module.exports = class Start {
    constructor(dir, fileName, protocol) {
        this.dir = dir;
        this.protocol = protocol;
        this.fileName = fileName;
        this.start = async function() {

            let stop = false;
            let status = "Start";

            let resolvePath = await resolve(dir);
            let completePath = resolvePath + sep + fileName + "." + protocol;

            try { statSync(completePath) } catch(error) {
              if(error.code === 'ENOENT') {
                sendError("Le chemin '" + chalk.bold(completePath) + "' n'existe pas"); 
                stop = true;
              };
            };

            if(stop) return;
            if(StartedServers.includes(completePath)) status = "Restart";
    
            try {
    
                exec("cd " + resolvePath + " &&" + (protocol === "sh" ? " sh" : " ") + fileName + "." + protocol);

                if(StartedServers.includes(completePath)) console.log(chalk.blueBright("Serveur minecraft re-démarré !"));
                else console.log(chalk.green("Serveur minecraft démarré !"));

                if(!StartedServers.includes(completePath)) StartedServers.push(completePath);
    
            } catch(error) {

                sendError(chalk.bold("Une erreur est survenue: ") + error);
            
            };

            return status;
        };
    };
};

function sendError(error) {
    console.log(chalk.red(chalk.bold("Error: ") + error));
};