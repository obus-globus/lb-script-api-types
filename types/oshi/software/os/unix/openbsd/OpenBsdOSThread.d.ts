import type { AbstractOSThread } from '../../../../../oshi/software/common/AbstractOSThread.d.ts'
import type { OSProcess$State } from '../../../../../oshi/software/os/OSProcess$State.d.ts'
import type { OpenBsdOSProcess$PsThreadColumns } from '../../../../../oshi/software/os/unix/openbsd/OpenBsdOSProcess$PsThreadColumns.d.ts'
export class OpenBsdOSThread extends AbstractOSThread {
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: { [key in OpenBsdOSProcess$PsThreadColumns]: string })
    readonly contextSwitches: number;
    readonly kernelTime: number;
    readonly majorFaults: number;
    readonly minorFaults: number;
    readonly name: string;
    readonly priority: number;
    readonly startMemoryAddress: number;
    readonly startTime: number;
    readonly state: OSProcess$State;
    readonly threadId: number;
    readonly upTime: number;
    readonly userTime: number;
    getContextSwitches(): number;
    getKernelTime(): number;
    getMajorFaults(): number;
    getMinorFaults(): number;
    getName(): string;
    getPriority(): number;
    getStartMemoryAddress(): number;
    getStartTime(): number;
    getState(): OSProcess$State;
    getThreadId(): number;
    getUpTime(): number;
    getUserTime(): number;
    updateAttributes(): boolean;
    // private updateAttributes(arg0: { [key in OpenBsdOSProcess$PsThreadColumns]: string }): boolean;
}