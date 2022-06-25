import { CGFscene, CGFcamera, CGFaxis, CGFappearance } from "../lib/CGF.js";
import { MyAnimatedTrain } from "./MyAnimatedTrain.js";
import { MyCubeMap } from "./MyCubeMap.js";
import { MyPlane } from "./MyPlane.js";
import { MySphere } from "./MySphere.js";
import { MyTrack } from "./MyTrack.js";

/**
* MyScene
* @constructor
*/
export class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);
        
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.displayAxis = true;
        this.plane = new MyPlane(this, 20, 0,1,0,1);
        this.planeTexture = new CGFappearance(this);
        this.planeTexture.loadTexture('images/grass.jpg');
        this.planeTexture.setTextureWrap('REPEAT', 'REPEAT');
        this.background1 = new MyCubeMap(this, 0);
        this.background2 = new MyCubeMap(this, 1);
        this.backgrounds = [this.background1, this.background2];
        this.backgroundIDs = {'Default': 0, 'Custom': 1};
        
        this.selectedBackground = 0;

        this.pointsList = [];

        for(var j=0; j <= 20; j++) {

            var x = Math.cos(j*((Math.PI*2)/20))*10;
            var z = Math.sin(-j*((Math.PI*2)/20))*10;

            if(j == 4 || j == 9 || j == 19){
                this.pointsList.push({x: x, z: z, type: "station"});
            }else{
                this.pointsList.push({x: x, z: z, type: "simple"});
            }
        }

        this.track = new MyTrack(this, this.pointsList);
        
        this.sphere = new MySphere(this, 10, 10);
        this.world = new CGFappearance(this);
        this.world.loadTexture('images/earth.jpg');
        this.world.setTextureWrap('REPEAT', 'REPEAT');

        this.train = new MyAnimatedTrain(this, this.pointsList);
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30,30,30), vec3.fromValues(0, 0, 0));
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setEmission(0,0,0,1);
        this.setShininess(10.0);
    }

    checkKeys(){
        var keysPressed=false;
        
        if (this.gui.isKeyPressed("KeyW")) {
            keysPressed=true;
            this.train.train.crane.tilt(Math.PI/32);
        }

        if (this.gui.isKeyPressed("KeyS")) {
            keysPressed=true;
            this.train.train.crane.tilt(-Math.PI/32);
        }
        if (this.gui.isKeyPressed("KeyA")) {
            keysPressed=true;
            this.train.train.crane.turn(-Math.PI/32);
        }
        if (this.gui.isKeyPressed("KeyD")) {
            keysPressed=true;
            this.train.train.crane.turn(Math.PI/32);
        }
        if (this.gui.isKeyPressed("KeyR")) {
            keysPressed=true;
            this.train.train.crane.reset();
        }

        if (this.gui.isKeyPressed("KeyL")) {
            keysPressed=true;
            this.train.train.crane.fall();
        }

        if (this.gui.isKeyPressed("KeyP")) {
            keysPressed=true;
            
            if(this.train.trainStopped()){
                                    
                if(this.train.i == 0){
                                                 
                    this.track.station0.option = "no";
                    this.track.station0.wood.place = "crane";
                    this.track.station1.option = "yes";
                    this.track.station1.wood.place = "station"; 
                    this.track.station2.option = "yes";
                    this.track.station2.wood.place = "station";

                } else if(this.train.i == 5) {
                                
                    this.track.station1.option = "no";
                    this.track.station1.wood.place = "crane";
                    this.track.station0.option = "yes";
                    this.track.station0.wood.place = "station";
                    this.track.station2.option = "yes";
                    this.track.station2.wood.place = "station"; 

                } else if(this.train.i == 10) {
                                
                    this.track.station2.option = "no";
                    this.track.station2.wood.place = "crane";
                    this.track.station0.option = "yes";
                    this.track.station0.wood.place = "station"; 
                    this.track.station1.option = "yes";
                    this.track.station1.wood.place = "station";                
                }
 
                this.train.advance();   
            }
        }

        if (this.gui.isKeyPressed("KeyC")) {
            keysPressed=true;
            this.train.advance();
        }
    }

    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        this.checkKeys();
        this.train.update(t);
        this.train.train.crane.update();
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        this.pushMatrix();
        this.planeTexture.apply();
        this.translate(0, -0.01, 0);
        this.scale(50,1,50);
        this.rotate(-Math.PI*0.5, 1,0,0);
        this.plane.display();
        this.popMatrix();
        // ---- END Primitive drawing section

        this.pushMatrix();
        this.scale(0.5, 0.5, 0.5);
        this.track.display();
        this.popMatrix();

        this.pushMatrix();
        this.scale(0.5, 0.5, 0.5);
        this.train.display();
        this.popMatrix();

        this.pushMatrix();
        this.backgrounds[this.selectedBackground].display();
        this.popMatrix();
    }
}