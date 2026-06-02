import type { OptimizedCallTarget } from '../../../../../com/oracle/truffle/runtime/OptimizedCallTarget.d.ts'
import type { IntSummaryStatistics } from '../../../../../java/util/IntSummaryStatistics.d.ts'
export class StatisticsListener$TargetIntStatistics extends IntSummaryStatistics {
    private constructor()
    readonly maxName: string;
    accept(value: number): void;
    accept(value: number, target: OptimizedCallTarget): void;
    combine(other: IntSummaryStatistics): void;
    getMaxName(): string;
}