import type { Object } from '../../java/lang/Object.d.ts'
import type { Segment } from '../../kotlinx/io/Segment.d.ts'
import type { SegmentCopyTracker } from '../../kotlinx/io/SegmentCopyTracker.d.ts'
export class Segment$Companion extends Object {
    SHARE_MINIMUM: number;
    SIZE: number;
    new(): Segment;
    new(data: number[], pos: number, limit: number, copyTracker: SegmentCopyTracker | null, owner: boolean): Segment;
}