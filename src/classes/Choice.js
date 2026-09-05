

export default class Choice {
    constructor(eventData, scene) {
        this.button1 = new Button(scene,200, 200, 'acceptsheet', 'acceptsheet', 'acceptsheet', () => {
            // Button action
        });
        this.eventData = eventData;
        this.scene = scene;
    }

}