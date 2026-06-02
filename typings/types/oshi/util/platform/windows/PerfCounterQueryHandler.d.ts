import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ByRef$CloseableHANDLEByReference } from '../../../../oshi/jna/ByRef$CloseableHANDLEByReference.d.ts'
import type { PerfDataUtil$PerfCounter } from '../../../../oshi/util/platform/windows/PerfDataUtil$PerfCounter.d.ts'
export class PerfCounterQueryHandler extends Object implements AutoCloseable {
    constructor()
    // private counterHandleMap: Map<PerfDataUtil$PerfCounter, ByRef$CloseableHANDLEByReference>;
    // private queryHandle: ByRef$CloseableHANDLEByReference;
    addCounterToQuery(arg0: PerfDataUtil$PerfCounter): boolean;
    close(): void;
    queryCounter(arg0: PerfDataUtil$PerfCounter): number;
    removeAllCounters(): void;
    removeCounterFromQuery(arg0: PerfDataUtil$PerfCounter): boolean;
    updateQuery(): number;
}