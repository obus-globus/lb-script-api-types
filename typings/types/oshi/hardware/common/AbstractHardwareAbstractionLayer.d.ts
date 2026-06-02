import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CentralProcessor } from '../../../oshi/hardware/CentralProcessor.d.ts'
import type { ComputerSystem } from '../../../oshi/hardware/ComputerSystem.d.ts'
import type { GlobalMemory } from '../../../oshi/hardware/GlobalMemory.d.ts'
import type { HardwareAbstractionLayer } from '../../../oshi/hardware/HardwareAbstractionLayer.d.ts'
import type { LogicalVolumeGroup } from '../../../oshi/hardware/LogicalVolumeGroup.d.ts'
import type { NetworkIF } from '../../../oshi/hardware/NetworkIF.d.ts'
import type { Sensors } from '../../../oshi/hardware/Sensors.d.ts'
export abstract class AbstractHardwareAbstractionLayer extends Object implements HardwareAbstractionLayer {
    constructor()
    readonly computerSystem: () => ComputerSystem;
    readonly memory: () => GlobalMemory;
    readonly processor: () => CentralProcessor;
    readonly sensors: () => Sensors;
    createComputerSystem(): ComputerSystem;
    createMemory(): GlobalMemory;
    createProcessor(): CentralProcessor;
    createSensors(): Sensors;
    getComputerSystem(): ComputerSystem;
    getLogicalVolumeGroups(): LogicalVolumeGroup[];
    getMemory(): GlobalMemory;
    getNetworkIFs(): NetworkIF[];
    getProcessor(): CentralProcessor;
    getSensors(): Sensors;
}