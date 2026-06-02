import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVBindlessMultiDrawIndirectCount extends Object {
    static glMultiDrawArraysIndirectBindlessCountNV(paramarg0: number, paramarg1: ByteBuffer, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static glMultiDrawArraysIndirectBindlessCountNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static glMultiDrawElementsIndirectBindlessCountNV(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static glMultiDrawElementsIndirectBindlessCountNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static nglMultiDrawArraysIndirectBindlessCountNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nglMultiDrawElementsIndirectBindlessCountNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    constructor()
}