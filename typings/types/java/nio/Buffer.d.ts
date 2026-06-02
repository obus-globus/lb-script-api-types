import type { IllegalArgumentException } from '../../java/lang/IllegalArgumentException.d.ts'
import type { MemorySegment } from '../../java/lang/foreign/MemorySegment.d.ts'
import type { AbstractMemorySegmentImpl } from '../../jdk/internal/foreign/AbstractMemorySegmentImpl.d.ts'
import type { MemorySessionImpl } from '../../jdk/internal/foreign/MemorySessionImpl.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Buffer extends Object {
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: MemorySegment)
    constructor(arg0: number, arg1: number, arg2: MemorySegment)
    // private address: number;
    // private capacity: number;
    // private limit: number;
    // private mark: number;
    // private position: number;
    // private segment: MemorySegment;
    array(): Object;
    arrayOffset(): number;
    base(): Object;
    capacity(): number;
    checkIndex(arg0: number): number;
    checkIndex(arg0: number, arg1: number): number;
    checkSession(): void;
    clear(): Buffer;
    // private createLimitException(arg0: number): IllegalArgumentException;
    // private createPositionException(arg0: number): IllegalArgumentException;
    discardMark(): void;
    duplicate(): Buffer;
    flip(): Buffer;
    hasArray(): boolean;
    hasRemaining(): boolean;
    heapSegment(arg0: Object, arg1: number, arg2: number, arg3: boolean, arg4: MemorySessionImpl): AbstractMemorySegmentImpl;
    isDirect(): boolean;
    isReadOnly(): boolean;
    limit(): number;
    limit(arg0: number): Buffer;
    mark(): Buffer;
    markValue(): number;
    nextGetIndex(): number;
    nextGetIndex(arg0: number): number;
    nextPutIndex(): number;
    nextPutIndex(arg0: number): number;
    position(): number;
    position(arg0: number): Buffer;
    remaining(): number;
    reset(): Buffer;
    rewind(): Buffer;
    scaleShifts(): number;
    session(): MemorySessionImpl;
    slice(): Buffer;
    slice(arg0: number, arg1: number): Buffer;
}