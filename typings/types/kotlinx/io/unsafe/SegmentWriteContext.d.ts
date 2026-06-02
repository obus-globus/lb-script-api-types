import type { Object } from '../../../java/lang/Object.d.ts'
import type { Segment } from '../../../kotlinx/io/Segment.d.ts'
export interface SegmentWriteContext extends Object{
    setUnchecked(segment: Segment, offset: number, value: number): void;
    setUnchecked(segment: Segment, offset: number, b0: number, b1: number): void;
    setUnchecked(segment: Segment, offset: number, b0: number, b1: number, b2: number): void;
    setUnchecked(segment: Segment, offset: number, b0: number, b1: number, b2: number, b3: number): void;
}