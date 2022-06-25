/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
 import { MyDiamond } from "./MyDiamond.js";
 import { MyTriangle } from "./MyTriangle.js";
 import { MyParallelogram } from "./MyParallelogram.js";
 import { MyTriangleSmall } from "./MyTriangleSmall.js";
 import { MyTriangleBig } from "./MyTriangleBig.js";
 import {CGFobject} from '../lib/CGF.js';

 export class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);

		this.diamond = new MyDiamond(this.scene);
		this.triangle = new MyTriangle(this.scene);
		this.parallelogram = new MyParallelogram(this.scene);
		this.triangleSmall = new MyTriangleSmall(this.scene);
		this.triangleBig = new MyTriangleBig(this.scene);
	}
    
    display() {
		
		this.scene.pushMatrix();

		var rot = [
		  Math.cos(Math.PI /11), Math.sin(Math.PI /11), 0.0, 0.0,
		  -Math.sin(Math.PI / 11), Math.cos(Math.PI / 11), 0.0, 0.0,
		  0.0, 0.0, 1.0, 0.0,
		  0.0, 0.0, 0.0, 1.0
		];
	
		var tra = [
		  1.0, 0.0, 0.0, 0.0,
		  0.0, 1.0, 0.0, 0.0, 
		  0.0, 0.0, 1.0, 0.0,
		  -Math.sqrt(5.8)*2/3, 2.50, 0.0, 1.0
		];
	
		this.scene.multMatrix(tra);
		this.scene.multMatrix(rot);
	
		this.diamond.display();
	
		this.scene.popMatrix();
	
		// ---- BEGIN Primitive drawing section
		
		// Upper Big Triangle
		this.scene.pushMatrix();
		this.scene.translate(-Math.sqrt(2), Math.sqrt(2), 0);
		this.scene.rotate(-3 * Math.PI/4, 0, 0, 1);
		this.triangleBig.display(); 
		this.scene.popMatrix();
		
		// Lower Big Triangle
		this.scene.pushMatrix();
		this.scene.translate(Math.sqrt(2), -0.5, 0);
		this.scene.rotate(Math.PI/4, 0, 0, 1);
		this.triangleBig.display(); 
		this.scene.popMatrix();
	
		//Parallelogram
		this.scene.pushMatrix();
		this.scene.translate(0, -2/3*Math.sqrt(8) - 2.03, 0);
		this.scene.rotate(Math.PI, 0, 1, 0);
		this.scene.rotate(Math.PI/2, 0, 0, 1);
		this.parallelogram.display(); 
		this.scene.popMatrix();
	
		// Upper Small Triangle
		this.scene.pushMatrix();
		this.scene.translate(Math.sqrt(8)+Math.sqrt(2)/2, Math.sqrt(2)+0.206, 0);
		this.scene.rotate(Math.PI/4, 0, 0, 1);
		this.triangleSmall.display(); 
		this.scene.popMatrix();
	
		// Lower Small Triangle
		this.scene.pushMatrix();
		this.scene.translate(-0.3, -4.2, 0);
		this.scene.rotate(-3 * Math.PI/4, 0, 0, 1);
		this.triangleSmall.display(); 
		this.scene.popMatrix();
	
		// Triangle
		this.scene.pushMatrix();
		this.scene.translate(2.4, 0.5, 0);
		this.scene.rotate(Math.PI/2, 0, 0, 1);
		this.triangle.display(); 
		this.scene.popMatrix();	
    }
}