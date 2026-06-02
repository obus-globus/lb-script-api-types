import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { SolarisLibc$SolarisLwpsInfo } from '../../../../../oshi/jna/platform/unix/SolarisLibc$SolarisLwpsInfo.d.ts'
import type { SolarisLibc$SolarisPrUsage } from '../../../../../oshi/jna/platform/unix/SolarisLibc$SolarisPrUsage.d.ts'
import type { AbstractOSThread } from '../../../../../oshi/software/common/AbstractOSThread.d.ts'
import type { OSProcess$State } from '../../../../../oshi/software/os/OSProcess$State.d.ts'
export class SolarisOSThread extends AbstractOSThread {
    constructor(arg0: number, arg1: number)
    readonly contextSwitches: number;
    readonly kernelTime: number;
    // private lwpsinfo: () => SolarisLibc$SolarisLwpsInfo;
    readonly name: string;
    readonly priority: number;
    // private prusage: () => SolarisLibc$SolarisPrUsage;
    readonly startMemoryAddress: number;
    readonly startTime: number;
    readonly state: OSProcess$State;
    readonly threadId: number;
    readonly upTime: number;
    readonly userTime: number;
    getContextSwitches(): number;
    getKernelTime(): number;
    getName(): string;
    getPriority(): number;
    getStartMemoryAddress(): number;
    getStartTime(): number;
    getState(): OSProcess$State;
    getThreadId(): number;
    getUpTime(): number;
    getUserTime(): number;
    // private queryLwpsInfo(): SolarisLibc$SolarisLwpsInfo;
    // private queryPrUsage(): SolarisLibc$SolarisPrUsage;
    updateAttributes(): boolean;
}