import { CGFobject } from '../lib/CGF.js';
import { MyTrainModel } from './MyTrainModel.js';

/**
   * @method constructor
   * @param  {CGFscene} scene - MyScene object
   * @param trackList - track points
*/

export class MyAnimatedTrain extends CGFobject {

    constructor(scene, trackList) {

        super(scene);

        this.i = 0;
        this.waitingTime = 0;

        this.distanceVariation = 0;

        this.trackList = trackList;
        this.length = trackList.length;

        this.position = {x: trackList[0].x, y: 0, z: trackList[0].z};
        this.orientation = (Math.PI/2) + this.angleBetween([trackList[0].x,trackList[0].z], [trackList[1].x,trackList[1].z]);
        this.speed = 2;

        this.train = new MyTrainModel(scene);
    }

    advance() { 
        this.speed = 2;
    }

    trainStopped() {

        if(this.speed == 0) {
            return true;
        } else {
            return false;
        }
    }

    update(t) { 

        this.time = t * 0.001;
        this.deltaTime = this.time - this.lastTime;
        
        if(this.deltaTime < 100) {
            
            this.directionalVector = {x: Math.sin(this.orientation), y: 0, z: -Math.cos(this.orientation)};
            this.deltaPosition = {x: this.directionalVector.x * this.speed * this.deltaTime, y: 0, z: this.directionalVector.z * this.speed * this.deltaTime};
            
            this.position.x += this.deltaPosition.x;
            this.position.z += this.deltaPosition.z;
          
            this.distance = Math.sqrt((this.trackList[(this.i+1)%this.length].x-this.trackList[(this.i)%this.length].x)*(this.trackList[(this.i+1)%this.length].x-this.trackList[(this.i)%this.length].x)+(this.trackList[(this.i+1)%this.length].z-this.trackList[(this.i)%this.length].z)*(this.trackList[(this.i+1)%this.length].z-this.trackList[(this.i)%this.length].z));
            this.distanceVariation = Math.sqrt((this.position.x-this.trackList[(this.i)%this.length].x)*(this.position.x-this.trackList[(this.i)%this.length].x)+(this.position.z-this.trackList[(this.i)%this.length].z)*(this.position.z-this.trackList[(this.i)%this.length].z));

            if(this.distance <= this.distanceVariation) {

                if(this.trackList[this.i].type == "station"){ 
                    this.speed = 0;
                }
                this.i = (this.i + 1) % this.length;
                this.orientation = (Math.PI/2) + this.angleBetween([this.trackList[this.i].x,this.trackList[this.i].z], [this.trackList[(this.i+1)%this.length].x,this.trackList[(this.i+1)%this.length].z]);
            }
        }

        this.lastTime = this.time;
    }

    display() {

        this.scene.pushMatrix();
        this.scene.translate(this.position.x, 0, this.position.z);
        this.scene.rotate(-this.orientation, 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.train.display();
        this.scene.popMatrix();
    }

    angleBetween(a, b) {

        this.dif = vec2.fromValues(0,0);
        vec2.subtract(this.dif, b, a);
        return this.dif[0] < 0 ? Math.PI + Math.atan(this.dif[1]/this.dif[0]) : Math.atan(this.dif[1]/this.dif[0]);
    }
}