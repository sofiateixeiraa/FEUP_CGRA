import {CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyPlane } from './MyPlane.js';

/**
   * @method constructor
   * @param  {CGFscene} scene - MyScene object
   * @param pI - initial point of the segment
   * @param pF - final point of the segment 
   */

export class MyTrackSegment extends CGFobject {

    constructor(scene, pI, pF) {

        super(scene);
        this.pI = pI;
        this.pF = pF;

        this.texture = new CGFappearance(this.scene);
        this.texture.loadTexture('images/tracks.png');
        this.texture.setTextureWrap('REPEAT', 'REPEAT');
        
        this.distance = Math.sqrt((this.pF.x-this.pI.x)*(this.pF.x-this.pI.x)+(this.pF.z-this.pI.z)*(this.pF.z-this.pI.z));
        this.angle = (Math.PI/2) + this.angleBetween([pI.x,pI.z], [pF.x,pF.z]);
        this.plane = new MyPlane(this.scene);
    }

    display() {

        this.scene.pushMatrix();
        this.texture.apply();
        this.scene.translate(this.pI.x,0, this.pI.z);
        this.scene.rotate(-this.angle, 0, 1, 0);
        this.scene.translate(0, 0, -this.distance/2);
        this.scene.scale(4, 1, this.distance);
        this.scene.rotate(Math.PI*0.5, 0, 1, 0);
        this.scene.rotate(-Math.PI*0.5, 1, 0, 0);
        this.plane.display();
        this.scene.popMatrix();
    }

    angleBetween(a, b) {

        this.dif = vec2.fromValues(0,0);
        vec2.subtract(this.dif, b, a);
        return this.dif[0] < 0 ? Math.PI + Math.atan(this.dif[1]/this.dif[0]) : Math.atan(this.dif[1]/this.dif[0]);
    }
}