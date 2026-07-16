import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { PerfCounterWildcardQuery$PdhCounterWildcardProperty } from '../../../../oshi/util/platform/windows/PerfCounterWildcardQuery$PdhCounterWildcardProperty.d.ts'
export class ProcessInformation$ProcessPerformanceProperty extends Enum<ProcessInformation$ProcessPerformanceProperty> implements PerfCounterWildcardQuery$PdhCounterWildcardProperty {
    static CREATINGPROCESSID: ProcessInformation$ProcessPerformanceProperty;
    static ELAPSEDTIME: ProcessInformation$ProcessPerformanceProperty;
    static IDPROCESS: ProcessInformation$ProcessPerformanceProperty;
    static IOREADBYTESPERSEC: ProcessInformation$ProcessPerformanceProperty;
    static IOWRITEBYTESPERSEC: ProcessInformation$ProcessPerformanceProperty;
    static NAME: ProcessInformation$ProcessPerformanceProperty;
    static PAGEFAULTSPERSEC: ProcessInformation$ProcessPerformanceProperty;
    static PRIORITYBASE: ProcessInformation$ProcessPerformanceProperty;
    static PRIVATEBYTES: ProcessInformation$ProcessPerformanceProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ProcessInformation$ProcessPerformanceProperty;
    static values(): ProcessInformation$ProcessPerformanceProperty[];
    private constructor(arg2: string)
    readonly counter: string;
    getCounter(): string;
    name(): "NAME" | "PRIORITYBASE" | "ELAPSEDTIME" | "IDPROCESS" | "CREATINGPROCESSID" | "IOREADBYTESPERSEC" | "IOWRITEBYTESPERSEC" | "PRIVATEBYTES" | "PAGEFAULTSPERSEC";
}