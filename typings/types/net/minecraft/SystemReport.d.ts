import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { StringBuilder } from '../../java/lang/StringBuilder.d.ts'
import type { Supplier } from '../../java/util/function/Supplier.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CrashReportCategory$Entry } from '../../net/minecraft/CrashReportCategory$Entry.d.ts'
import type { CrashReportDetail } from '../../net/minecraft/CrashReportDetail.d.ts'
import type { SystemInfo } from '../../oshi/SystemInfo.d.ts'
import type { CentralProcessor } from '../../oshi/hardware/CentralProcessor.d.ts'
import type { GlobalMemory } from '../../oshi/hardware/GlobalMemory.d.ts'
import type { GraphicsCard } from '../../oshi/hardware/GraphicsCard.d.ts'
import type { PhysicalMemory } from '../../oshi/hardware/PhysicalMemory.d.ts'
import type { VirtualMemory } from '../../oshi/hardware/VirtualMemory.d.ts'
import type { OSProcess } from '../../oshi/software/os/OSProcess.d.ts'
export class SystemReport extends Object {
    static BYTES_PER_MEBIBYTE: number;
    static sizeInMiB(parambytes: number): number;
    constructor()
    // private entries: CrashReportCategory$Entry[];
    appendToCrashReportString(sb: StringBuilder): void;
    // private ignoreErrors(group: string, action: () => void): void;
    // private putGraphics(graphicsCards: GraphicsCard[]): void;
    // private putHardware(systemInfo: SystemInfo): void;
    // private putMemory(memory: GlobalMemory): void;
    // private putPhysicalMemory(memoryPackages: PhysicalMemory[]): void;
    // private putProcessDetails(process: OSProcess): void;
    // private putProcessor(processor: CentralProcessor): void;
    // private putSoftware(systemInfo: SystemInfo): void;
    // private putSpaceForPath(id: string, pathSupplier: () => string): void;
    // private putSpaceForProperty(env: string): void;
    // private putStorage(): void;
    // private putVirtualMemory(virtualMemory: VirtualMemory): void;
    setDetail(key: string, value: string): void;
    setDetail(key: string, valueSupplier: CrashReportDetail<Object>): void;
    toLineSeparatedString(): string;
}