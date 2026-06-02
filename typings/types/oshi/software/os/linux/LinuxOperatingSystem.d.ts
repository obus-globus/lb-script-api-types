import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { AbstractOperatingSystem } from '../../../../oshi/software/common/AbstractOperatingSystem.d.ts'
import type { ApplicationInfo } from '../../../../oshi/software/os/ApplicationInfo.d.ts'
import type { FileSystem } from '../../../../oshi/software/os/FileSystem.d.ts'
import type { InternetProtocolStats } from '../../../../oshi/software/os/InternetProtocolStats.d.ts'
import type { NetworkParams } from '../../../../oshi/software/os/NetworkParams.d.ts'
import type { OSProcess } from '../../../../oshi/software/os/OSProcess.d.ts'
import type { OSService } from '../../../../oshi/software/os/OSService.d.ts'
import type { OSSession } from '../../../../oshi/software/os/OSSession.d.ts'
import type { OSThread } from '../../../../oshi/software/os/OSThread.d.ts'
import type { OperatingSystem$OSVersionInfo } from '../../../../oshi/software/os/OperatingSystem$OSVersionInfo.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
export class LinuxOperatingSystem extends AbstractOperatingSystem {
    static HAS_GETTID: boolean;
    static HAS_SYSCALL_GETTID: boolean;
    static HAS_UDEV: boolean;
    static getHz(): number;
    static getPageSize(): number;
    constructor()
    // private installedAppsSupplier: () => ApplicationInfo[];
    getCurrentThread(): OSThread;
    getFileSystem(): FileSystem;
    getInstalledApplications(): ApplicationInfo[];
    getInternetProtocolStats(): InternetProtocolStats;
    getNetworkParams(): NetworkParams;
    getProcess(arg0: number): OSProcess;
    getProcessCount(): number;
    getProcessId(): number;
    getServices(): OSService[];
    getSessions(): OSSession[];
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
    // private queryProcessList(arg0: number[]): OSProcess[];
}