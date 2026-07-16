import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SystemInformation$ContextSwitchProperty } from '../../../../oshi/driver/windows/perfmon/SystemInformation$ContextSwitchProperty.d.ts'
import type { SystemInformation$ProcessorQueueLengthProperty } from '../../../../oshi/driver/windows/perfmon/SystemInformation$ProcessorQueueLengthProperty.d.ts'
export class SystemInformation extends Object {
    static queryContextSwitchCounters(): Map<SystemInformation$ContextSwitchProperty, number>;
    static queryProcessorQueueLength(): Map<SystemInformation$ProcessorQueueLengthProperty, number>;
    private constructor()
}