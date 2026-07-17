import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Perfstat$perfstat_process_t } from '../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_process_t.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { AixLibc$AixPsInfo } from '../../../../../oshi/jna/platform/unix/AixLibc$AixPsInfo.d.ts'
import type { AbstractOSProcess } from '../../../../../oshi/software/common/AbstractOSProcess.d.ts'
import type { OSProcess$State } from '../../../../../oshi/software/os/OSProcess$State.d.ts'
import type { OSThread } from '../../../../../oshi/software/os/OSThread.d.ts'
import type { AixOperatingSystem } from '../../../../../oshi/software/os/unix/aix/AixOperatingSystem.d.ts'
import type { Pair } from '../../../../../oshi/util/tuples/Pair.d.ts'
export class AixOSProcess extends AbstractOSProcess {
    constructor(arg0: number, arg1: Pair<number, number>, arg2: () => Perfstat$perfstat_process_t[], arg3: AixOperatingSystem)
    readonly affinityMask: () => number;
    readonly bitness: () => number;
    readonly bytesRead: number;
    readonly bytesWritten: number;
    // private cmdEnv: () => Pair<string[], JavaMap<string, string>>;
    readonly commandLine: () => string;
    // private commandLineBackup: string;
    readonly group: string;
    readonly groupID: string;
    readonly kernelTime: number;
    readonly name: string;
    // private os: AixOperatingSystem;
    readonly parentProcessID: number;
    readonly path: string;
    readonly priority: number;
    // private procCpu: () => Perfstat$perfstat_process_t[];
    // private psinfo: () => AixLibc$AixPsInfo;
    readonly residentSetSize: number;
    readonly startTime: number;
    readonly state: OSProcess$State;
    readonly threadCount: number;
    readonly upTime: number;
    readonly user: string;
    readonly userID: string;
    readonly userTime: number;
    readonly virtualSize: number;
    getAffinityMask(): number;
    getArguments(): string[];
    getBitness(): number;
    getBytesRead(): number;
    getBytesWritten(): number;
    getCommandLine(): string;
    getCurrentWorkingDirectory(): string;
    getEnvironmentVariables(): JavaMap<string, string>;
    getGroup(): string;
    getGroupID(): string;
    getHardOpenFileLimit(): number;
    getKernelTime(): number;
    getName(): string;
    getOpenFiles(): number;
    getParentProcessID(): number;
    getPath(): string;
    getPriority(): number;
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
    // private queryBitness(): number;
    // private queryCommandLine(): string;
    // private queryCommandlineEnvironment(): Pair<string[], JavaMap<string, string>>;
    // private queryPsInfo(): AixLibc$AixPsInfo;
    updateAttributes(): boolean;
    // private updateAttributes(arg0: Pair<number, number>): boolean;
}