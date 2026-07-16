import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { PerfCounterWildcardQuery$PdhCounterWildcardProperty } from '../../../../oshi/util/platform/windows/PerfCounterWildcardQuery$PdhCounterWildcardProperty.d.ts'
export class ThreadInformation$ThreadPerformanceProperty extends Enum<ThreadInformation$ThreadPerformanceProperty> implements PerfCounterWildcardQuery$PdhCounterWildcardProperty {
    static CONTEXTSWITCHESPERSEC: ThreadInformation$ThreadPerformanceProperty;
    static ELAPSEDTIME: ThreadInformation$ThreadPerformanceProperty;
    static IDPROCESS: ThreadInformation$ThreadPerformanceProperty;
    static IDTHREAD: ThreadInformation$ThreadPerformanceProperty;
    static NAME: ThreadInformation$ThreadPerformanceProperty;
    static PERCENTPRIVILEGEDTIME: ThreadInformation$ThreadPerformanceProperty;
    static PERCENTUSERTIME: ThreadInformation$ThreadPerformanceProperty;
    static PRIORITYCURRENT: ThreadInformation$ThreadPerformanceProperty;
    static STARTADDRESS: ThreadInformation$ThreadPerformanceProperty;
    static THREADSTATE: ThreadInformation$ThreadPerformanceProperty;
    static THREADWAITREASON: ThreadInformation$ThreadPerformanceProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ThreadInformation$ThreadPerformanceProperty;
    static values(): ThreadInformation$ThreadPerformanceProperty[];
    private constructor(arg2: string)
    readonly counter: string;
    getCounter(): string;
    name(): "NAME" | "PERCENTUSERTIME" | "PERCENTPRIVILEGEDTIME" | "ELAPSEDTIME" | "PRIORITYCURRENT" | "STARTADDRESS" | "THREADSTATE" | "THREADWAITREASON" | "IDPROCESS" | "IDTHREAD" | "CONTEXTSWITCHESPERSEC";
}