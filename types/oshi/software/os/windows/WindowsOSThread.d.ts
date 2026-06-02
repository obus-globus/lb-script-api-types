import type { ThreadPerformanceData$PerfCounterBlock } from '../../../../oshi/driver/windows/registry/ThreadPerformanceData$PerfCounterBlock.d.ts'
import type { AbstractOSThread } from '../../../../oshi/software/common/AbstractOSThread.d.ts'
import type { OSProcess$State } from '../../../../oshi/software/os/OSProcess$State.d.ts'
export class WindowsOSThread extends AbstractOSThread {
    constructor(arg0: number, arg1: number, arg2: string, arg3: ThreadPerformanceData$PerfCounterBlock)
    readonly contextSwitches: number;
    readonly kernelTime: number;
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
    getName(): string;
    getPriority(): number;
    getStartMemoryAddress(): number;
    getStartTime(): number;
    getState(): OSProcess$State;
    getThreadId(): number;
    getUpTime(): number;
    getUserTime(): number;
    updateAttributes(): boolean;
    // private updateAttributes(arg0: string, arg1: ThreadPerformanceData$PerfCounterBlock): boolean;
}