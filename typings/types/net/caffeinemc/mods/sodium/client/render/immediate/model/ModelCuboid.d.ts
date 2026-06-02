import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
export class ModelCuboid extends Object {
    static FACE_NEG_X: number;
    static FACE_NEG_Y: number;
    static FACE_NEG_Z: number;
    static FACE_POS_X: number;
    static FACE_POS_Y: number;
    static FACE_POS_Z: number;
    static NUM_CUBE_FACES: number;
    static NUM_CUBE_VERTICES: number;
    static NUM_FACE_VERTICES: number;
    static VERTEX_X0_Y0_Z0: number;
    static VERTEX_X0_Y0_Z1: number;
    static VERTEX_X0_Y1_Z0: number;
    static VERTEX_X0_Y1_Z1: number;
    static VERTEX_X1_Y0_Z0: number;
    static VERTEX_X1_Y0_Z1: number;
    static VERTEX_X1_Y1_Z0: number;
    static VERTEX_X1_Y1_Z1: number;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: boolean, arg12: number, arg13: number, arg14: Direction[])
    // private cullMask: number;
    normals: number[];
    originX: number;
    originY: number;
    originZ: number;
    positions: number[];
    sizeX: number;
    sizeY: number;
    sizeZ: number;
    textures: number[];
    shouldDrawFace(arg0: number): boolean;
}