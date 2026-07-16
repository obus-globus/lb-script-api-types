import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { PerfCounterQuery$PdhCounterProperty } from '../../../../oshi/util/platform/windows/PerfCounterQuery$PdhCounterProperty.d.ts'
export class SystemInformation$ContextSwitchProperty extends Enum<SystemInformation$ContextSwitchProperty> implements PerfCounterQuery$PdhCounterProperty {
    static CONTEXTSWITCHESPERSEC: SystemInformation$ContextSwitchProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SystemInformation$ContextSwitchProperty;
    static values(): SystemInformation$ContextSwitchProperty[];
    private constructor(arg2: string, arg3: string)
    readonly counter: string;
    readonly instance: string;
    getCounter(): string;
    getInstance(): string;
    name(): "CONTEXTSWITCHESPERSEC";
}