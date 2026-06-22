import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OSProcess$State } from '../../../oshi/software/os/OSProcess$State.d.ts'
import type { OSThread } from '../../../oshi/software/os/OSThread.d.ts'
export abstract class AbstractOSThread extends Object implements OSThread {
    constructor(arg0: number)
    // private cumulativeCpuLoad: () => number;
    readonly owningProcessId: number;
    getContextSwitches(): number;
    getKernelTime(): number;
    getMajorFaults(): number;
    getMinorFaults(): number;
    getName(): string;
    getOwningProcessId(): number;
    getPriority(): number;
    getStartMemoryAddress(): number;
    getStartTime(): number;
    getState(): OSProcess$State;
    getThreadCpuLoadBetweenTicks(arg0: OSThread): number;
    getThreadCpuLoadCumulative(): number;
    getThreadId(): number;
    getUpTime(): number;
    getUserTime(): number;
    // private queryCumulativeCpuLoad(): number;
    toString(): string;
    updateAttributes(): boolean;
}