import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { PerfCounterWildcardQuery$PdhCounterWildcardProperty } from '../../../../oshi/util/platform/windows/PerfCounterWildcardQuery$PdhCounterWildcardProperty.d.ts'
export class ProcessInformation$IdleProcessorTimeProperty extends Enum<ProcessInformation$IdleProcessorTimeProperty> implements PerfCounterWildcardQuery$PdhCounterWildcardProperty {
    static ELAPSEDTIME: ProcessInformation$IdleProcessorTimeProperty;
    static NAME: ProcessInformation$IdleProcessorTimeProperty;
    static PERCENTPROCESSORTIME: ProcessInformation$IdleProcessorTimeProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ProcessInformation$IdleProcessorTimeProperty;
    static values(): ProcessInformation$IdleProcessorTimeProperty[];
    private constructor(arg2: string)
    readonly counter: string;
    getCounter(): string;
    name(): "NAME" | "PERCENTPROCESSORTIME" | "ELAPSEDTIME";
}