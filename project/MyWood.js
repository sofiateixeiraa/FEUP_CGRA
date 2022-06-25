import {CGFappearance, CGFobject} from '../lib/CGF.js';
import { MyCircle } from './MyCircle.js';
import { MyCylinder } from './MyCylinder.js';
/**
 * MyWood
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyWood extends CGFobject {

	constructor(scene, pos) {

		super(scene);

        this.cylinder = new MyCylinder(this.scene, 100);
        this.circle = new MyCircle(this.scene, 100);

        this.pos = pos;
        this.place = "station";
        this.wood = new CGFappearance(this.scene);
        this.wood.loadTexture('images/station/wood.jpg');
        this.wood.setTextureWrap('REPEAT', 'REPEAT');
	}

    display() {

        //tronco 1
        this.scene.pushMatrix();
        this.wood.apply();
        this.scene.translate(0.15, 0, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(0.15, 1, 0.15);
        this.cylinder.display();
        this.scene.popMatrix();

        //tampas
        //1
        this.scene.pushMatrix();
        this.wood.apply();
        this.scene.translate(0.15, 0, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.scale(0.15, 0.15, 0.15);
        this.circle.display();
        this.scene.popMatrix();

        //2
        this.scene.pushMatrix();
        this.wood.apply();
        this.scene.translate(0.15, 0, 1);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(0.15, 0.15, 0.15);
        this.circle.display();
        this.scene.popMatrix();

        //tronco 2
        this.scene.pushMatrix();
        this.wood.apply();
        this.scene.translate(-0.15, 0, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(0.15, 1, 0.15);
        this.cylinder.display();
        this.scene.popMatrix();

        //tampas
        //1
        this.scene.pushMatrix();
        this.wood.apply();
        this.scene.translate(-0.15, 0, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.scale(0.15, 0.15, 0.15);
        this.circle.display();
        this.scene.popMatrix();

        //2
        this.scene.pushMatrix();
        this.wood.apply();
        this.scene.translate(-0.15, 0, 1);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(0.15, 0.15, 0.15);
        this.circle.display();
        this.scene.popMatrix();

        //tronco 3
        this.scene.pushMatrix();
        this.wood.apply();
        this.scene.translate(0, 0.25, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(0.15, 1, 0.15);
        this.cylinder.display();
        this.scene.popMatrix();

        //tampas
        //1
        this.scene.pushMatrix();
        this.wood.apply();
        this.scene.translate(0, 0.25, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.scale(0.15, 0.15, 0.15);
        this.circle.display();
        this.scene.popMatrix();

        //2
        this.scene.pushMatrix();
        this.wood.apply();
        this.scene.translate(0, 0.25, 1);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(0.15, 0.15, 0.15);
        this.circle.display();
        this.scene.popMatrix();
    }
}