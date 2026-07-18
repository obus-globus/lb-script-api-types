import type { RangeUnits } from '../../../io/ktor/http/RangeUnits.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ContentRangeKt extends Object {
    static contentRangeHeaderValue(range: { start: number; endInclusive: number; step: number } | null, fullLength: number | null, unit: RangeUnits): string;
    static contentRangeHeaderValue(range: { start: number; endInclusive: number; step: number } | null, fullLength: number | null, unit: string): string;
}