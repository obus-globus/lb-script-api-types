import type { Object } from '../../../../java/lang/Object.d.ts'
export class ThreadPerformanceData$PerfCounterBlock extends Object {
    constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number)
    readonly contextSwitches: number;
    readonly kernelTime: number;
    readonly name: string;
    readonly owningProcessID: number;
    readonly priority: number;
    readonly startAddress: number;
    readonly startTime: number;
    readonly threadID: number;
    readonly threadState: number;
    readonly threadWaitReason: number;
    readonly userTime: number;
    getContextSwitches(): number;
    getKernelTime(): number;
    getName(): string;
    getOwningProcessID(): number;
    getPriority(): number;
    getStartAddress(): number;
    getStartTime(): number;
    getThreadID(): number;
    getThreadState(): number;
    getThreadWaitReason(): number;
    getUserTime(): number;
}