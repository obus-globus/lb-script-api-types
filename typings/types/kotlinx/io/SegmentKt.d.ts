import type { Object } from '../../java/lang/Object.d.ts'
import type { Segment } from '../../kotlinx/io/Segment.d.ts'
export class SegmentKt extends Object {
    static indexOf(self: Segment, byte: number, startOffset: number, endOffset: number): number;
    static indexOfBytesInbound(self: Segment, bytes: number[], startOffset: number): number;
    static indexOfBytesOutbound(self: Segment, bytes: number[], startOffset: number): number;
    static isEmpty(self: Segment): boolean;
}