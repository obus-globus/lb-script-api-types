import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBDrawIndirect extends Object {
    static GL_DRAW_INDIRECT_BUFFER: number;
    static GL_DRAW_INDIRECT_BUFFER_BINDING: number;
    static glDrawArraysIndirect(paramarg0: number, paramarg1: number[]): void;
    static glDrawArraysIndirect(paramarg0: number, paramarg1: ByteBuffer): void;
    static glDrawArraysIndirect(paramarg0: number, paramarg1: IntBuffer): void;
    static glDrawArraysIndirect(paramarg0: number, paramarg1: number): void;
    static glDrawElementsIndirect(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glDrawElementsIndirect(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): void;
    static glDrawElementsIndirect(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glDrawElementsIndirect(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglDrawArraysIndirect(paramarg0: number, paramarg1: number): void;
    static nglDrawElementsIndirect(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}