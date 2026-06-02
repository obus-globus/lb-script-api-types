import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OSThread } from '../../../oshi/software/os/OSThread.d.ts'
export abstract class AbstractOSThread extends Object implements OSThread {
    constructor(arg0: number)
    // private cumulativeCpuLoad: () => number;
    readonly owningProcessId: number;
    getContextSwitches(): number;
    getMajorFaults(): number;
    getMinorFaults(): number;
    getName(): string;
    getOwningProcessId(): number;
    getStartMemoryAddress(): number;
    getThreadCpuLoadBetweenTicks(arg0: OSThread): number;
    getThreadCpuLoadCumulative(): number;
    // private queryCumulativeCpuLoad(): number;
    toString(): string;
    updateAttributes(): boolean;
}