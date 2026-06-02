import type { Object } from '../../../java/lang/Object.d.ts'
import type { OSProcess$State } from '../../../oshi/software/os/OSProcess$State.d.ts'
import type { OSThread } from '../../../oshi/software/os/OSThread.d.ts'
export interface OSProcess extends Object{
    getAffinityMask(): number;
    getArguments(): string[];
    getBitness(): number;
    getBytesRead(): number;
    getBytesWritten(): number;
    getCommandLine(): string;
    getContextSwitches(): number;
    getCurrentWorkingDirectory(): string;
    getEnvironmentVariables(): { [key: string]: string };
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
    getThreadDetails(): OSThread[];
    getUpTime(): number;
    getUser(): string;
    getUserID(): string;
    getUserTime(): number;
    getVirtualSize(): number;
    updateAttributes(): boolean;
}