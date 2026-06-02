import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVScissorExclusive extends Object {
    static GL_SCISSOR_BOX_EXCLUSIVE_NV: number;
    static GL_SCISSOR_TEST_EXCLUSIVE_NV: number;
    static glScissorExclusiveArrayvNV(paramarg0: number, paramarg1: number[]): void;
    static glScissorExclusiveArrayvNV(paramarg0: number, paramarg1: IntBuffer): void;
    static glScissorExclusiveNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglScissorExclusiveArrayvNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}