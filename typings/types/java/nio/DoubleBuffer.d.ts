import type { MemorySegment } from '../../java/lang/foreign/MemorySegment.d.ts'
import type { Buffer } from '../../java/nio/Buffer.d.ts'
import type { ByteOrder } from '../../java/nio/ByteOrder.d.ts'
import type { AbstractMemorySegmentImpl } from '../../jdk/internal/foreign/AbstractMemorySegmentImpl.d.ts'
import type { MemorySessionImpl } from '../../jdk/internal/foreign/MemorySessionImpl.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export class DoubleBuffer extends Buffer implements Comparable<DoubleBuffer> {
    static allocate(paramarg0: number): DoubleBuffer;
    static wrap(paramarg0: number[]): DoubleBuffer;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number): DoubleBuffer;
    constructor(arg0: number[], arg1: number, arg2: number, arg3: MemorySegment)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: MemorySegment)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: MemorySegment)
    // private hb: number[];
    // private isReadOnly: boolean;
    // private offset: number;
    array(): number[];
    arrayOffset(): number;
    asReadOnlyBuffer(): DoubleBuffer;
    base(): Object;
    clear(): DoubleBuffer;
    compact(): DoubleBuffer;
    compareTo(arg0: DoubleBuffer): number;
    duplicate(): DoubleBuffer;
    equals(arg0: Object | null): boolean;
    flip(): DoubleBuffer;
    get(): number;
    get(arg0: number[]): DoubleBuffer;
    get(arg0: number[], arg1: number, arg2: number): DoubleBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: number[]): DoubleBuffer;
    get(arg0: number, arg1: number[], arg2: number, arg3: number): DoubleBuffer;
    // private getArray(arg0: number, arg1: number[], arg2: number, arg3: number): DoubleBuffer;
    hasArray(): boolean;
    hashCode(): number;
    heapSegment(arg0: Object, arg1: number, arg2: number, arg3: boolean, arg4: MemorySessionImpl): AbstractMemorySegmentImpl;
    isDirect(): boolean;
    limit(): number;
    limit(arg0: number): DoubleBuffer;
    mark(): DoubleBuffer;
    mismatch(arg0: DoubleBuffer): number;
    order(): ByteOrder;
    position(): number;
    position(arg0: number): DoubleBuffer;
    put(arg0: DoubleBuffer): DoubleBuffer;
    put(arg0: number): DoubleBuffer;
    put(arg0: number[]): DoubleBuffer;
    put(arg0: number[], arg1: number, arg2: number): DoubleBuffer;
    put(arg0: number, arg1: DoubleBuffer, arg2: number, arg3: number): DoubleBuffer;
    put(arg0: number, arg1: number): DoubleBuffer;
    put(arg0: number, arg1: number[]): DoubleBuffer;
    put(arg0: number, arg1: number[], arg2: number, arg3: number): DoubleBuffer;
    putArray(arg0: number, arg1: number[], arg2: number, arg3: number): DoubleBuffer;
    putBuffer(arg0: number, arg1: DoubleBuffer, arg2: number, arg3: number): void;
    reset(): DoubleBuffer;
    rewind(): DoubleBuffer;
    scaleShifts(): number;
    slice(): DoubleBuffer;
    slice(arg0: number, arg1: number): DoubleBuffer;
    toString(): string;
}