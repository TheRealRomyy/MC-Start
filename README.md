### MC-Start
🌲 Lancer un serveur minecraft facilement avec nodejs. 

Exemple d'utilisation
```javascript
const server = await new Server("directory", "fileName", "bat/sh");
const start = await server.start();
```

Vous pouvez incorporez ce code a un site :
```html
<div onclick="start()"> Demarrer le serveur <div/>
<script type="text/javascript">
   function start() {
      const server = await new Server("directory", "fileName", "bat/sh");
      const start = await server.start();
   }
<script/>
```
