import type { Object } from '../../../java/lang/Object.d.ts'
import type { Segment } from '../../../kotlinx/io/Segment.d.ts'
import type { BufferIterationContext } from '../../../kotlinx/io/unsafe/BufferIterationContext.d.ts'
import type { SegmentReadContext } from '../../../kotlinx/io/unsafe/SegmentReadContext.d.ts'
import type { SegmentWriteContext } from '../../../kotlinx/io/unsafe/SegmentWriteContext.d.ts'
export class UnsafeBufferOperationsKt extends Object {
    static getBufferIterationContextImpl(): BufferIterationContext;
    static getSegmentReadContextImpl(): SegmentReadContext;
    static getSegmentWriteContextImpl(): SegmentWriteContext;
    static withData(self: SegmentReadContext, segment: Segment, readAction: (param0: number[], param1: number, param2: number) => void): void;
}