import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVBindlessMultiDrawIndirect extends Object {
    static glMultiDrawArraysIndirectBindlessNV(paramarg0: number, paramarg1: ByteBuffer, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glMultiDrawArraysIndirectBindlessNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glMultiDrawElementsIndirectBindlessNV(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static glMultiDrawElementsIndirectBindlessNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nglMultiDrawArraysIndirectBindlessNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglMultiDrawElementsIndirectBindlessNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    constructor()
}