import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ThreadPerformanceData$PerfCounterBlock } from '../../../../oshi/driver/windows/registry/ThreadPerformanceData$PerfCounterBlock.d.ts'
export class ThreadPerformanceData extends Object {
    static buildThreadMapFromPerfCounters(paramarg0: E[]): { [key: number]: ThreadPerformanceData$PerfCounterBlock };
    static buildThreadMapFromPerfCounters(paramarg0: E[], paramarg1: string, paramarg2: number): { [key: number]: ThreadPerformanceData$PerfCounterBlock };
    static buildThreadMapFromRegistry(paramarg0: E[]): { [key: number]: ThreadPerformanceData$PerfCounterBlock };
    private constructor()
}