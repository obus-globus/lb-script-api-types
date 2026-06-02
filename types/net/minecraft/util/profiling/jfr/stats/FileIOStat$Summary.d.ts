import type { Pair } from '../../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Duration } from '../../../../../../java/time/Duration.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FileIOStat$Summary extends Record {
    // private bytesPerSecond: number;
    // private counts: number;
    // private countsPerSecond: number;
    // private timeSpentInIO: Duration;
    // private topTenContributorsByTotalBytes: Pair<string, number>[];
    // private totalBytes: number;
    bytesPerSecond(): number;
    counts(): number;
    countsPerSecond(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    timeSpentInIO(): Duration;
    toString(): string;
    topTenContributorsByTotalBytes(): Pair<string, number>[];
    totalBytes(): number;
}