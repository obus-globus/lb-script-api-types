import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVFence extends Object {
    static GL_ALL_COMPLETED_NV: number;
    static GL_FENCE_CONDITION_NV: number;
    static GL_FENCE_STATUS_NV: number;
    static glDeleteFencesNV(paramarg0: number): void;
    static glDeleteFencesNV(paramarg0: number[]): void;
    static glDeleteFencesNV(paramarg0: IntBuffer): void;
    static glFinishFenceNV(paramarg0: number): void;
    static glGenFencesNV(): number;
    static glGenFencesNV(paramarg0: number[]): void;
    static glGenFencesNV(paramarg0: IntBuffer): void;
    static glGetFenceiNV(paramarg0: number, paramarg1: number): number;
    static glGetFenceivNV(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetFenceivNV(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glIsFenceNV(paramarg0: number): boolean;
    static glSetFenceNV(paramarg0: number, paramarg1: number): void;
    static glTestFenceNV(paramarg0: number): boolean;
    static nglDeleteFencesNV(paramarg0: number, paramarg1: number): void;
    static nglGenFencesNV(paramarg0: number, paramarg1: number): void;
    static nglGetFenceivNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}