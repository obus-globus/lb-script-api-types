import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../../java/nio/LongBuffer.d.ts'
import type { ShortBuffer } from '../../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LibCString extends Object {
    static memcpy(paramarg0: Object | null, paramarg1: Object | null): number;
    static memcpy(paramarg0: number[], paramarg1: number[]): number;
    static memcpy(paramarg0: number[], paramarg1: number[]): number;
    static memcpy(paramarg0: number[], paramarg1: number[]): number;
    static memcpy(paramarg0: number[], paramarg1: number[]): number;
    static memcpy(paramarg0: ByteBuffer, paramarg1: ByteBuffer): number;
    static memcpy(paramarg0: DoubleBuffer, paramarg1: DoubleBuffer): number;
    static memcpy(paramarg0: FloatBuffer, paramarg1: FloatBuffer): number;
    static memcpy(paramarg0: IntBuffer, paramarg1: IntBuffer): number;
    static memcpy(paramarg0: LongBuffer, paramarg1: LongBuffer): number;
    static memcpy(paramarg0: ShortBuffer, paramarg1: ShortBuffer): number;
    static memcpy(paramarg0: number[], paramarg1: number[]): number;
    static memcpy(paramarg0: number[], paramarg1: number[]): number;
    static memmove(paramarg0: Object | null, paramarg1: Object | null): number;
    static memmove(paramarg0: number[], paramarg1: number[]): number;
    static memmove(paramarg0: number[], paramarg1: number[]): number;
    static memmove(paramarg0: number[], paramarg1: number[]): number;
    static memmove(paramarg0: number[], paramarg1: number[]): number;
    static memmove(paramarg0: ByteBuffer, paramarg1: ByteBuffer): number;
    static memmove(paramarg0: DoubleBuffer, paramarg1: DoubleBuffer): number;
    static memmove(paramarg0: FloatBuffer, paramarg1: FloatBuffer): number;
    static memmove(paramarg0: IntBuffer, paramarg1: IntBuffer): number;
    static memmove(paramarg0: LongBuffer, paramarg1: LongBuffer): number;
    static memmove(paramarg0: ShortBuffer, paramarg1: ShortBuffer): number;
    static memmove(paramarg0: number[], paramarg1: number[]): number;
    static memmove(paramarg0: number[], paramarg1: number[]): number;
    static memset(paramarg0: Object | null, paramarg1: number): number;
    static memset(paramarg0: number[], paramarg1: number): number;
    static memset(paramarg0: number[], paramarg1: number): number;
    static memset(paramarg0: number[], paramarg1: number): number;
    static memset(paramarg0: number[], paramarg1: number): number;
    static memset(paramarg0: ByteBuffer, paramarg1: number): number;
    static memset(paramarg0: DoubleBuffer, paramarg1: number): number;
    static memset(paramarg0: FloatBuffer, paramarg1: number): number;
    static memset(paramarg0: IntBuffer, paramarg1: number): number;
    static memset(paramarg0: LongBuffer, paramarg1: number): number;
    static memset(paramarg0: ShortBuffer, paramarg1: number): number;
    static memset(paramarg0: number[], paramarg1: number): number;
    static memset(paramarg0: number[], paramarg1: number): number;
    static nmemcpy(paramarg0: number[], paramarg1: number[], paramarg2: number): number;
    static nmemcpy(paramarg0: number[], paramarg1: number[], paramarg2: number): number;
    static nmemcpy(paramarg0: number[], paramarg1: number[], paramarg2: number): number;
    static nmemcpy(paramarg0: number[], paramarg1: number[], paramarg2: number): number;
    static nmemcpy(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nmemcpy(paramarg0: number[], paramarg1: number[], paramarg2: number): number;
    static nmemcpy(paramarg0: number[], paramarg1: number[], paramarg2: number): number;
    static nmemmove(paramarg0: number[], paramarg1: number[], paramarg2: number): number;
    static nmemmove(paramarg0: number[], paramarg1: number[], paramarg2: number): number;
    static nmemmove(paramarg0: number[], paramarg1: number[], paramarg2: number): number;
    static nmemmove(paramarg0: number[], paramarg1: number[], paramarg2: number): number;
    static nmemmove(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nmemmove(paramarg0: number[], paramarg1: number[], paramarg2: number): number;
    static nmemmove(paramarg0: number[], paramarg1: number[], paramarg2: number): number;
    static nmemset(paramarg0: number[], paramarg1: number, paramarg2: number): number;
    static nmemset(paramarg0: number[], paramarg1: number, paramarg2: number): number;
    static nmemset(paramarg0: number[], paramarg1: number, paramarg2: number): number;
    static nmemset(paramarg0: number[], paramarg1: number, paramarg2: number): number;
    static nmemset(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nmemset(paramarg0: number[], paramarg1: number, paramarg2: number): number;
    static nmemset(paramarg0: number[], paramarg1: number, paramarg2: number): number;
    static nstrerror(paramarg0: number): number;
    static nstrlen(paramarg0: number): number;
    static strerror(paramarg0: number): string;
    static strlen(paramarg0: ByteBuffer): number;
    constructor()
}