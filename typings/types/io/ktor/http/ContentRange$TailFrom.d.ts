import type { ContentRange } from '../../../io/ktor/http/ContentRange.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ContentRange$TailFrom extends ContentRange {
    constructor(from: number)
    readonly from: number;
    component1(): number;
    copy(from: number): ContentRange$TailFrom;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}