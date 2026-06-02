import type { AbstractOSThread } from '../../../../oshi/software/common/AbstractOSThread.d.ts'
import type { OSProcess$State } from '../../../../oshi/software/os/OSProcess$State.d.ts'
export class MacOSThread extends AbstractOSThread {
    constructor(arg0: number)
    constructor(arg0: number, arg1: number, arg2: OSProcess$State, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number)
    readonly kernelTime: number;
    readonly priority: number;
    readonly startTime: number;
    readonly state: OSProcess$State;
    readonly threadId: number;
    readonly upTime: number;
    readonly userTime: number;
    getKernelTime(): number;
    getPriority(): number;
    getStartTime(): number;
    getState(): OSProcess$State;
    getThreadId(): number;
    getUpTime(): number;
    getUserTime(): number;
}