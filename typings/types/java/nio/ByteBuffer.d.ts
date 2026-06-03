import type { MemorySegment } from '../../java/lang/foreign/MemorySegment.d.ts'
import type { Buffer } from '../../java/nio/Buffer.d.ts'
import type { ByteOrder } from '../../java/nio/ByteOrder.d.ts'
import type { CharBuffer } from '../../java/nio/CharBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../java/nio/LongBuffer.d.ts'
import type { ShortBuffer } from '../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export class ByteBuffer extends Buffer implements Comparable<ByteBuffer> {
    static allocate(paramarg0: number): ByteBuffer;
    static allocateDirect(paramarg0: number): ByteBuffer;
    static wrap(paramarg0: number[]): ByteBuffer;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number): ByteBuffer;
    constructor(arg0: number[], arg1: number, arg2: number, arg3: MemorySegment)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: MemorySegment)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: MemorySegment)
    // private bigEndian: boolean;
    // private hb: number[];
    // private isReadOnly: boolean;
    // private nativeByteOrder: boolean;
    // private offset: number;
    alignedSlice(arg0: number): ByteBuffer;
    alignmentOffset(arg0: number, arg1: number): number;
    array(): number[];
    arrayOffset(): number;
    asCharBuffer(): CharBuffer;
    asDoubleBuffer(): DoubleBuffer;
    asFloatBuffer(): FloatBuffer;
    asIntBuffer(): IntBuffer;
    asLongBuffer(): LongBuffer;
    asReadOnlyBuffer(): ByteBuffer;
    asShortBuffer(): ShortBuffer;
    base(): Object;
    clear(): ByteBuffer;
    compact(): ByteBuffer;
    compareTo(arg0: ByteBuffer): number;
    duplicate(): ByteBuffer;
    equals(arg0: Object | null): boolean;
    flip(): ByteBuffer;
    get(): number;
    get(arg0: number[]): ByteBuffer;
    get(arg0: number[], arg1: number, arg2: number): ByteBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: number[]): ByteBuffer;
    get(arg0: number, arg1: number[], arg2: number, arg3: number): ByteBuffer;
    // private getArray(arg0: number, arg1: number[], arg2: number, arg3: number): ByteBuffer;
    getChar(): string;
    getChar(arg0: number): string;
    getDouble(): number;
    getDouble(arg0: number): number;
    getFloat(): number;
    getFloat(arg0: number): number;
    getInt(): number;
    getInt(arg0: number): number;
    getLong(): number;
    getLong(arg0: number): number;
    getShort(): number;
    getShort(arg0: number): number;
    hasArray(): boolean;
    hashCode(): number;
    isDirect(): boolean;
    limit(): number;
    limit(arg0: number): ByteBuffer;
    mark(): ByteBuffer;
    mismatch(arg0: ByteBuffer): number;
    order(): ByteOrder;
    order(arg0: ByteOrder): ByteBuffer;
    position(): number;
    position(arg0: number): ByteBuffer;
    put(arg0: ByteBuffer): ByteBuffer;
    put(arg0: number): ByteBuffer;
    put(arg0: number[]): ByteBuffer;
    put(arg0: number[], arg1: number, arg2: number): ByteBuffer;
    put(arg0: number, arg1: ByteBuffer, arg2: number, arg3: number): ByteBuffer;
    put(arg0: number, arg1: number): ByteBuffer;
    put(arg0: number, arg1: number[]): ByteBuffer;
    put(arg0: number, arg1: number[], arg2: number, arg3: number): ByteBuffer;
    putArray(arg0: number, arg1: number[], arg2: number, arg3: number): ByteBuffer;
    putBuffer(arg0: number, arg1: ByteBuffer, arg2: number, arg3: number): void;
    putChar(arg0: string): ByteBuffer;
    putChar(arg0: number, arg1: string): ByteBuffer;
    putDouble(arg0: number): ByteBuffer;
    putDouble(arg0: number, arg1: number): ByteBuffer;
    putFloat(arg0: number): ByteBuffer;
    putFloat(arg0: number, arg1: number): ByteBuffer;
    putInt(arg0: number): ByteBuffer;
    putInt(arg0: number, arg1: number): ByteBuffer;
    putLong(arg0: number, arg1: number): ByteBuffer;
    putLong(arg0: number): ByteBuffer;
    putShort(arg0: number, arg1: number): ByteBuffer;
    putShort(arg0: number): ByteBuffer;
    reset(): ByteBuffer;
    rewind(): ByteBuffer;
    slice(): ByteBuffer;
    slice(arg0: number, arg1: number): ByteBuffer;
    toString(): string;
}