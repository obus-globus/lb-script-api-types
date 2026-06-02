import type { Object } from '../../../../java/lang/Object.d.ts'
export interface SampleLogger extends Object{
    logFullSample(sample: number[]): void;
    logPartialSample(sample: number, dimension: number): void;
    logSample(sample: number): void;
}