import type { AbstractOSThread } from '../../../../../oshi/software/common/AbstractOSThread.d.ts'
import type { OSProcess$State } from '../../../../../oshi/software/os/OSProcess$State.d.ts'
import type { FreeBsdOSProcess$PsThreadColumns } from '../../../../../oshi/software/os/unix/freebsd/FreeBsdOSProcess$PsThreadColumns.d.ts'
export class FreeBsdOSThread extends AbstractOSThread {
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: Map<FreeBsdOSProcess$PsThreadColumns, string>)
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
    // private updateAttributes(arg0: Map<FreeBsdOSProcess$PsThreadColumns, string>): boolean;
}