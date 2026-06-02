import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function3 } from '../../../kotlin/jvm/functions/Function3.d.ts'
import type { Segment } from '../../../kotlinx/io/Segment.d.ts'
import type { BufferIterationContext } from '../../../kotlinx/io/unsafe/BufferIterationContext.d.ts'
import type { SegmentReadContext } from '../../../kotlinx/io/unsafe/SegmentReadContext.d.ts'
import type { SegmentWriteContext } from '../../../kotlinx/io/unsafe/SegmentWriteContext.d.ts'
export class UnsafeBufferOperationsKt extends Object {
    static getBufferIterationContextImpl(): BufferIterationContext;
    static getSegmentReadContextImpl(): SegmentReadContext;
    static getSegmentWriteContextImpl(): SegmentWriteContext;
    static withData(paramarg0: SegmentReadContext, paramarg1: Segment, paramarg2: Function3<Object, Object, Object, void>): void;
}