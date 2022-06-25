import {CGFobject, CGFtexture} from '../lib/CGF.js';
import { MyUnitCubeQuad } from './MyUnitCubeQuad.js';
import { MyWood } from './MyWood.js';
/**
 * MyBox
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyBox extends CGFobject {

	constructor(scene) {

		super(scene);
        this.wood =  new MyWood(this.scene, [0,0, 0]);
        this.hadWood = false;
        this.cube = new MyUnitCubeQuad(this.scene, [new CGFtexture(this.scene, "./images/train/box.jpg"), 
                                                    new CGFtexture(this.scene, "./images/train/box.jpg"), 
                                                    new CGFtexture(this.scene, "./images/train/box.jpg"),
                                                    new CGFtexture(this.scene, "./images/train/box.jpg"),
                                                    new CGFtexture(this.scene, "./images/train/box.jpg"),
                                                    new CGFtexture(this.scene, "./images/train/box.jpg")]);
                                                         
	}

    display() {

        //base
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(2.25, 1.25, 0.1);
        this.cube.display();
        this.scene.popMatrix();

        //direita
        this.scene.pushMatrix();
        this.scene.translate(1.075, 0.5, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.scale(1.25, 1, 0.1);
        this.cube.display();
        this.scene.popMatrix();

        //esquerda
        this.scene.pushMatrix();
        this.scene.translate(-1.075, 0.5, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.scale(1.25, 1, 0.1);
        this.cube.display();
        this.scene.popMatrix();

        //fundo
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0.575);
        this.scene.scale(2.25, 1, 0.1);
        this.cube.display();
        this.scene.popMatrix();

        //frente
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, -0.575);
        this.scene.scale(2.25, 1, 0.1);
        this.cube.display();
        this.scene.popMatrix();

        if(this.hasWood){
            this.scene.pushMatrix();
            this.scene.translate(this.pos[0], this.pos[1], this.pos[2]);
            this.wood.display();
            this.scene.popMatrix();
        }
    }
}