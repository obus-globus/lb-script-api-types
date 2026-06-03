import type { MemorySegment } from '../../java/lang/foreign/MemorySegment.d.ts'
import type { Buffer } from '../../java/nio/Buffer.d.ts'
import type { ByteOrder } from '../../java/nio/ByteOrder.d.ts'
import type { AbstractMemorySegmentImpl } from '../../jdk/internal/foreign/AbstractMemorySegmentImpl.d.ts'
import type { MemorySessionImpl } from '../../jdk/internal/foreign/MemorySessionImpl.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export class IntBuffer extends Buffer implements Comparable<IntBuffer> {
    static allocate(paramarg0: number): IntBuffer;
    static wrap(paramarg0: number[]): IntBuffer;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number): IntBuffer;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: MemorySegment)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: MemorySegment)
    constructor(arg0: number[], arg1: number, arg2: number, arg3: MemorySegment)
    // private hb: number[];
    // private isReadOnly: boolean;
    // private offset: number;
    array(): number[];
    arrayOffset(): number;
    asReadOnlyBuffer(): IntBuffer;
    base(): Object;
    clear(): IntBuffer;
    compact(): IntBuffer;
    compareTo(arg0: IntBuffer): number;
    duplicate(): IntBuffer;
    equals(arg0: Object | null): boolean;
    flip(): IntBuffer;
    get(): number;
    get(arg0: number): number;
    get(arg0: number, arg1: number[]): IntBuffer;
    get(arg0: number, arg1: number[], arg2: number, arg3: number): IntBuffer;
    get(arg0: number[]): IntBuffer;
    get(arg0: number[], arg1: number, arg2: number): IntBuffer;
    // private getArray(arg0: number, arg1: number[], arg2: number, arg3: number): IntBuffer;
    hasArray(): boolean;
    hashCode(): number;
    heapSegment(arg0: Object, arg1: number, arg2: number, arg3: boolean, arg4: MemorySessionImpl): AbstractMemorySegmentImpl;
    isDirect(): boolean;
    limit(): number;
    limit(arg0: number): IntBuffer;
    mark(): IntBuffer;
    mismatch(arg0: IntBuffer): number;
    order(): ByteOrder;
    position(): number;
    position(arg0: number): IntBuffer;
    put(arg0: IntBuffer): IntBuffer;
    put(arg0: number): IntBuffer;
    put(arg0: number, arg1: IntBuffer, arg2: number, arg3: number): IntBuffer;
    put(arg0: number, arg1: number): IntBuffer;
    put(arg0: number, arg1: number[]): IntBuffer;
    put(arg0: number, arg1: number[], arg2: number, arg3: number): IntBuffer;
    put(arg0: number[]): IntBuffer;
    put(arg0: number[], arg1: number, arg2: number): IntBuffer;
    putArray(arg0: number, arg1: number[], arg2: number, arg3: number): IntBuffer;
    putBuffer(arg0: number, arg1: IntBuffer, arg2: number, arg3: number): void;
    reset(): IntBuffer;
    rewind(): IntBuffer;
    scaleShifts(): number;
    slice(): IntBuffer;
    slice(arg0: number, arg1: number): IntBuffer;
    toString(): string;
}