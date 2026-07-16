import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProcessInformation$HandleCountProperty } from '../../../../oshi/driver/windows/perfmon/ProcessInformation$HandleCountProperty.d.ts'
import type { ProcessInformation$IdleProcessorTimeProperty } from '../../../../oshi/driver/windows/perfmon/ProcessInformation$IdleProcessorTimeProperty.d.ts'
import type { ProcessInformation$ProcessPerformanceProperty } from '../../../../oshi/driver/windows/perfmon/ProcessInformation$ProcessPerformanceProperty.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
export class ProcessInformation extends Object {
    static queryHandles(): Pair<string[], Map<ProcessInformation$HandleCountProperty, number[]>>;
    static queryIdleProcessCounters(): Pair<string[], Map<ProcessInformation$IdleProcessorTimeProperty, number[]>>;
    static queryProcessCounters(): Pair<string[], Map<ProcessInformation$ProcessPerformanceProperty, number[]>>;
    private constructor()
}