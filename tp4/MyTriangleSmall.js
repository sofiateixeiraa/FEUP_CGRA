import {CGFobject} from '../lib/CGF.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTriangleSmall extends CGFobject {
	constructor(scene, color)  {
		super(scene);
		this.initBuffers(color);
	}
	
	initBuffers(color) {
		this.vertices = [
			-1, 0, 0,	//0
			1, 0, 0,	//1
			0, 1, 0,	//2

			-1, 0, 0,	//3
			1, 0, 0,	//4
			0, 1, 0		//5
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			2, 1, 0,

			3, 4, 5,
			5, 4, 3
		];

		this.normals = [
			0, 0, 1,	// 0 front
			0, 0, 1,	// 1 front
			0, 0, 1,	// 2 front

			0, 0, -1,	// 0 back
			0, 0, -1,	// 1 back
			0, 0, -1	// 2 back
		];
		 // triangulo pequeno vermelho
		 if (color === 'red'){
            this.texCoords=[
                0.25, 0.75,
                0.5, 0.5,
                0.75, 0.75,
				0.25, 0.75,
                0.5, 0.5,
                0.75, 0.75,
            ];
        }

        // triangulo pequeno roxo
        if (color === 'purple'){
            this.texCoords=[
                0, 0,
                0.25, 0.25,
                0, 0.5,
				0, 0,
                0.25, 0.25,
                0, 0.5,
            ];
        }

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}