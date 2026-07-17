import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SystemInformation$ContextSwitchProperty } from '../../../../oshi/driver/windows/perfmon/SystemInformation$ContextSwitchProperty.d.ts'
import type { SystemInformation$ProcessorQueueLengthProperty } from '../../../../oshi/driver/windows/perfmon/SystemInformation$ProcessorQueueLengthProperty.d.ts'
export class SystemInformation extends Object {
    static queryContextSwitchCounters(): JavaMap<SystemInformation$ContextSwitchProperty, number>;
    static queryProcessorQueueLength(): JavaMap<SystemInformation$ProcessorQueueLengthProperty, number>;
    private constructor()
}