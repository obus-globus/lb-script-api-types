import type { MemorySegment } from '../../java/lang/foreign/MemorySegment.d.ts'
import type { Buffer } from '../../java/nio/Buffer.d.ts'
import type { ByteOrder } from '../../java/nio/ByteOrder.d.ts'
import type { AbstractMemorySegmentImpl } from '../../jdk/internal/foreign/AbstractMemorySegmentImpl.d.ts'
import type { MemorySessionImpl } from '../../jdk/internal/foreign/MemorySessionImpl.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export class LongBuffer extends Buffer implements Comparable<LongBuffer> {
    static allocate(paramarg0: number): LongBuffer;
    static wrap(paramarg0: number[]): LongBuffer;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number): LongBuffer;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: MemorySegment)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: MemorySegment)
    constructor(arg0: number[], arg1: number, arg2: number, arg3: MemorySegment)
    // private hb: number[];
    // private isReadOnly: boolean;
    // private offset: number;
    array(): number[];
    arrayOffset(): number;
    asReadOnlyBuffer(): LongBuffer;
    base(): Object;
    clear(): LongBuffer;
    compact(): LongBuffer;
    compareTo(arg0: LongBuffer): number;
    duplicate(): LongBuffer;
    equals(arg0: Object | null): boolean;
    flip(): LongBuffer;
    get(): number;
    get(arg0: number): number;
    get(arg0: number, arg1: number[]): LongBuffer;
    get(arg0: number, arg1: number[], arg2: number, arg3: number): LongBuffer;
    get(arg0: number[]): LongBuffer;
    get(arg0: number[], arg1: number, arg2: number): LongBuffer;
    // private getArray(arg0: number, arg1: number[], arg2: number, arg3: number): LongBuffer;
    hasArray(): boolean;
    hashCode(): number;
    heapSegment(arg0: Object, arg1: number, arg2: number, arg3: boolean, arg4: MemorySessionImpl): AbstractMemorySegmentImpl;
    isDirect(): boolean;
    limit(): number;
    limit(arg0: number): LongBuffer;
    mark(): LongBuffer;
    mismatch(arg0: LongBuffer): number;
    order(): ByteOrder;
    position(): number;
    position(arg0: number): LongBuffer;
    put(arg0: LongBuffer): LongBuffer;
    put(arg0: number, arg1: LongBuffer, arg2: number, arg3: number): LongBuffer;
    put(arg0: number, arg1: number): LongBuffer;
    put(arg0: number, arg1: number[]): LongBuffer;
    put(arg0: number, arg1: number[], arg2: number, arg3: number): LongBuffer;
    put(arg0: number): LongBuffer;
    put(arg0: number[]): LongBuffer;
    put(arg0: number[], arg1: number, arg2: number): LongBuffer;
    putArray(arg0: number, arg1: number[], arg2: number, arg3: number): LongBuffer;
    putBuffer(arg0: number, arg1: LongBuffer, arg2: number, arg3: number): void;
    reset(): LongBuffer;
    rewind(): LongBuffer;
    scaleShifts(): number;
    slice(): LongBuffer;
    slice(arg0: number, arg1: number): LongBuffer;
    toString(): string;
}