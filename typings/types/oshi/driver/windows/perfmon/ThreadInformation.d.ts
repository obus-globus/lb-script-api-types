import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ThreadInformation$ThreadPerformanceProperty } from '../../../../oshi/driver/windows/perfmon/ThreadInformation$ThreadPerformanceProperty.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
export class ThreadInformation extends Object {
    static queryThreadCounters(): Pair<string[], JavaMap<ThreadInformation$ThreadPerformanceProperty, number[]>>;
    static queryThreadCounters(paramarg0: string, paramarg1: number): Pair<string[], JavaMap<ThreadInformation$ThreadPerformanceProperty, number[]>>;
    private constructor()
}