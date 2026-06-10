import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProcessPerformanceData$PerfCounterBlock } from '../../../../oshi/driver/windows/registry/ProcessPerformanceData$PerfCounterBlock.d.ts'
export class ProcessPerformanceData extends Object {
    static buildProcessMapFromPerfCounters(paramarg0: number[]): { [key: number]: ProcessPerformanceData$PerfCounterBlock };
    static buildProcessMapFromPerfCounters(paramarg0: number[], paramarg1: string): { [key: number]: ProcessPerformanceData$PerfCounterBlock };
    static buildProcessMapFromRegistry(paramarg0: number[]): { [key: number]: ProcessPerformanceData$PerfCounterBlock };
    private constructor()
}