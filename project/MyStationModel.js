import {CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyCylinder } from './MyCylinder.js';
import { MyQuad } from './MyQuad.js';
import { MyStationCube } from './MyStationCube.js';
import { MyWood } from './MyWood.js';
/**
 * MyStationModel
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyStationModel extends CGFobject {

	constructor(scene, option) {

		super(scene);

        this.option = option;

        this.quad = new MyQuad(this.scene);
        this.postes = new MyCylinder(this.scene, 100);
                                                    
        this.cube = new MyStationCube(this.scene);

        this.wood = new MyWood(this.scene, [0, 1.025, 3.4]);
                        
        this.portaDupla = new CGFappearance(this.scene);
        this.portaDupla.loadTexture('images/station/double_door.jpg');
        this.portaDupla.setTextureWrap('REPEAT', 'REPEAT');

        this.porta = new CGFappearance(this.scene);
        this.porta.loadTexture('images/station/door.jpg');
        this.porta.setTextureWrap('REPEAT', 'REPEAT');

        this.janela = new CGFappearance(this.scene);
        this.janela.loadTexture('images/station/window.jpg');
        this.janela.setTextureWrap('REPEAT', 'REPEAT');

        //laranja
        this.laranja = new CGFappearance(this.scene);
    	this.laranja.setAmbient(1, 0.6471, 0, 1.0);
    	this.laranja.setDiffuse(1, 0.6471, 0, 1.0);
    	this.laranja.setSpecular(1, 0.6471, 0, 1.0); 
    	this.laranja.setShininess(5.0);

        //branco
        this.branco = new CGFappearance(this.scene);
    	this.branco.setAmbient(1, 1, 1, 1.0);
    	this.branco.setDiffuse(1, 1, 1, 1.0);
    	this.branco.setSpecular(1, 1, 1, 1.0); 
    	this.branco.setShininess(5.0);

        //cinzento
        this.cinzento = new CGFappearance(this.scene);
    	this.cinzento.setAmbient(0.502, 0.502, 0.502, 1.0);
    	this.cinzento.setDiffuse(0.502, 0.502, 0.502, 1.0);
    	this.cinzento.setSpecular(0.502, 0.502, 0.502, 1.0); 
    	this.cinzento.setShininess(5.0);
	}

    display() {

        //base
        this.scene.pushMatrix();
        this.cinzento.apply();
        this.scene.scale(12, 1.75, 9);
        this.cube.display();
        this.scene.popMatrix();

        //casa principal
        this.scene.pushMatrix();
        this.branco.apply();
        this.scene.translate(0, 2.375, 0);
        this.scene.scale(4, 3, 4);
        this.cube.display();
        this.scene.popMatrix();

        //telhado casa principal
        this.scene.pushMatrix();
        this.laranja.apply();
        this.scene.translate(0, 3.875, 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.scene.scale(Math.sqrt(8), Math.sqrt(8), 3.99);
        this.cube.display();
        this.scene.popMatrix();

        //casa lateral esquerda
        this.scene.pushMatrix();
        this.branco.apply();
        this.scene.translate(-3.26, 2.125, 0);
        this.scene.scale(2.5, 2.5, 4);
        this.cube.display();
        this.scene.popMatrix();

        //telhado casa lateral esquerda
        this.scene.pushMatrix();
        this.laranja.apply();
        this.scene.translate(-3.25, 3.375, 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.scene.scale(Math.sqrt(3.125), Math.sqrt(3.125), 3.99);
        this.cube.display();
        this.scene.popMatrix();

        //casa lateral direita
        this.scene.pushMatrix();
        this.branco.apply();
        this.scene.translate(3.26, 2.125, 0);
        this.scene.scale(2.5, 2.5, 4);
        this.cube.display();
        this.scene.popMatrix();

        //telhado casa lateral direita
        this.scene.pushMatrix();
        this.laranja.apply();
        this.scene.translate(3.25, 3.375, 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.scene.scale(Math.sqrt(3.125), Math.sqrt(3.125), 3.99);
        this.cube.display();
        this.scene.popMatrix();

        //cobertura
        this.scene.pushMatrix();
        this.laranja.apply();
        this.scene.translate(0, 2.18, 2.8);
        this.scene.rotate(Math.PI/24, 1, 0, 0);
        this.scene.scale(8.5, 0.1, 1.8);
        this.cube.display();
        this.scene.popMatrix();

        //janelas
        //1 - casa grande
        this.scene.pushMatrix();
        this.janela.apply();
        this.scene.translate(1, 3.025, 2.01);
        this.quad.display();
        this.scene.popMatrix();

        //2 - casa grande
        this.scene.pushMatrix();
        this.janela.apply();
        this.scene.translate(-1, 3.025, 2.01);
        this.quad.display();
        this.scene.popMatrix();

        //3 - casa pequena da esquerda
        this.scene.pushMatrix();
        this.janela.apply();
        this.scene.translate(-3.875, 2.8, 2.01);
        this.scene.scale(0.75, 0.75, 1);
        this.quad.display();
        this.scene.popMatrix();

        //4 - casa pequena da esquerda
        this.scene.pushMatrix();
        this.janela.apply();
        this.scene.translate(-2.625, 2.8, 2.01);
        this.scene.scale(0.75, 0.75, 1);
        this.quad.display();
        this.scene.popMatrix();

        //5 - casa pequena da direita
        this.scene.pushMatrix();
        this.janela.apply();
        this.scene.translate(3.875, 2.8, 2.01);
        this.scene.scale(0.75, 0.75, 1);
        this.quad.display();
        this.scene.popMatrix();

        //6 - casa pequena da direita
        this.scene.pushMatrix();
        this.janela.apply();
        this.scene.translate(2.625, 2.8, 2.01);
        this.scene.scale(0.75, 0.75, 1);
        this.quad.display();
        this.scene.popMatrix();

        //portas
        //1
        this.scene.pushMatrix();
        this.portaDupla.apply();
        this.scene.translate(0, 1.525, 2.01);
        this.scene.scale(1.3, 1.3, 1);
        this.quad.display();
        this.scene.popMatrix();

        //2
        this.scene.pushMatrix();
        this.porta.apply();
        this.scene.translate(3.25, 1.525, 2.01);
        this.scene.scale(0.65, 1.3, 1);
        this.quad.display();
        this.scene.popMatrix();

        //3
        this.scene.pushMatrix();
        this.porta.apply();
        this.scene.translate(-3.25, 1.525, 2.01);
        this.scene.scale(0.65, 1.3, 1);
        this.quad.display();
        this.scene.popMatrix();

        //postes
        //1
        this.scene.pushMatrix();
        this.laranja.apply();
        this.scene.translate(-4.2, 0.875, 3.5);
        this.scene.scale(0.05, 1.2, 0.05);
        this.postes.display();
        this.scene.popMatrix();

        //2
        this.scene.pushMatrix();
        this.laranja.apply();
        this.scene.translate(-2, 0.875, 3.5);
        this.scene.scale(0.05, 1.2, 0.05);
        this.postes.display();
        this.scene.popMatrix();

        //3
        this.scene.pushMatrix();
        this.laranja.apply();
        this.scene.translate(2, 0.875, 3.5);
        this.scene.scale(0.05, 1.2, 0.05);
        this.postes.display();
        this.scene.popMatrix();

        //4
        this.scene.pushMatrix();
        this.laranja.apply();
        this.scene.translate(4.2, 0.875, 3.5);
        this.scene.scale(0.05, 1.2, 0.05);
        this.postes.display();
        this.scene.popMatrix();

        //madeira
        if(this.option != "no"){
            this.scene.pushMatrix();
            this.scene.translate(0, 1.025, 3.4);
            this.wood.display();
            this.scene.popMatrix();
        }   
    }
}