import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OSProcess } from '../../../oshi/software/os/OSProcess.d.ts'
import type { OSProcess$State } from '../../../oshi/software/os/OSProcess$State.d.ts'
export abstract class AbstractOSProcess extends Object implements OSProcess {
    constructor(arg0: number)
    // private cumulativeCpuLoad: () => number;
    readonly processID: number;
    getAffinityMask(): number;
    getBitness(): number;
    getBytesRead(): number;
    getBytesWritten(): number;
    getCommandLine(): string;
    getContextSwitches(): number;
    getCurrentWorkingDirectory(): string;
    getGroup(): string;
    getGroupID(): string;
    getHardOpenFileLimit(): number;
    getKernelTime(): number;
    getMajorFaults(): number;
    getMinorFaults(): number;
    getName(): string;
    getOpenFiles(): number;
    getParentProcessID(): number;
    getPath(): string;
    getPriority(): number;
    getProcessCpuLoadBetweenTicks(arg0: OSProcess): number;
    getProcessCpuLoadCumulative(): number;
    getProcessID(): number;
    getResidentSetSize(): number;
    getSoftOpenFileLimit(): number;
    getStartTime(): number;
    getState(): OSProcess$State;
    getThreadCount(): number;
    getUpTime(): number;
    getUser(): string;
    getUserID(): string;
    getUserTime(): number;
    getVirtualSize(): number;
    // private queryCumulativeCpuLoad(): number;
    toString(): string;
    updateAttributes(): boolean;
}