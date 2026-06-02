import type { Object } from '../../java/lang/Object.d.ts'
import type { CentralProcessor$LogicalProcessor } from '../../oshi/hardware/CentralProcessor$LogicalProcessor.d.ts'
import type { CentralProcessor$PhysicalProcessor } from '../../oshi/hardware/CentralProcessor$PhysicalProcessor.d.ts'
import type { CentralProcessor$ProcessorCache } from '../../oshi/hardware/CentralProcessor$ProcessorCache.d.ts'
import type { CentralProcessor$ProcessorIdentifier } from '../../oshi/hardware/CentralProcessor$ProcessorIdentifier.d.ts'
export interface CentralProcessor extends Object{
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
    getSystemLoadAverage(arg0: number): number[];
}