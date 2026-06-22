import type { Comparator } from '../../../java/util/Comparator.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ApplicationInfo } from '../../../oshi/software/os/ApplicationInfo.d.ts'
import type { FileSystem } from '../../../oshi/software/os/FileSystem.d.ts'
import type { InternetProtocolStats } from '../../../oshi/software/os/InternetProtocolStats.d.ts'
import type { NetworkParams } from '../../../oshi/software/os/NetworkParams.d.ts'
import type { OSDesktopWindow } from '../../../oshi/software/os/OSDesktopWindow.d.ts'
import type { OSProcess } from '../../../oshi/software/os/OSProcess.d.ts'
import type { OSService } from '../../../oshi/software/os/OSService.d.ts'
import type { OSSession } from '../../../oshi/software/os/OSSession.d.ts'
import type { OSThread } from '../../../oshi/software/os/OSThread.d.ts'
import type { OperatingSystem } from '../../../oshi/software/os/OperatingSystem.d.ts'
import type { OperatingSystem$OSVersionInfo } from '../../../oshi/software/os/OperatingSystem$OSVersionInfo.d.ts'
import type { Pair } from '../../../oshi/util/tuples/Pair.d.ts'
export abstract class AbstractOperatingSystem extends Object implements OperatingSystem {
    constructor()
    readonly bitness: () => number;
    // private familyVersionInfo: () => Pair<string, OperatingSystem$OSVersionInfo>;
    readonly manufacturer: () => string;
    getBitness(): number;
    getChildProcesses(arg0: number, arg1: (param0: OSProcess) => boolean, arg2: (param0: Object) => boolean, arg3: number): OSProcess[];
    getCurrentProcess(): OSProcess;
    getCurrentThread(): OSThread;
    getDescendantProcesses(arg0: number, arg1: (param0: OSProcess) => boolean, arg2: (param0: Object) => boolean, arg3: number): OSProcess[];
    getDesktopWindows(arg0: boolean): OSDesktopWindow[];
    getFamily(): string;
    getFileSystem(): FileSystem;
    getInstalledApplications(): ApplicationInfo[];
    getInternetProtocolStats(): InternetProtocolStats;
    getManufacturer(): string;
    getNetworkParams(): NetworkParams;
    getProcess(arg0: number): OSProcess;
    getProcessCount(): number;
    getProcessId(): number;
    getProcesses(): OSProcess[];
    getProcesses(arg0: (param0: OSProcess) => boolean, arg1: (param0: Object) => boolean, arg2: number): OSProcess[];
    getProcesses(arg0: number[]): OSProcess[];
    getServices(): OSService[];
    getSessions(): OSSession[];
    getSystemBootTime(): number;
    getSystemUptime(): number;
    getThreadCount(): number;
    getThreadId(): number;
    getVersionInfo(): OperatingSystem$OSVersionInfo;
    isElevated(): boolean;
    queryAllProcesses(): OSProcess[];
    queryBitness(arg0: number): number;
    queryChildProcesses(arg0: number): OSProcess[];
    queryDescendantProcesses(arg0: number): OSProcess[];
    queryFamilyVersionInfo(): Pair<string, OperatingSystem$OSVersionInfo>;
    queryManufacturer(): string;
    // private queryPlatformBitness(): number;
    toString(): string;
}