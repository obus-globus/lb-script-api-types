import type { ContentRange } from '../../../io/ktor/http/ContentRange.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ContentRange$Bounded extends ContentRange {
    constructor(from: number, to: number)
    readonly from: number;
    readonly to: number;
    component1(): number;
    component2(): number;
    copy(from: number, to: number): ContentRange$Bounded;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}