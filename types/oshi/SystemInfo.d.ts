import type { Supplier } from '../java/util/function/Supplier.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { PlatformEnum } from '../oshi/PlatformEnum.d.ts'
import type { HardwareAbstractionLayer } from '../oshi/hardware/HardwareAbstractionLayer.d.ts'
import type { OperatingSystem } from '../oshi/software/os/OperatingSystem.d.ts'
export class SystemInfo extends Object {
    static getCurrentPlatform(): PlatformEnum;
    constructor()
    readonly hardware: () => HardwareAbstractionLayer;
    // private os: () => OperatingSystem;
    getHardware(): HardwareAbstractionLayer;
    getOperatingSystem(): OperatingSystem;
}