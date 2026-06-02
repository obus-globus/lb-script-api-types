import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class WGLNVVertexArrayRange extends Object {
    static nwglAllocateMemoryNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nwglFreeMemoryNV(paramarg0: number): void;
    static wglAllocateMemoryNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): ByteBuffer;
    static wglFreeMemoryNV(paramarg0: ByteBuffer): void;
    constructor()
}