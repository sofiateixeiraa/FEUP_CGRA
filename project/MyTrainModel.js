import {CGFobject, CGFtexture, CGFappearance} from '../lib/CGF.js';
import { MyUnitCubeQuad } from './MyUnitCubeQuad.js';
import { MyCircle } from './MyCircle.js';
import { MyCylinder } from './MyCylinder.js';
import { MySphere } from './MySphere.js';
import { MyCrane } from './MyCrane.js';
import { MyBox } from './MyBox.js';

/**
   * @method constructor
   * @param scene - MyScene object
*/

export class MyTrainModel extends CGFobject {

    constructor(scene) {
        super(scene);

        this.cilindro = new MyCylinder(this.scene, 100);
        this.circulo = new MyCircle(this.scene, 100);
        this.esfera = new MySphere(this.scene, 100, 100);

        this.crane = new MyCrane(this.scene);
        this.box = new MyBox(this.scene);

        this.base = new MyUnitCubeQuad(this.scene, [new CGFtexture(this.scene, "./images/train/red.jpg"), 
                                    new CGFtexture(this.scene, "./images/train/red.jpg"), 
                                    new CGFtexture(this.scene, "./images/train/red.jpg"),
                                    new CGFtexture(this.scene, "./images/train/red.jpg"),
                                    new CGFtexture(this.scene, "./images/train/red.jpg"),
                                    new CGFtexture(this.scene, "./images/train/red.jpg")]);

        this.cabine = new MyUnitCubeQuad(this.scene, [new CGFtexture(this.scene, "./images/train/black_metal.jpg"), 
                                    new CGFtexture(this.scene, "./images/train/black_metal.jpg"), 
                                    new CGFtexture(this.scene, "./images/train/black_metal.jpg"),
                                    new CGFtexture(this.scene, "./images/train/black_metal.jpg"),
                                    new CGFtexture(this.scene, "./images/train/black_metal.jpg"),
                                    new CGFtexture(this.scene, "./images/train/black_metal.jpg")]);

        this.janela = new MyUnitCubeQuad(this.scene, [new CGFtexture(this.scene, "./images/train/black_metal.jpg"), 
                                    new CGFtexture(this.scene, "./images/train/window.png"), 
                                    new CGFtexture(this.scene, "./images/train/black_metal.jpg"),
                                    new CGFtexture(this.scene, "./images/train/window.png"),
                                    new CGFtexture(this.scene, "./images/train/black_metal.jpg"),
                                    new CGFtexture(this.scene, "./images/train/black_metal.jpg")]);

        this.blackMetal = new CGFappearance(this.scene);
        this.blackMetal.loadTexture('images/train/black_metal.jpg');
        this.blackMetal.setTextureWrap('REPEAT', 'REPEAT');

        this.red = new CGFappearance(this.scene);
        this.red.loadTexture('images/train/red.jpg');
        this.red.setTextureWrap('REPEAT', 'REPEAT');

        this.smile = new CGFappearance(this.scene);
        this.smile.loadTexture('images/train/smile.jpg');
        this.smile.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {

        //guindaste
        this.scene.pushMatrix();
        this.scene.translate(0, 4.5, -0.9);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.crane.display();
        this.scene.popMatrix();

        //caixa de madeira
        this.scene.pushMatrix();
        this.scene.translate(0, 2, -3);
        this.box.display();
        this.scene.popMatrix();

        //paralelipípedo de base
        this.scene.pushMatrix();
        this.scene.translate(0, 1.5, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.scale(7.5, 1, 2.5);
        this.base.display();
        this.scene.popMatrix();

        //corpo cilíndrico
        this.scene.pushMatrix();
        this.blackMetal.apply();
        this.scene.translate(0, 2.9, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(0.9, 3.5, 0.9);
        this.cilindro.display();
        this.scene.popMatrix();

        //chaminé
        this.scene.pushMatrix();
        this.red.apply();
        this.scene.translate(0, 3.8, 2.5);
        this.scene.scale(0.2,0.4,0.2);
        this.cilindro.display();
        this.scene.popMatrix();

        //tampa do corpo cilíndrico
        this.scene.pushMatrix();
        this.smile.apply();
        this.scene.translate(0, 2.9, 3.5);
        this.scene.scale(0.9, 0.9, 0.2);
        this.scene.rotate(-Math.PI/12, 1, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.esfera.display();
        this.scene.popMatrix();

        //cabine
        this.scene.pushMatrix();
        this.scene.translate(0, 3.25, -0.9);
        this.scene.scale(2, 2.5, 1.8);
        this.cabine.display();
        this.scene.popMatrix();

        //janela da cabine
        this.scene.pushMatrix();
        this.scene.translate(0, 3.5, -0.9);
        this.scene.scale(2.1, 1.2, 1);
        this.janela.display();
        this.scene.popMatrix();

        //rodas
        //1
        this.scene.pushMatrix();
        this.blackMetal.apply();
        this.scene.translate(1.25, 0.75, 2);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(0.75, 0.2, 0.75);
        this.cilindro.display();
        this.scene.popMatrix();

        //2
        this.scene.pushMatrix();
        this.blackMetal.apply();
        this.scene.translate(1.25, 0.75, -2);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(0.75, 0.2, 0.75);
        this.cilindro.display();
        this.scene.popMatrix();

        //3
        this.scene.pushMatrix();
        this.blackMetal.apply();
        this.scene.translate(-1.25, 0.75, 2);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.scale(0.75, 0.2, 0.75);
        this.cilindro.display();
        this.scene.popMatrix();

        //4
        this.scene.pushMatrix();
        this.blackMetal.apply();
        this.scene.translate(-1.25, 0.75, -2);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.scale(0.75, 0.2, 0.75);
        this.cilindro.display();
        this.scene.popMatrix();
        
        //tampas
        //1
        this.scene.pushMatrix();
        this.blackMetal.apply();
        this.scene.translate(1.45, 0.75, 2);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(0.75, 1, 0.75);
        this.circulo.display();
        this.scene.popMatrix();

        //2
        this.scene.pushMatrix();
        this.blackMetal.apply();
        this.scene.translate(1.45, 0.75, -2);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(0.75, 1, 0.75);
        this.circulo.display();
        this.scene.popMatrix();

        //3
        this.scene.pushMatrix();
        this.blackMetal.apply();
        this.scene.translate(-1.45, 0.75, 2);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.scale(0.75, 1, 0.75);
        this.circulo.display();
        this.scene.popMatrix();

        //4
        this.scene.pushMatrix();
        this.blackMetal.apply();
        this.scene.translate(-1.45, 0.75, -2);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.scale(0.75, 1, 0.75);
        this.circulo.display();
        this.scene.popMatrix();

        //1 traseira
        this.scene.pushMatrix();
        this.blackMetal.apply();
        this.scene.translate(1.25, 0.75, 2);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.scale(0.75, 1, 0.75);
        this.circulo.display();
        this.scene.popMatrix();

        //2 traseira
        this.scene.pushMatrix();
        this.blackMetal.apply();
        this.scene.translate(1.25, 0.75, -2);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.scale(0.75, 1, 0.75);
        this.circulo.display();
        this.scene.popMatrix();

        //3 traseira
        this.scene.pushMatrix();
        this.blackMetal.apply();
        this.scene.translate(-1.25, 0.75, 2);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(0.75, 1, 0.75);
        this.circulo.display();
        this.scene.popMatrix();

        //4 traseira
        this.scene.pushMatrix();
        this.blackMetal.apply();
        this.scene.translate(-1.25, 0.75, -2);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(0.75, 1, 0.75);
        this.circulo.display();
        this.scene.popMatrix();
    }
}