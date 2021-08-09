# MC-Start
🌲 Lancer un serveur minecraft facilement avec nodejs. 

Pour télécharger ce module, entrez la commande `npm i @rome/mc-start`.
Pour utiliser ce module vous pouvez copier les codes ci-dessous.

**Comment se servir du module ?**
```javascript
const { MinecraftServer } = require("mc-start");
const server = await new MinecraftServer({
   language: "", // "en" or "fr" (default en)
   mode: "", // "jar", "script" or "command" (way to start the minecraft server)
   pathToJar: "", // If mode is "jar", path to .jar file,
   pathToScript : "", // If mode is "script", path to .sh or .bat file,
   command: "" // If mode is "command", the command wich be executed
});
const start = await server.start();
```

**Exemple d'utilisation :**
```javascript
const { MinecraftServer } = require("mc-start");
const server = await new MinecraftServer({
   language: "en", // "en" or "fr" (default en)
   mode: "jar", // "jar", "script" or "command" (way to start the minecraft server)
   pathToJar: "./spigot.jar", // If mode is "jar", path to .jar file,
   pathToScript : "", // If mode is "script", path to .sh or .bat file,
   command: "" // If mode is "command", the command wich be executed
});
const start = await server.start();
```

**Vous pouvez incorporez ce code a un site :**
```html
<div onclick="start()"> Demarrer le serveur <div/>
<script type="text/javascript">
   function start() {
      const { MinecraftServer } = require("mc-start");
      const server = await new MinecraftServer({
         language: "en", // "en" or "fr" (default en)
         mode: "jar", // "jar", "script" or "command" (way to start the minecraft server)
         pathToJar: "./spigot.jar", // If mode is "jar", path to .jar file,
         pathToScript : "", // If mode is "script", path to .sh or .bat file,
         command: "" // If mode is "command", the command wich be executed
      });
      const start = await server.start();
   }
<script/>
```
