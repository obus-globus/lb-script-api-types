import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class GLXSGIXSwapBarrier extends Object {
    static glXBindSwapBarrierSGIX(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glXQueryMaxSwapBarriersSGIX(paramarg0: number, paramarg1: number, paramarg2: number[]): boolean;
    static glXQueryMaxSwapBarriersSGIX(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): boolean;
    static nglXQueryMaxSwapBarriersSGIX(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor()
}