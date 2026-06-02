import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { CentralProcessor$LogicalProcessor } from '../../../../oshi/hardware/CentralProcessor$LogicalProcessor.d.ts'
import type { CentralProcessor$PhysicalProcessor } from '../../../../oshi/hardware/CentralProcessor$PhysicalProcessor.d.ts'
import type { CentralProcessor$ProcessorCache } from '../../../../oshi/hardware/CentralProcessor$ProcessorCache.d.ts'
import type { CentralProcessor$ProcessorIdentifier } from '../../../../oshi/hardware/CentralProcessor$ProcessorIdentifier.d.ts'
import type { AbstractCentralProcessor } from '../../../../oshi/hardware/common/AbstractCentralProcessor.d.ts'
import type { Quartet } from '../../../../oshi/util/tuples/Quartet.d.ts'
export class MacCentralProcessor extends AbstractCentralProcessor {
    static orderedProcCaches(paramarg0: CentralProcessor$ProcessorCache[]): CentralProcessor$ProcessorCache[];
    constructor()
    // private efficiencyCoreFrequency: number;
    // private isArmCpu: boolean;
    // private performanceCoreFrequency: number;
    // private vendor: () => string;
    // private calculateNominalFrequencies(): void;
    // private getCacheValues(arg0: number): CentralProcessor$ProcessorCache[];
    // private getFeatureFlagsFromSysctl(): string[];
    // private getMaxFreqFromByteArray(arg0: number[]): number;
    getSystemLoadAverage(arg0: number): number[];
    initProcessorCounts(): Quartet<CentralProcessor$LogicalProcessor[], CentralProcessor$PhysicalProcessor[], CentralProcessor$ProcessorCache[], string[]>;
    // private isArmCpu(): boolean;
    queryContextSwitches(): number;
    queryCurrentFreq(): number[];
    queryInterrupts(): number;
    queryMaxFreq(): number;
    queryProcessorCpuLoadTicks(): number[][];
    queryProcessorId(): CentralProcessor$ProcessorIdentifier;
    querySystemCpuLoadTicks(): number[];
}