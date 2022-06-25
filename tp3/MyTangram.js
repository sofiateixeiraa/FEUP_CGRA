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
 import {CGFobject, CGFappearance} from '../lib/CGF.js';

 export class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);

		this.diamond = new MyDiamond(this.scene);
		this.triangle = new MyTriangle(this.scene);
		this.parallelogram = new MyParallelogram(this.scene);
		this.triangleSmall = new MyTriangleSmall(this.scene);
		this.triangleBig = new MyTriangleBig(this.scene);
	}
    
	initMaterials() {

		// Verde Lima
		this.verdeLima = new CGFappearance(this.scene);
		this.verdeLima.setAmbient(0.1961, 0.8039, 0.1961, 1.0);
    	this.verdeLima.setDiffuse(0, 0, 0, 1.0);
    	this.verdeLima.setSpecular(0.1961, 0.8039, 0.1961, 1.0); 
    	this.verdeLima.setShininess(10.0);

		// Laranja
		this.laranja = new CGFappearance(this.scene);
    	this.laranja.setAmbient(1, 0.6471, 0, 1.0);
    	this.laranja.setDiffuse(0, 0, 0, 1.0);
    	this.laranja.setSpecular(1, 0.6471, 0, 1.0); 
    	this.laranja.setShininess(10.0);

		// Azul
		this.azul = new CGFappearance(this.scene);
    	this.azul.setAmbient(0, 0, 1, 1.0);
    	this.azul.setDiffuse(0, 0, 0, 1.0);
    	this.azul.setSpecular(0, 0, 1, 1.0); 
    	this.azul.setShininess(10.0);

		// Vermelho
		this.vermelho = new CGFappearance(this.scene);
    	this.vermelho.setAmbient(1, 0, 0, 1.0);
    	this.vermelho.setDiffuse(0, 0, 0, 1.0);
    	this.vermelho.setSpecular(1, 0, 0, 1.0); 
    	this.vermelho.setShininess(10.0);

		// Rosa Claro
		this.rosa = new CGFappearance(this.scene);
    	this.rosa.setAmbient(1, 0.7137, 0.7569, 1.0);
    	this.rosa.setDiffuse(0, 0, 0, 1.0);
    	this.rosa.setSpecular(1, 0.7137, 0.7569, 1.0);
    	this.rosa.setShininess(10.0);

		// Amarelo
		this.amarelo = new CGFappearance(this.scene);
    	this.amarelo.setAmbient(1, 1, 0, 1.0);
    	this.amarelo.setDiffuse(0, 0, 0, 1.0);
    	this.amarelo.setSpecular(1, 1, 0, 1.0); 
    	this.amarelo.setShininess(10.0);

		// Roxo
		this.roxo = new CGFappearance(this.scene);
    	this.roxo.setAmbient(0.6, 0.2, 0.6, 1.0);
    	this.roxo.setDiffuse(0, 0, 0, 1.0);
    	this.roxo.setSpecular(0.6, 0.2, 0.6, 1.0); 
    	this.roxo.setShininess(10.0);
	}

    display() {
		
		this.initMaterials();

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
	
		//this.verdeLima.apply();
		this.scene.customMaterial.apply();
		this.diamond.display();
	
		this.scene.popMatrix();
	
		// ---- BEGIN Primitive drawing section
		
		// Upper Big Triangle
		this.scene.pushMatrix();
		this.laranja.apply();
		this.scene.translate(-Math.sqrt(2), Math.sqrt(2), 0);
		this.scene.rotate(-3 * Math.PI/4, 0, 0, 1);
		this.triangleBig.display(); 
		this.scene.popMatrix();
		
		// Lower Big Triangle
		this.scene.pushMatrix();
		this.azul.apply();
		this.scene.translate(Math.sqrt(2), -0.5, 0);
		this.scene.rotate(Math.PI/4, 0, 0, 1);
		this.triangleBig.display(); 
		this.scene.popMatrix();
	
		//Parallelogram
		this.scene.pushMatrix();
		this.amarelo.apply();
		this.scene.translate(0, -2/3*Math.sqrt(8) - 2.03, 0);
		this.scene.rotate(Math.PI, 0, 1, 0);
		this.scene.rotate(Math.PI/2, 0, 0, 1);
		this.parallelogram.display(); 
		this.scene.popMatrix();
	
		// Upper Small Triangle
		this.scene.pushMatrix();
		this.vermelho.apply();
		this.scene.translate(Math.sqrt(8)+Math.sqrt(2)/2, Math.sqrt(2)+0.206, 0);
		this.scene.rotate(Math.PI/4, 0, 0, 1);
		this.triangleSmall.display(); 
		this.scene.popMatrix();
	
		// Lower Small Triangle
		this.scene.pushMatrix();
		this.roxo.apply();
		this.scene.translate(-0.3, -4.2, 0);
		this.scene.rotate(-3 * Math.PI/4, 0, 0, 1);
		this.triangleSmall.display(); 
		this.scene.popMatrix();
	
		// Triangle
		this.scene.pushMatrix();
		this.rosa.apply();
		this.scene.translate(2.4, 0.5, 0);
		this.scene.rotate(Math.PI/2, 0, 0, 1);
		this.triangle.display(); 
		this.scene.popMatrix();	
    }

	updateBuffers() {}

	// A classe Tangram é um objeto composto, corresponde a um conjunto de geometrias, por isso não tem as 
	// propriedades internas de vértices, indices e normais. Por esta razão, quando o método enable/disableNormalViz 
	// é invocado para o mesmo, vai procurar propriedades que não existem. A solução é fazer override desses métodos 
	// na classe, sendo que nelas chama o mesmo método para cada geometria (triangle, diamond, etc), como podemos ver
	// nas seguintes linhas de código.

	enableNormalViz() {

		this.diamond.enableNormalViz();
		this.triangle.enableNormalViz();
		this.triangleBig.enableNormalViz();
		this.triangleSmall.enableNormalViz();
		this.parallelogram.enableNormalViz();
	}

	disableNormalViz() {

		this.diamond.disableNormalViz();
		this.triangle.disableNormalViz();
		this.triangleBig.disableNormalViz();
		this.triangleSmall.disableNormalViz();
		this.parallelogram.disableNormalViz();
	}
}