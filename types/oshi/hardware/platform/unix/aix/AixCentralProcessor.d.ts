import type { Perfstat$perfstat_cpu_t } from '../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_cpu_t.d.ts'
import type { Perfstat$perfstat_cpu_total_t } from '../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_cpu_total_t.d.ts'
import type { Perfstat$perfstat_partition_config_t } from '../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_partition_config_t.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { CentralProcessor$LogicalProcessor } from '../../../../../oshi/hardware/CentralProcessor$LogicalProcessor.d.ts'
import type { CentralProcessor$PhysicalProcessor } from '../../../../../oshi/hardware/CentralProcessor$PhysicalProcessor.d.ts'
import type { CentralProcessor$ProcessorCache } from '../../../../../oshi/hardware/CentralProcessor$ProcessorCache.d.ts'
import type { CentralProcessor$ProcessorIdentifier } from '../../../../../oshi/hardware/CentralProcessor$ProcessorIdentifier.d.ts'
import type { AbstractCentralProcessor } from '../../../../../oshi/hardware/common/AbstractCentralProcessor.d.ts'
import type { Quartet } from '../../../../../oshi/util/tuples/Quartet.d.ts'
export class AixCentralProcessor extends AbstractCentralProcessor {
    static orderedProcCaches(paramarg0: CentralProcessor$ProcessorCache[]): CentralProcessor$ProcessorCache[];
    constructor()
    // private config: Perfstat$perfstat_partition_config_t;
    // private cpuProc: () => Perfstat$perfstat_cpu_t[];
    // private cpuTotal: () => Perfstat$perfstat_cpu_total_t;
    // private getCachesForModel(arg0: number): CentralProcessor$ProcessorCache[];
    getSystemLoadAverage(arg0: number): number[];
    initProcessorCounts(): Quartet<CentralProcessor$LogicalProcessor[], CentralProcessor$PhysicalProcessor[], CentralProcessor$ProcessorCache[], string[]>;
    queryContextSwitches(): number;
    queryCurrentFreq(): number[];
    queryInterrupts(): number;
    queryMaxFreq(): number;
    queryProcessorCpuLoadTicks(): number[][];
    queryProcessorId(): CentralProcessor$ProcessorIdentifier;
    querySystemCpuLoadTicks(): number[];
}