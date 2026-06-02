import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OSProcess } from '../../../oshi/software/os/OSProcess.d.ts'
export abstract class AbstractOSProcess extends Object implements OSProcess {
    constructor(arg0: number)
    // private cumulativeCpuLoad: () => number;
    readonly processID: number;
    getContextSwitches(): number;
    getMajorFaults(): number;
    getMinorFaults(): number;
    getProcessCpuLoadBetweenTicks(arg0: OSProcess): number;
    getProcessCpuLoadCumulative(): number;
    getProcessID(): number;
    // private queryCumulativeCpuLoad(): number;
    toString(): string;
}