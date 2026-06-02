import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class ARBMultiBind extends Object {
    static glBindBuffersBase(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glBindBuffersBase(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glBindBuffersRange(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: PointerBuffer, paramarg4: PointerBuffer): void;
    static glBindBuffersRange(paramarg0: number, paramarg1: number, paramarg2: IntBuffer, paramarg3: PointerBuffer, paramarg4: PointerBuffer): void;
    static glBindImageTextures(paramarg0: number, paramarg1: number[]): void;
    static glBindImageTextures(paramarg0: number, paramarg1: IntBuffer): void;
    static glBindSamplers(paramarg0: number, paramarg1: number[]): void;
    static glBindSamplers(paramarg0: number, paramarg1: IntBuffer): void;
    static glBindTextures(paramarg0: number, paramarg1: number[]): void;
    static glBindTextures(paramarg0: number, paramarg1: IntBuffer): void;
    static glBindVertexBuffers(paramarg0: number, paramarg1: number[], paramarg2: PointerBuffer, paramarg3: number[]): void;
    static glBindVertexBuffers(paramarg0: number, paramarg1: IntBuffer, paramarg2: PointerBuffer, paramarg3: IntBuffer): void;
    static nglBindBuffersBase(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglBindBuffersRange(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nglBindImageTextures(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglBindSamplers(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglBindTextures(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglBindVertexBuffers(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    constructor()
}