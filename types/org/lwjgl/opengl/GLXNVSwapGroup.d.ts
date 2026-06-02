import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class GLXNVSwapGroup extends Object {
    static glXBindSwapBarrierNV(paramarg0: number, paramarg1: number, paramarg2: number): boolean;
    static glXJoinSwapGroupNV(paramarg0: number, paramarg1: number, paramarg2: number): boolean;
    static glXQueryFrameCountNV(paramarg0: number, paramarg1: number, paramarg2: number[]): boolean;
    static glXQueryFrameCountNV(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): boolean;
    static glXQueryMaxSwapGroupsNV(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number[]): boolean;
    static glXQueryMaxSwapGroupsNV(paramarg0: number, paramarg1: number, paramarg2: IntBuffer, paramarg3: IntBuffer): boolean;
    static glXQuerySwapGroupNV(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number[]): boolean;
    static glXQuerySwapGroupNV(paramarg0: number, paramarg1: number, paramarg2: IntBuffer, paramarg3: IntBuffer): boolean;
    static glXResetFrameCountNV(paramarg0: number, paramarg1: number): boolean;
    static nglXQueryFrameCountNV(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nglXQueryMaxSwapGroupsNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nglXQuerySwapGroupNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
}