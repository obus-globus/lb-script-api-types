import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AMDSamplePositions extends Object {
    static GL_SUBSAMPLE_DISTANCE_AMD: number;
    static glSetMultisamplefvAMD(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glSetMultisamplefvAMD(paramarg0: number, paramarg1: number, paramarg2: FloatBuffer): void;
    static nglSetMultisamplefvAMD(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}