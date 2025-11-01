export default class Chat{
    constructor(scene,message) {
        this.message = Chat.formatText(message, 22,6);
        this.index = 0; 
        this.length = this.message.length;
        this.scene = scene;
0    }




 showMessage() 
 {

this.text = this.scene.add.bitmapText(282, 94, 'okok', '',  16).setDepth(1).setTint('#000000');
Chat.typeText(this.scene,this.text, this.message[this.index],18);

 }

 check(){
  if (this.index == this.length -1){
    return true;
 }
 else return false;
 }

 

 destroyer() {
       
            this.text.destroy();
            this.text = null;
        
    }

    static typeText(scene, textObject, message, speed = 50) {
  let index = 0;

  const timer = scene.time.addEvent({
    delay: speed,
    loop: true,
    callback: () => {
      try {
        // 🧱 Vérif 1 : si l'objet a été détruit ou effacé
        if (
          !textObject ||
          textObject.scene == null ||
          !textObject.setText || // méthode supprimée
          textObject.destroyed === true ||
          textObject.active === false
        ) {
          timer.remove();
          return;
        }

        // 🧠 On écrit la lettre suivante
        textObject.setText(message.slice(0, index));
        index++;

        // 📜 Fin du message → on arrête proprement
        if (index > message.length) {
          timer.remove();
        }
      } catch (err) {
        // 💥 Si jamais setText plante (ex : objet détruit pendant la frame)
        timer.remove();
      }
    },
  });

  return timer; // utile si tu veux le stopper manuellement
}









static formatText(text, maxLength = 22, maxLinesPerPage = 6) {
    // 1️⃣ Supprime les accents

     let normalizedText = text.replace(/[’‘]/g, "'");
    normalizedText = normalizedText.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // 2️⃣ Prépare les structures
    const words = normalizedText.split(' ');
    const pages = [];
    let currentPage = [];
    let line = '';

    for (let word of words) {

        // 🧩 Si le mot est une commande spéciale :
        if (word === '/l') {
            // force un saut de ligne
            currentPage.push(line.trim());
            line = '';
            continue;
        }

        if (word === '/p') {
            // force un saut de page
            if (line.trim().length > 0) currentPage.push(line.trim());
            if (currentPage.length > 0) pages.push(currentPage.join('\n'));
            currentPage = [];
            line = '';
            continue;
        }

        // 💬 Comportement normal : ajout mot par mot
        if ((line + word).length + 1 > maxLength) {
            currentPage.push(line.trim());
            line = '';
        }
        line += word + ' ';

        // 📄 Si la page atteint la limite de lignes
        if (currentPage.length >= maxLinesPerPage) {
            pages.push(currentPage.join('\n'));
            currentPage = [];
            line = '';
        }
    }

    // 4️⃣ Fin du texte : ajoute la dernière ligne restante
    if (line.trim().length > 0) currentPage.push(line.trim());

    // 5️⃣ Et la dernière page
    if (currentPage.length > 0) {
        pages.push(currentPage.join('\n'));
    }

    return pages; // ["page1", "page2", ...]
}
}