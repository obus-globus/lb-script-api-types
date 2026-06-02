import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SystemInfo } from '../../../../../../oshi/SystemInfo.d.ts'
import type { CentralProcessor } from '../../../../../../oshi/hardware/CentralProcessor.d.ts'
export class ServerMetricsSamplersProvider$CpuStats extends Object {
    constructor()
    // private currentLoad: number[];
    // private lastPollMs: number;
    nrOfCpus: number;
    // private previousCpuLoadTick: number[][];
    // private processor: CentralProcessor;
    // private systemInfo: SystemInfo;
    loadForCpu(i: number): number;
}