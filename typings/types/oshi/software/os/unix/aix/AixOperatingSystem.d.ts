import type { Perfstat$perfstat_partition_config_t } from '../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_partition_config_t.d.ts'
import type { Perfstat$perfstat_process_t } from '../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_process_t.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { AbstractOperatingSystem } from '../../../../../oshi/software/common/AbstractOperatingSystem.d.ts'
import type { ApplicationInfo } from '../../../../../oshi/software/os/ApplicationInfo.d.ts'
import type { FileSystem } from '../../../../../oshi/software/os/FileSystem.d.ts'
import type { InternetProtocolStats } from '../../../../../oshi/software/os/InternetProtocolStats.d.ts'
import type { NetworkParams } from '../../../../../oshi/software/os/NetworkParams.d.ts'
import type { OSProcess } from '../../../../../oshi/software/os/OSProcess.d.ts'
import type { OSService } from '../../../../../oshi/software/os/OSService.d.ts'
import type { OSThread } from '../../../../../oshi/software/os/OSThread.d.ts'
import type { OperatingSystem$OSVersionInfo } from '../../../../../oshi/software/os/OperatingSystem$OSVersionInfo.d.ts'
import type { Pair } from '../../../../../oshi/util/tuples/Pair.d.ts'
export class AixOperatingSystem extends AbstractOperatingSystem {
    constructor()
    // private config: () => Perfstat$perfstat_partition_config_t;
    // private installedAppsSupplier: () => ApplicationInfo[];
    // private procCpu: () => Perfstat$perfstat_process_t[];
    getCurrentThread(): OSThread;
    getFileSystem(): FileSystem;
    getInstalledApplications(): ApplicationInfo[];
    getInternetProtocolStats(): InternetProtocolStats;
    getNetworkParams(): NetworkParams;
    getProcess(arg0: number): OSProcess;
    getProcessCount(): number;
    getProcessId(): number;
    // private getProcessListFromProcfs(arg0: number): OSProcess[];
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