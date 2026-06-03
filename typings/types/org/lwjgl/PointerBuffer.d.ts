import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../java/nio/LongBuffer.d.ts'
import type { ShortBuffer } from '../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { CustomBuffer } from '../../org/lwjgl/system/CustomBuffer.d.ts'
import type { Pointer } from '../../org/lwjgl/system/Pointer.d.ts'
export class PointerBuffer extends CustomBuffer<PointerBuffer> implements Comparable<PointerBuffer> {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static allocateDirect(paramarg0: number): PointerBuffer;
    static create(paramarg0: ByteBuffer): PointerBuffer;
    static create(paramarg0: number, paramarg1: number): PointerBuffer;
    static get(paramarg0: ByteBuffer): number;
    static get(paramarg0: ByteBuffer, paramarg1: number): number;
    static put(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number): void;
    static put(paramarg0: ByteBuffer, paramarg1: number): void;
    constructor(arg0: number, arg1: ByteBuffer, arg2: number, arg3: number, arg4: number, arg5: number)
    compareTo(arg0: PointerBuffer): number;
    create(arg0: number, arg1: ByteBuffer, arg2: number, arg3: number, arg4: number, arg5: number): PointerBuffer;
    equals(arg0: Object | null): boolean;
    get(): number;
    get(arg0: number): number;
    get(arg0: number[]): PointerBuffer;
    get(arg0: number[], arg1: number, arg2: number): PointerBuffer;
    // private get32(arg0: number[], arg1: number, arg2: number): void;
    getByteBuffer(arg0: number): ByteBuffer;
    getByteBuffer(arg0: number, arg1: number): ByteBuffer;
    getDoubleBuffer(arg0: number): DoubleBuffer;
    getDoubleBuffer(arg0: number, arg1: number): DoubleBuffer;
    getFloatBuffer(arg0: number): FloatBuffer;
    getFloatBuffer(arg0: number, arg1: number): FloatBuffer;
    getIntBuffer(arg0: number): IntBuffer;
    getIntBuffer(arg0: number, arg1: number): IntBuffer;
    getLongBuffer(arg0: number): LongBuffer;
    getLongBuffer(arg0: number, arg1: number): LongBuffer;
    getPointerBuffer(arg0: number): PointerBuffer;
    getPointerBuffer(arg0: number, arg1: number): PointerBuffer;
    getShortBuffer(arg0: number): ShortBuffer;
    getShortBuffer(arg0: number, arg1: number): ShortBuffer;
    getStringASCII(): string;
    getStringASCII(arg0: number): string;
    getStringUTF16(): string;
    getStringUTF16(arg0: number): string;
    getStringUTF8(): string;
    getStringUTF8(arg0: number): string;
    hashCode(): number;
    put(arg0: ByteBuffer): PointerBuffer;
    put(arg0: DoubleBuffer): PointerBuffer;
    put(arg0: FloatBuffer): PointerBuffer;
    put(arg0: IntBuffer): PointerBuffer;
    put(arg0: LongBuffer): PointerBuffer;
    put(arg0: ShortBuffer): PointerBuffer;
    put(arg0: number, arg1: ByteBuffer): PointerBuffer;
    put(arg0: number, arg1: DoubleBuffer): PointerBuffer;
    put(arg0: number, arg1: FloatBuffer): PointerBuffer;
    put(arg0: number, arg1: IntBuffer): PointerBuffer;
    put(arg0: number, arg1: LongBuffer): PointerBuffer;
    put(arg0: number, arg1: ShortBuffer): PointerBuffer;
    put(arg0: number, arg1: number): PointerBuffer;
    put(arg0: number, arg1: Pointer): PointerBuffer;
    put(arg0: number): PointerBuffer;
    put(arg0: number[]): PointerBuffer;
    put(arg0: number[], arg1: number, arg2: number): PointerBuffer;
    put(arg0: PointerBuffer): PointerBuffer;
    put(arg0: Pointer): PointerBuffer;
    // private put32(arg0: number[], arg1: number, arg2: number): void;
    putAddressOf(arg0: number, arg1: CustomBuffer<Object>): PointerBuffer;
    putAddressOf(arg0: CustomBuffer<Object>): PointerBuffer;
    self(): PointerBuffer;
    sizeof(): number;
}