import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { PerfCounterQuery$PdhCounterProperty } from '../../../../oshi/util/platform/windows/PerfCounterQuery$PdhCounterProperty.d.ts'
export class PagingFile$PagingPercentProperty extends Enum<PagingFile$PagingPercentProperty> implements PerfCounterQuery$PdhCounterProperty {
    static PERCENTUSAGE: PagingFile$PagingPercentProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PagingFile$PagingPercentProperty;
    static values(): PagingFile$PagingPercentProperty[];
    private constructor(arg2: string, arg3: string)
    readonly counter: string;
    readonly instance: string;
    getCounter(): string;
    getInstance(): string;
    name(): "PERCENTUSAGE";
}