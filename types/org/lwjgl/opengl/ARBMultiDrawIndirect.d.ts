import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBMultiDrawIndirect extends Object {
    static glMultiDrawArraysIndirect(paramarg0: number, paramarg1: number[], paramarg2: number, paramarg3: number): void;
    static glMultiDrawArraysIndirect(paramarg0: number, paramarg1: ByteBuffer, paramarg2: number, paramarg3: number): void;
    static glMultiDrawArraysIndirect(paramarg0: number, paramarg1: IntBuffer, paramarg2: number, paramarg3: number): void;
    static glMultiDrawArraysIndirect(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static glMultiDrawElementsIndirect(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number, paramarg4: number): void;
    static glMultiDrawElementsIndirect(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer, paramarg3: number, paramarg4: number): void;
    static glMultiDrawElementsIndirect(paramarg0: number, paramarg1: number, paramarg2: IntBuffer, paramarg3: number, paramarg4: number): void;
    static glMultiDrawElementsIndirect(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglMultiDrawArraysIndirect(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglMultiDrawElementsIndirect(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    constructor()
}