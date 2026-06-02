import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SampleLogger } from '../../../../net/minecraft/util/debugchart/SampleLogger.d.ts'
export abstract class AbstractSampleLogger extends Object implements SampleLogger {
    constructor(dimensions: number, defaults: number[])
    // private defaults: number[];
    // private sample: number[];
    logFullSample(sample: number[]): void;
    logPartialSample(sample: number, dimension: number): void;
    logSample(sample: number): void;
    resetSample(): void;
    useSample(): void;
}