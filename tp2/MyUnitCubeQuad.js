import {CGFobject} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";
/**
 * MyUniteCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */

export class MyUniteCubeQuad extends CGFobject {
	constructor(scene) {
		super(scene);
        this.quad = new MyQuad(this.scene);
	}

    display() {

        // Front
        this.scene.pushMatrix();
		this.scene.translate(0, 0, 0);
		this.quad.display(); 
		this.scene.popMatrix();

        // Right
        this.scene.pushMatrix();
		this.scene.translate(5, 0, -5);
		this.scene.rotate(Math.PI/2, 0, 1, 0);
		this.quad.display(); 
		this.scene.popMatrix();

        // Back
        this.scene.pushMatrix();
		this.scene.translate(0, 0, -10);
		this.quad.display(); 
		this.scene.popMatrix();

        //Left
        this.scene.pushMatrix();
		this.scene.translate(-5, 0, -5);
		this.scene.rotate(Math.PI/2, 0, 1, 0);
		this.quad.display(); 
		this.scene.popMatrix();

        // Top
        this.scene.pushMatrix();
		this.scene.translate(0, 5, -5);
		this.scene.rotate(Math.PI/2, 1, 0, 0);
		this.quad.display(); 
		this.scene.popMatrix();

        // Bottom
        this.scene.pushMatrix();
		this.scene.translate(0, -5, -5);
		this.scene.rotate(Math.PI/2, 1, 0, 0);
		this.quad.display(); 
		this.scene.popMatrix();
    }
}

