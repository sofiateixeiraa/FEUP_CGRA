import {CGFobject} from '../lib/CGF.js';
/**
* MyCylinder
* @constructor
* @param scene - Reference to MyScene object
*/
export class MyCylinder extends CGFobject {
    /**
     * @method constructor
     * @param  {CGFscene} scene - MyScene object
     * @param  {integer} slices - number of slices around Y axis
     * @param  {integer} stacks - number of stacks along Y axis, from the center to the poles (half of sphere)
     */

    constructor(scene, slices) {
      super(scene);
      this.slices = slices;
  
      this.initBuffers();
    }
  
    /**
     * @method initBuffers
     */
    
    initBuffers() {
      this.vertices = [];
      this.indices = [];
      this.normals = [];
      this.texCoords=[];

      var ang = 0;
      var alphaAng = 2 * Math.PI/this.slices;
      var textmap = 0;
      var textmapparts = 1/this.slices;

      for(var i = 0; i <= this.slices; i++){

        var cos_ang=Math.cos(ang);  //x
        var sin_ang=Math.sin(ang);  //z

        this.vertices.push(cos_ang, 0, -sin_ang); //ZX
        this.vertices.push(cos_ang, 1, -sin_ang); //Y
        this.normals.push(cos_ang, 0, -sin_ang, cos_ang, 0, -sin_ang);
        this.texCoords.push(textmap,1);
        this.texCoords.push(textmap,0);

        if (i != 0){
            this.indices.push((i*2), (i*2+1), (i*2-1));
            this.indices.push((i*2), (2*i-1), (2*i-2));
            this.indices.push((i*2-1), (i*2+1), (i*2));
            this.indices.push((2*i-2), (2*i-1), (i*2));
        }

        ang+=alphaAng;
        textmap+=textmapparts;
      }

      this.primitiveType = this.scene.gl.TRIANGLES;
      this.initGLBuffers();
    }

    updateSlices(complexity){
      this.slices = complexity; //complexity varies 0-50

      // reinitialize buffers
      this.initBuffers();
      this.initNormalVizBuffers();
  }
}