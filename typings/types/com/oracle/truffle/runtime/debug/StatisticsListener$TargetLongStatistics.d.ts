import type { OptimizedCallTarget } from '../../../../../com/oracle/truffle/runtime/OptimizedCallTarget.d.ts'
import type { LongSummaryStatistics } from '../../../../../java/util/LongSummaryStatistics.d.ts'
export class StatisticsListener$TargetLongStatistics extends LongSummaryStatistics {
    private constructor()
    readonly maxName: string;
    accept(arg0: number): void;
    accept(value: number): void;
    accept(value: number, target: OptimizedCallTarget): void;
    combine(other: LongSummaryStatistics): void;
    getMaxName(): string;
}