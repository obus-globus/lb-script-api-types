import type { CentralProcessor } from '../../../../oshi/hardware/CentralProcessor.d.ts'
import type { ComputerSystem } from '../../../../oshi/hardware/ComputerSystem.d.ts'
import type { Display } from '../../../../oshi/hardware/Display.d.ts'
import type { GlobalMemory } from '../../../../oshi/hardware/GlobalMemory.d.ts'
import type { GraphicsCard } from '../../../../oshi/hardware/GraphicsCard.d.ts'
import type { HWDiskStore } from '../../../../oshi/hardware/HWDiskStore.d.ts'
import type { LogicalVolumeGroup } from '../../../../oshi/hardware/LogicalVolumeGroup.d.ts'
import type { NetworkIF } from '../../../../oshi/hardware/NetworkIF.d.ts'
import type { PowerSource } from '../../../../oshi/hardware/PowerSource.d.ts'
import type { Sensors } from '../../../../oshi/hardware/Sensors.d.ts'
import type { SoundCard } from '../../../../oshi/hardware/SoundCard.d.ts'
import type { UsbDevice } from '../../../../oshi/hardware/UsbDevice.d.ts'
import type { AbstractHardwareAbstractionLayer } from '../../../../oshi/hardware/common/AbstractHardwareAbstractionLayer.d.ts'
export class LinuxHardwareAbstractionLayer extends AbstractHardwareAbstractionLayer {
    constructor()
    createComputerSystem(): ComputerSystem;
    createMemory(): GlobalMemory;
    createProcessor(): CentralProcessor;
    createSensors(): Sensors;
    getDiskStores(): HWDiskStore[];
    getDisplays(): Display[];
    getGraphicsCards(): GraphicsCard[];
    getLogicalVolumeGroups(): LogicalVolumeGroup[];
    getNetworkIFs(): NetworkIF[];
    getNetworkIFs(arg0: boolean): NetworkIF[];
    getPowerSources(): PowerSource[];
    getSoundCards(): SoundCard[];
    getUsbDevices(arg0: boolean): UsbDevice[];
}