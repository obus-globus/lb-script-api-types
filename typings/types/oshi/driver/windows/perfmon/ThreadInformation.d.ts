import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ThreadInformation$ThreadPerformanceProperty } from '../../../../oshi/driver/windows/perfmon/ThreadInformation$ThreadPerformanceProperty.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
export class ThreadInformation extends Object {
    static queryThreadCounters(): Pair<string[], { [key in ThreadInformation$ThreadPerformanceProperty]: number[] }>;
    static queryThreadCounters(paramarg0: string, paramarg1: number): Pair<string[], { [key in ThreadInformation$ThreadPerformanceProperty]: number[] }>;
    private constructor()
}