export default class Chat{
    constructor(scene,message) {
        this.message = Chat.formatText(message, 23,6);
        this.index = 0; 
        this.length = this.message.length;
        this.scene = scene;
0    }




 showMessage() 
 {

this.text = this.scene.add.bitmapText(274, 94, 'okok', '',  16).setDepth(1).setTint('#000000');
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
  // 1️⃣ Nettoyage
  let normalizedText = text.replace(/[’‘]/g, "'");
  normalizedText = normalizedText.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const words = normalizedText.split(' ');
  const pages = [];
  let currentPage = [];
  let line = '';

  for (let word of words) {
    // Commandes spéciales
    if (word === '/l') {
      currentPage.push(line.trim());
      line = '';
      continue;
    }

    if (word === '/p') {
      if (line.trim()) currentPage.push(line.trim());
      if (currentPage.length) pages.push(currentPage.join('\n'));
      currentPage = [];
      line = '';
      continue;
    }

    // 🚨 Vérifie si le mot dépasse la longueur max
    if ((line + word).length > maxLength) {
      currentPage.push(line.trim());
      line = word + ' ';
    } else {
      line += word + ' ';
    }

    // 🚨 Si on atteint la dernière ligne autorisée ET qu’on s’apprête à en rajouter une de plus → nouvelle page
    if (currentPage.length === maxLinesPerPage) {
      pages.push(currentPage.join('\n'));
      currentPage = [];
      //line = '';
    }
  }

  // 🔚 Ajoute le reste
  if (line.trim()) currentPage.push(line.trim());
  if (currentPage.length) pages.push(currentPage.join('\n'));

  return pages;
}
}