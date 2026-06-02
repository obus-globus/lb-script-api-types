import type { Object } from '../../../java/lang/Object.d.ts'
import type { Segment } from '../../../kotlinx/io/Segment.d.ts'
export interface SegmentReadContext extends Object{
    getUnchecked(segment: Segment, offset: number): number;
}