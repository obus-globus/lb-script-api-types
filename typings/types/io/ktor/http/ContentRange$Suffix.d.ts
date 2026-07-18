import type { ContentRange } from '../../../io/ktor/http/ContentRange.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ContentRange$Suffix extends ContentRange {
    constructor(lastCount: number)
    readonly lastCount: number;
    component1(): number;
    copy(lastCount: number): ContentRange$Suffix;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}