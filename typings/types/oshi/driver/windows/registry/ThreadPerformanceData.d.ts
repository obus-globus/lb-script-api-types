import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ThreadPerformanceData$PerfCounterBlock } from '../../../../oshi/driver/windows/registry/ThreadPerformanceData$PerfCounterBlock.d.ts'
export class ThreadPerformanceData extends Object {
    static buildThreadMapFromPerfCounters(paramarg0: number[]): JavaMap<number, ThreadPerformanceData$PerfCounterBlock>;
    static buildThreadMapFromPerfCounters(paramarg0: number[], paramarg1: string, paramarg2: number): JavaMap<number, ThreadPerformanceData$PerfCounterBlock>;
    static buildThreadMapFromRegistry(paramarg0: number[]): JavaMap<number, ThreadPerformanceData$PerfCounterBlock>;
    private constructor()
}