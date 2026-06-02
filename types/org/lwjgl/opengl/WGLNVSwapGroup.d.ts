import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class WGLNVSwapGroup extends Object {
    static nwglQueryFrameCountNV(paramarg0: number, paramarg1: number): number;
    static nwglQueryMaxSwapGroupsNV(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nwglQuerySwapGroupNV(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static wglBindSwapBarrierNV(paramarg0: number, paramarg1: number): boolean;
    static wglJoinSwapGroupNV(paramarg0: number, paramarg1: number): boolean;
    static wglQueryFrameCountNV(paramarg0: number, paramarg1: number[]): boolean;
    static wglQueryFrameCountNV(paramarg0: number, paramarg1: IntBuffer): boolean;
    static wglQueryMaxSwapGroupsNV(paramarg0: number, paramarg1: number[], paramarg2: number[]): boolean;
    static wglQueryMaxSwapGroupsNV(paramarg0: number, paramarg1: IntBuffer, paramarg2: IntBuffer): boolean;
    static wglQuerySwapGroupNV(paramarg0: number, paramarg1: number[], paramarg2: number[]): boolean;
    static wglQuerySwapGroupNV(paramarg0: number, paramarg1: IntBuffer, paramarg2: IntBuffer): boolean;
    static wglResetFrameCountNV(paramarg0: number): boolean;
    constructor()
}