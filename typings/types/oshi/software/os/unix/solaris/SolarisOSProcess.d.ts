import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { SolarisLibc$SolarisPrUsage } from '../../../../../oshi/jna/platform/unix/SolarisLibc$SolarisPrUsage.d.ts'
import type { SolarisLibc$SolarisPsInfo } from '../../../../../oshi/jna/platform/unix/SolarisLibc$SolarisPsInfo.d.ts'
import type { AbstractOSProcess } from '../../../../../oshi/software/common/AbstractOSProcess.d.ts'
import type { OSProcess$State } from '../../../../../oshi/software/os/OSProcess$State.d.ts'
import type { OSThread } from '../../../../../oshi/software/os/OSThread.d.ts'
import type { SolarisOperatingSystem } from '../../../../../oshi/software/os/unix/solaris/SolarisOperatingSystem.d.ts'
import type { Pair } from '../../../../../oshi/util/tuples/Pair.d.ts'
export class SolarisOSProcess extends AbstractOSProcess {
    constructor(arg0: number, arg1: SolarisOperatingSystem)
    readonly bitness: () => number;
    readonly bytesRead: number;
    readonly bytesWritten: number;
    // private cmdEnv: () => Pair<string[], JavaMap<string, string>>;
    readonly commandLine: () => string;
    // private commandLineBackup: string;
    readonly contextSwitches: number;
    readonly group: string;
    readonly groupID: string;
    readonly kernelTime: number;
    readonly majorFaults: number;
    readonly minorFaults: number;
    readonly name: string;
    // private os: SolarisOperatingSystem;
    readonly parentProcessID: number;
    readonly path: string;
    readonly priority: number;
    // private prusage: () => SolarisLibc$SolarisPrUsage;
    // private psinfo: () => SolarisLibc$SolarisPsInfo;
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
    getContextSwitches(): number;
    getCurrentWorkingDirectory(): string;
    getEnvironmentVariables(): JavaMap<string, string>;
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
    // private getProcessOpenFileLimit(arg0: number, arg1: number): number;
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
    // private queryPrUsage(): SolarisLibc$SolarisPrUsage;
    // private queryPsInfo(): SolarisLibc$SolarisPsInfo;
    updateAttributes(): boolean;
}