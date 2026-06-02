import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../../java/nio/LongBuffer.d.ts'
import type { ShortBuffer } from '../../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../../org/lwjgl/PointerBuffer.d.ts'
export class LibCStdlib extends Object {
    static aligned_alloc(paramarg0: number, paramarg1: number): ByteBuffer;
    static aligned_free(paramarg0: ByteBuffer): void;
    static aligned_free(paramarg0: DoubleBuffer): void;
    static aligned_free(paramarg0: FloatBuffer): void;
    static aligned_free(paramarg0: IntBuffer): void;
    static aligned_free(paramarg0: LongBuffer): void;
    static aligned_free(paramarg0: ShortBuffer): void;
    static aligned_free(paramarg0: PointerBuffer): void;
    static calloc(paramarg0: number, paramarg1: number): ByteBuffer;
    static free(paramarg0: ByteBuffer): void;
    static free(paramarg0: DoubleBuffer): void;
    static free(paramarg0: FloatBuffer): void;
    static free(paramarg0: IntBuffer): void;
    static free(paramarg0: LongBuffer): void;
    static free(paramarg0: ShortBuffer): void;
    static free(paramarg0: PointerBuffer): void;
    static malloc(paramarg0: number): ByteBuffer;
    static naligned_alloc(paramarg0: number, paramarg1: number): number;
    static naligned_free(paramarg0: number): void;
    static ncalloc(paramarg0: number, paramarg1: number): number;
    static nfree(paramarg0: number): void;
    static nmalloc(paramarg0: number): number;
    static nrealloc(paramarg0: number, paramarg1: number): number;
    static realloc(paramarg0: ByteBuffer, paramarg1: number): ByteBuffer;
    constructor()
}