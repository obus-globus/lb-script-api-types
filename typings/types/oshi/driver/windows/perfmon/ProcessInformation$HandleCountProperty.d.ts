import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { PerfCounterWildcardQuery$PdhCounterWildcardProperty } from '../../../../oshi/util/platform/windows/PerfCounterWildcardQuery$PdhCounterWildcardProperty.d.ts'
export class ProcessInformation$HandleCountProperty extends Enum<ProcessInformation$HandleCountProperty> implements PerfCounterWildcardQuery$PdhCounterWildcardProperty {
    static HANDLECOUNT: ProcessInformation$HandleCountProperty;
    static NAME: ProcessInformation$HandleCountProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ProcessInformation$HandleCountProperty;
    static values(): ProcessInformation$HandleCountProperty[];
    private constructor(arg2: string)
    readonly counter: string;
    getCounter(): string;
    name(): "NAME" | "HANDLECOUNT";
}