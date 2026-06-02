import type { Object } from '../../java/lang/Object.d.ts'
import type { Segment } from '../../kotlinx/io/Segment.d.ts'
export class SegmentKt extends Object {
    static indexOf(paramarg0: Segment, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static indexOfBytesInbound(paramarg0: Segment, paramarg1: number[], paramarg2: number): number;
    static indexOfBytesOutbound(paramarg0: Segment, paramarg1: number[], paramarg2: number): number;
    static isEmpty(paramarg0: Segment): boolean;
}