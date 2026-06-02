import type { MemorySegment } from '../../../java/lang/foreign/MemorySegment.d.ts'
import type { ValueLayout } from '../../../java/lang/foreign/ValueLayout.d.ts'
import type { Buffer } from '../../../java/nio/Buffer.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { AbstractMemorySegmentImpl } from '../../../jdk/internal/foreign/AbstractMemorySegmentImpl.d.ts'
import type { MemorySessionImpl } from '../../../jdk/internal/foreign/MemorySessionImpl.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NativeMemorySegmentImpl extends AbstractMemorySegmentImpl {
    static NULL: MemorySegment;
    static copy(paramarg0: Object, paramarg1: number, paramarg2: MemorySegment, paramarg3: ValueLayout, paramarg4: number, paramarg5: number): void;
    static copy(paramarg0: MemorySegment, paramarg1: ValueLayout, paramarg2: number, paramarg3: Object, paramarg4: number, paramarg5: number): void;
    static copy(paramarg0: MemorySegment, paramarg1: ValueLayout, paramarg2: number, paramarg3: MemorySegment, paramarg4: ValueLayout, paramarg5: number, paramarg6: number): void;
    static ofBuffer(paramarg0: Buffer): AbstractMemorySegmentImpl;
    constructor(arg0: number, arg1: number, arg2: boolean, arg3: MemorySessionImpl)
    // private min: number;
    address(): number;
    dup(arg0: number, arg1: number, arg2: boolean, arg3: MemorySessionImpl): NativeMemorySegmentImpl;
    heapBase(): Optional<Object>;
    isNative(): boolean;
    makeByteBuffer(): ByteBuffer;
    maxAlignMask(): number;
    maxByteAlignment(): number;
    unsafeGetBase(): Object;
    unsafeGetOffset(): number;
}