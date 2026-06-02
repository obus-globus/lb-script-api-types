import type { AbstractOperatingSystem } from '../../../../../oshi/software/common/AbstractOperatingSystem.d.ts'
import type { FileSystem } from '../../../../../oshi/software/os/FileSystem.d.ts'
import type { InternetProtocolStats } from '../../../../../oshi/software/os/InternetProtocolStats.d.ts'
import type { NetworkParams } from '../../../../../oshi/software/os/NetworkParams.d.ts'
import type { OSProcess } from '../../../../../oshi/software/os/OSProcess.d.ts'
import type { OSService } from '../../../../../oshi/software/os/OSService.d.ts'
import type { OSThread } from '../../../../../oshi/software/os/OSThread.d.ts'
import type { OperatingSystem$OSVersionInfo } from '../../../../../oshi/software/os/OperatingSystem$OSVersionInfo.d.ts'
import type { Pair } from '../../../../../oshi/util/tuples/Pair.d.ts'
export class OpenBsdOperatingSystem extends AbstractOperatingSystem {
    constructor()
    getCurrentThread(): OSThread;
    getFileSystem(): FileSystem;
    getInternetProtocolStats(): InternetProtocolStats;
    getNetworkParams(): NetworkParams;
    getProcess(arg0: number): OSProcess;
    getProcessCount(): number;
    getProcessId(): number;
    // private getProcessListFromPS(arg0: number): OSProcess[];
    getServices(): OSService[];
    getSystemBootTime(): number;
    getSystemUptime(): number;
    getThreadCount(): number;
    getThreadId(): number;
    queryAllProcesses(): OSProcess[];
    queryBitness(arg0: number): number;
    queryChildProcesses(arg0: number): OSProcess[];
    queryDescendantProcesses(arg0: number): OSProcess[];
    queryFamilyVersionInfo(): Pair<string, OperatingSystem$OSVersionInfo>;
    queryManufacturer(): string;
}