import {CGFappearance, CGFtexture} from '../lib/CGF.js';
import { MyMovements } from './MyMovements.js';
import { MyCircle } from './MyCircle.js';
import { MyCylinder } from './MyCylinder.js';
import { MySphere } from './MySphere.js';
import { MyUnitCubeQuad } from './MyUnitCubeQuad.js';
import { MyWood } from './MyWood.js';
/**
 * MyCrane
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyCrane extends MyMovements {

	constructor(scene) {

		super(scene);
        this.cylinder = new MyCylinder(this.scene, 100);
        this.sphere = new MySphere(this.scene, 100, 100);
        this.circle = new MyCircle(this.scene, 100);
        this.wood = new MyWood(this.scene, [0, 0, 0]);
        this.cube = new MyUnitCubeQuad(this.scene, [new CGFtexture(this.scene, "./images/train/black_metal.jpg"), 
                                                    new CGFtexture(this.scene, "./images/train/black_metal.jpg"), 
                                                    new CGFtexture(this.scene, "./images/train/black_metal.jpg"),
                                                    new CGFtexture(this.scene, "./images/train/black_metal.jpg"),
                                                    new CGFtexture(this.scene, "./images/train/black_metal.jpg"),
                                                    new CGFtexture(this.scene, "./images/train/black_metal.jpg")]);

    
        this.red = new CGFappearance(this.scene);
        this.red.loadTexture('images/train/red.jpg');
        this.red.setTextureWrap('REPEAT', 'REPEAT');
        this.upperLim = 5;
        this.lowerLim = 2;
        this.color=[0.5,0.8,1, 1.0];
        this.ang = 0;
        this.inclinacao = 0;
        this.pos = [0 ,this.upperLim, 0];
        this.turnLeft = 1;
        this.turnRight = 1;
	}

    display() {
        
        this.scene.pushMatrix();
            this.scene.rotate(this.ang,0,1,0);
           // this.scene.rotate(this.inclinacao, 0,0,1) 
            //cabo que apanha a madeira
            this.scene.pushMatrix();
            this.scene.translate(-3*Math.sin(-Math.PI/2.75 + this.inclinacao) -0.4, Math.cos(Math.PI/2.75)*3-1 + 3*Math.sin(this.inclinacao), 0);
            if(this.hasWood){
                this.scene.pushMatrix();
                this.scene.translate(this.pos[0], -2, this.pos[2]);
                this.wood.display();
                this.scene.popMatrix();
            }
            this.scene.scale(0.1, 4, 0.1);
            this.cube.display();
           
            this.scene.popMatrix();

            //esfera que liga os braços
            this.scene.pushMatrix();
            this.red.apply();
            this.scene.translate(0, 1.125, 0);
            this.scene.scale(0.35, 0.35, 0.35);
            this.sphere.display();
            this.scene.popMatrix();

            //braço base
            this.scene.pushMatrix();
            this.red.apply();
            this.scene.scale(0.25, 1, 0.25);
            this.cylinder.display();
            this.scene.popMatrix();

            //braço intermédio
            this.scene.pushMatrix();
            this.red.apply();
            this.scene.translate(0, 1.125, 0);
            this.scene.rotate(-Math.PI/2.75 + this.inclinacao, 0, 0, 1);
            this.scene.scale(0.15, 3, 0.15);
            this.cylinder.display();
            this.scene.popMatrix();

            //tampa do braço intermédio
            this.scene.pushMatrix();
            this.red.apply();
            this.scene.translate(Math.sin(Math.PI/2.75)*3, Math.cos(Math.PI/2.75)*3+1.125, 0);
            this.scene.rotate(-Math.PI/2.75, 0, 0, 1);
            this.scene.scale(0.15, 0.15, 0.15);
            this.circle.display();
            this.scene.popMatrix();

            
        this.scene.popMatrix();
    }
}