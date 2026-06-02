import type { Object } from '../../../java/lang/Object.d.ts'
import type { Segment } from '../../../kotlinx/io/Segment.d.ts'
import type { SegmentReadContext } from '../../../kotlinx/io/unsafe/SegmentReadContext.d.ts'
export interface BufferIterationContext extends Object, SegmentReadContext{
    next(segment: Segment): Segment | null;
}