

export default class Choice {
    constructor(eventData, scene) {
        button1 = new Button(scene,200, 200, 'acceptsheet', 'acceptsheet', 'acceptsheet', () => {
0    }  );
        this.eventData = eventData;
        this.scene = scene;
    }

}