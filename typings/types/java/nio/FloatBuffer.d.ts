import type { MemorySegment } from '../../java/lang/foreign/MemorySegment.d.ts'
import type { Buffer } from '../../java/nio/Buffer.d.ts'
import type { ByteOrder } from '../../java/nio/ByteOrder.d.ts'
import type { AbstractMemorySegmentImpl } from '../../jdk/internal/foreign/AbstractMemorySegmentImpl.d.ts'
import type { MemorySessionImpl } from '../../jdk/internal/foreign/MemorySessionImpl.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export class FloatBuffer extends Buffer implements Comparable<FloatBuffer> {
    static allocate(paramarg0: number): FloatBuffer;
    static wrap(paramarg0: number[]): FloatBuffer;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number): FloatBuffer;
    constructor(arg0: number[], arg1: number, arg2: number, arg3: MemorySegment)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: MemorySegment)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: MemorySegment)
    // private hb: number[];
    // private isReadOnly: boolean;
    // private offset: number;
    array(): number[];
    arrayOffset(): number;
    asReadOnlyBuffer(): FloatBuffer;
    base(): Object;
    clear(): FloatBuffer;
    compact(): FloatBuffer;
    compareTo(arg0: FloatBuffer): number;
    duplicate(): FloatBuffer;
    equals(arg0: Object | null): boolean;
    flip(): FloatBuffer;
    get(): number;
    get(arg0: number[]): FloatBuffer;
    get(arg0: number[], arg1: number, arg2: number): FloatBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: number[]): FloatBuffer;
    get(arg0: number, arg1: number[], arg2: number, arg3: number): FloatBuffer;
    // private getArray(arg0: number, arg1: number[], arg2: number, arg3: number): FloatBuffer;
    hasArray(): boolean;
    hashCode(): number;
    heapSegment(arg0: Object, arg1: number, arg2: number, arg3: boolean, arg4: MemorySessionImpl): AbstractMemorySegmentImpl;
    isDirect(): boolean;
    limit(): number;
    limit(arg0: number): FloatBuffer;
    mark(): FloatBuffer;
    mismatch(arg0: FloatBuffer): number;
    order(): ByteOrder;
    position(): number;
    position(arg0: number): FloatBuffer;
    put(arg0: FloatBuffer): FloatBuffer;
    put(arg0: number): FloatBuffer;
    put(arg0: number[]): FloatBuffer;
    put(arg0: number[], arg1: number, arg2: number): FloatBuffer;
    put(arg0: number, arg1: FloatBuffer, arg2: number, arg3: number): FloatBuffer;
    put(arg0: number, arg1: number): FloatBuffer;
    put(arg0: number, arg1: number[]): FloatBuffer;
    put(arg0: number, arg1: number[], arg2: number, arg3: number): FloatBuffer;
    putArray(arg0: number, arg1: number[], arg2: number, arg3: number): FloatBuffer;
    putBuffer(arg0: number, arg1: FloatBuffer, arg2: number, arg3: number): void;
    reset(): FloatBuffer;
    rewind(): FloatBuffer;
    scaleShifts(): number;
    slice(): FloatBuffer;
    slice(arg0: number, arg1: number): FloatBuffer;
    toString(): string;
}