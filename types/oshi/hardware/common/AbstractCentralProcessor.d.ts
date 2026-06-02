import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CentralProcessor } from '../../../oshi/hardware/CentralProcessor.d.ts'
import type { CentralProcessor$LogicalProcessor } from '../../../oshi/hardware/CentralProcessor$LogicalProcessor.d.ts'
import type { CentralProcessor$PhysicalProcessor } from '../../../oshi/hardware/CentralProcessor$PhysicalProcessor.d.ts'
import type { CentralProcessor$ProcessorCache } from '../../../oshi/hardware/CentralProcessor$ProcessorCache.d.ts'
import type { CentralProcessor$ProcessorIdentifier } from '../../../oshi/hardware/CentralProcessor$ProcessorIdentifier.d.ts'
import type { Quartet } from '../../../oshi/util/tuples/Quartet.d.ts'
export abstract class AbstractCentralProcessor extends Object implements CentralProcessor {
    static orderedProcCaches(paramarg0: CentralProcessor$ProcessorCache[]): CentralProcessor$ProcessorCache[];
    constructor()
    readonly contextSwitches: () => number;
    // private cpuid: () => CentralProcessor$ProcessorIdentifier;
    readonly currentFreq: () => number[];
    readonly featureFlags: string[];
    readonly interrupts: () => number;
    readonly logicalProcessorCount: number;
    readonly logicalProcessors: CentralProcessor$LogicalProcessor[];
    readonly maxFreq: () => number;
    readonly physicalPackageCount: number;
    readonly physicalProcessorCount: number;
    readonly physicalProcessors: CentralProcessor$PhysicalProcessor[];
    readonly processorCaches: CentralProcessor$ProcessorCache[];
    readonly processorCpuLoadTicks: () => number[][];
    readonly systemCpuLoadTicks: () => number[];
    createProcListFromDmesg(arg0: CentralProcessor$LogicalProcessor[], arg1: { [key: number]: string }): CentralProcessor$PhysicalProcessor[];
    getContextSwitches(): number;
    getCurrentFreq(): number[];
    getFeatureFlags(): string[];
    getInterrupts(): number;
    getLogicalProcessorCount(): number;
    getLogicalProcessors(): CentralProcessor$LogicalProcessor[];
    getMaxFreq(): number;
    getPhysicalPackageCount(): number;
    getPhysicalProcessorCount(): number;
    getPhysicalProcessors(): CentralProcessor$PhysicalProcessor[];
    getProcessorCaches(): CentralProcessor$ProcessorCache[];
    getProcessorCpuLoad(arg0: number): number[];
    getProcessorCpuLoadBetweenTicks(arg0: number[][]): number[];
    getProcessorCpuLoadTicks(): number[][];
    getProcessorIdentifier(): CentralProcessor$ProcessorIdentifier;
    getSystemCpuLoad(arg0: number): number;
    getSystemCpuLoadBetweenTicks(arg0: number[]): number;
    getSystemCpuLoadTicks(): number[];
    initProcessorCounts(): Quartet<CentralProcessor$LogicalProcessor[], CentralProcessor$PhysicalProcessor[], CentralProcessor$ProcessorCache[], string[]>;
    queryContextSwitches(): number;
    queryCurrentFreq(): number[];
    queryInterrupts(): number;
    queryMaxFreq(): number;
    queryProcessorCpuLoadTicks(): number[][];
    queryProcessorId(): CentralProcessor$ProcessorIdentifier;
    querySystemCpuLoadTicks(): number[];
    toString(): string;
}