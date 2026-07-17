import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProcessInformation$HandleCountProperty } from '../../../../oshi/driver/windows/perfmon/ProcessInformation$HandleCountProperty.d.ts'
import type { ProcessInformation$IdleProcessorTimeProperty } from '../../../../oshi/driver/windows/perfmon/ProcessInformation$IdleProcessorTimeProperty.d.ts'
import type { ProcessInformation$ProcessPerformanceProperty } from '../../../../oshi/driver/windows/perfmon/ProcessInformation$ProcessPerformanceProperty.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
export class ProcessInformation extends Object {
    static queryHandles(): Pair<string[], JavaMap<ProcessInformation$HandleCountProperty, number[]>>;
    static queryIdleProcessCounters(): Pair<string[], JavaMap<ProcessInformation$IdleProcessorTimeProperty, number[]>>;
    static queryProcessCounters(): Pair<string[], JavaMap<ProcessInformation$ProcessPerformanceProperty, number[]>>;
    private constructor()
}