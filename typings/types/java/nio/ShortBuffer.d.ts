import type { MemorySegment } from '../../java/lang/foreign/MemorySegment.d.ts'
import type { Buffer } from '../../java/nio/Buffer.d.ts'
import type { ByteOrder } from '../../java/nio/ByteOrder.d.ts'
import type { AbstractMemorySegmentImpl } from '../../jdk/internal/foreign/AbstractMemorySegmentImpl.d.ts'
import type { MemorySessionImpl } from '../../jdk/internal/foreign/MemorySessionImpl.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export class ShortBuffer extends Buffer implements Comparable<ShortBuffer> {
    static allocate(paramarg0: number): ShortBuffer;
    static wrap(paramarg0: number[]): ShortBuffer;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number): ShortBuffer;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: MemorySegment)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: MemorySegment)
    constructor(arg0: number[], arg1: number, arg2: number, arg3: MemorySegment)
    // private hb: number[];
    // private isReadOnly: boolean;
    // private offset: number;
    array(): number[];
    arrayOffset(): number;
    asReadOnlyBuffer(): ShortBuffer;
    base(): Object;
    clear(): ShortBuffer;
    compact(): ShortBuffer;
    compareTo(arg0: ShortBuffer): number;
    duplicate(): ShortBuffer;
    equals(arg0: Object | null): boolean;
    flip(): ShortBuffer;
    get(): number;
    get(arg0: number): number;
    get(arg0: number, arg1: number[]): ShortBuffer;
    get(arg0: number, arg1: number[], arg2: number, arg3: number): ShortBuffer;
    get(arg0: number[]): ShortBuffer;
    get(arg0: number[], arg1: number, arg2: number): ShortBuffer;
    // private getArray(arg0: number, arg1: number[], arg2: number, arg3: number): ShortBuffer;
    hasArray(): boolean;
    hashCode(): number;
    heapSegment(arg0: Object, arg1: number, arg2: number, arg3: boolean, arg4: MemorySessionImpl): AbstractMemorySegmentImpl;
    isDirect(): boolean;
    limit(): number;
    limit(arg0: number): ShortBuffer;
    mark(): ShortBuffer;
    mismatch(arg0: ShortBuffer): number;
    order(): ByteOrder;
    position(): number;
    position(arg0: number): ShortBuffer;
    put(arg0: ShortBuffer): ShortBuffer;
    put(arg0: number, arg1: ShortBuffer, arg2: number, arg3: number): ShortBuffer;
    put(arg0: number, arg1: number): ShortBuffer;
    put(arg0: number, arg1: number[]): ShortBuffer;
    put(arg0: number, arg1: number[], arg2: number, arg3: number): ShortBuffer;
    put(arg0: number): ShortBuffer;
    put(arg0: number[]): ShortBuffer;
    put(arg0: number[], arg1: number, arg2: number): ShortBuffer;
    putArray(arg0: number, arg1: number[], arg2: number, arg3: number): ShortBuffer;
    putBuffer(arg0: number, arg1: ShortBuffer, arg2: number, arg3: number): void;
    reset(): ShortBuffer;
    rewind(): ShortBuffer;
    scaleShifts(): number;
    slice(): ShortBuffer;
    slice(arg0: number, arg1: number): ShortBuffer;
    toString(): string;
}