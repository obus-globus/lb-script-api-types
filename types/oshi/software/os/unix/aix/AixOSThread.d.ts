import type { AbstractOSThread } from '../../../../../oshi/software/common/AbstractOSThread.d.ts'
import type { OSProcess$State } from '../../../../../oshi/software/os/OSProcess$State.d.ts'
export class AixOSThread extends AbstractOSThread {
    constructor(arg0: number, arg1: number)
    readonly contextSwitches: number;
    readonly kernelTime: number;
    readonly priority: number;
    readonly startMemoryAddress: number;
    readonly startTime: number;
    readonly state: OSProcess$State;
    readonly threadId: number;
    readonly upTime: number;
    readonly userTime: number;
    getContextSwitches(): number;
    getKernelTime(): number;
    getPriority(): number;
    getStartMemoryAddress(): number;
    getStartTime(): number;
    getState(): OSProcess$State;
    getThreadId(): number;
    getUpTime(): number;
    getUserTime(): number;
    updateAttributes(): boolean;
}