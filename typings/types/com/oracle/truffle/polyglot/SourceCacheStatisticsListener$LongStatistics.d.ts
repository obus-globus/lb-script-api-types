import type { LongSummaryStatistics } from '../../../../java/util/LongSummaryStatistics.d.ts'
export class SourceCacheStatisticsListener$LongStatistics extends LongSummaryStatistics {
    private constructor()
    // private maxId: string;
    accept(value: number): void;
    accept(arg0: number): void;
    accept(value: number, id: string): void;
    combine(other: LongSummaryStatistics): void;
}