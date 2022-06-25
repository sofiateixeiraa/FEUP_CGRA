import {CGFobject} from '../lib/CGF.js';
import {MyTrackSegment} from './MyTrackSegment.js';
import { MyStationModel } from "./MyStationModel.js";

/**
   * @method constructor
   * @param  {CGFscene} scene - MyScene object
   * @param pointsList - array with the points of the track
   */

export class MyTrack extends CGFobject {

    constructor(scene, pointsList) {

        super(scene);

        this.segmentsList = [];
        this.pointsList = pointsList;

        for(let i=0; i < pointsList.length-1; i++) {

            this.segmentsList[i] = new MyTrackSegment(this.scene, pointsList[i], pointsList[i+1]);
        }

        this.station0 = new MyStationModel(this.scene);
        this.station1 = new MyStationModel(this.scene);
        this.station2 = new MyStationModel(this.scene);
    }

    display() {

        for(let i=0; i < this.segmentsList.length; i++) {

            this.segmentsList[i].display();

            if(i == 1){ 
                this.scene.pushMatrix();
                this.scene.translate(this.pointsList[i].x+9.5, 0, this.pointsList[i].z+3);
                this.scene.rotate(-Math.PI/2, 0, 1, 0);
                this.scene.scale(1.5, 1.5, 1.5);
                this.station0.display();
                this.scene.popMatrix();
            } else {

                if(i == 5){ 
                    this.scene.pushMatrix();
                    this.scene.translate(this.pointsList[i].x, 0, this.pointsList[i].z-9.5);
                    this.scene.scale(1.5, 1.5, 1.5);
                    this.station1.display();
                    this.scene.popMatrix();
                } else {

                    if(i == 11){ 
                        this.scene.pushMatrix();
                        this.scene.translate(this.pointsList[i].x-9.5, 0, this.pointsList[i].z-3);
                        this.scene.rotate(Math.PI/2, 0, 1, 0);
                        this.scene.scale(1.5, 1.5, 1.5);
                        this.station2.display();
                        this.scene.popMatrix();
                    }
                }
            }
        }
    }
}