### MC-Start
🌲 Lancer un serveur minecraft facilement avec nodejs. 

Exemple d'utilisation
```javascript
const server = await new Server("C:/Users/33767/Desktop/Dév/Minecraft/LocalServer 1.12.2", "start", "bat");
const start = await server.start();
```

Vous pouvez incorporez ce code a un site :
```html
<div onclick="start()"> Demarrer le serveur <div/>
<script type="text/javascript">
   function start() {
      const server = await new Server("C:/Users/33767/Desktop/Dév/Minecraft/LocalServer 1.12.2", "start", "bat");
      const start = await server.start();
   }
<script/>
```
