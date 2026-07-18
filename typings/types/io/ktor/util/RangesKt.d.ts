import type { Object } from '../../../java/lang/Object.d.ts'
export class RangesKt extends Object {
    static contains(self: { start: number; endInclusive: number; step: number }, other: { start: number; endInclusive: number; step: number }): boolean;
}