import type { Object } from '../../../java/lang/Object.d.ts'
import type { OSProcess$State } from '../../../oshi/software/os/OSProcess$State.d.ts'
export interface OSThread extends Object{
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
    updateAttributes(): boolean;
}