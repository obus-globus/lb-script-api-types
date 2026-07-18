import type { ContentRange } from '../../../io/ktor/http/ContentRange.d.ts'
import type { RangesSpecifier } from '../../../io/ktor/http/RangesSpecifier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RangesKt extends Object {
    static mergeRangesKeepOrder(self: { start: number; endInclusive: number; step: number }[]): { start: number; endInclusive: number; step: number }[];
    static parseRangesSpecifier(rangeSpec: string): RangesSpecifier | null;
    static toLongRanges(self: ContentRange[], contentLength: number): { start: number; endInclusive: number; step: number }[];
}