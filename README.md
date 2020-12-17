# MC-Start
🌲 Lancer un serveur minecraft facilement avec nodejs. 

Pour utiliser ce module vous pouvez copier les codes si dessous mai n'oublier pas de remplacer `directory` par le répértoire où se situe votre fichier de lancement
et de replacer `fileName` par le nom de votre fichier de lancement *sans son extension* que vous préciserez en troisième argument (bat ou sh).

**Exemple d'utilisation:**
```javascript
const server = await new Server("directory", "fileName", "bat/sh");
const start = await server.start();
```

**Vous pouvez incorporez ce code a un site :**
```html
<div onclick="start()"> Demarrer le serveur <div/>
<script type="text/javascript">
   function start() {
      const server = await new Server("directory", "fileName", "bat/sh");
      const start = await server.start();
   }
<script/>
```
