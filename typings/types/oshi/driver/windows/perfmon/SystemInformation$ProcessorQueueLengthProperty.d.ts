import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { PerfCounterQuery$PdhCounterProperty } from '../../../../oshi/util/platform/windows/PerfCounterQuery$PdhCounterProperty.d.ts'
export class SystemInformation$ProcessorQueueLengthProperty extends Enum<SystemInformation$ProcessorQueueLengthProperty> implements PerfCounterQuery$PdhCounterProperty {
    static PROCESSORQUEUELENGTH: SystemInformation$ProcessorQueueLengthProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SystemInformation$ProcessorQueueLengthProperty;
    static values(): SystemInformation$ProcessorQueueLengthProperty[];
    private constructor(arg2: string, arg3: string)
    readonly counter: string;
    readonly instance: string;
    getCounter(): string;
    getInstance(): string;
    name(): "PROCESSORQUEUELENGTH";
}