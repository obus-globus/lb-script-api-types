import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IoSummary$CountAndSize extends Record {
    // private totalCount: number;
    // private totalSize: number;
    add(that: IoSummary$CountAndSize): IoSummary$CountAndSize;
    averageSize(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    totalCount(): number;
    totalSize(): number;
}