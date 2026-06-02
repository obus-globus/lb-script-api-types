import type { RandomAccessDataset } from '../../../../ai/djl/training/dataset/RandomAccessDataset.d.ts'
import type { Sampler } from '../../../../ai/djl/training/dataset/Sampler.d.ts'
import type { Sampler$SubSampler } from '../../../../ai/djl/training/dataset/Sampler$SubSampler.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class BatchSampler extends Object implements Sampler {
    constructor(arg0: Sampler$SubSampler, arg1: number)
    constructor(arg0: Sampler$SubSampler, arg1: number, arg2: boolean)
    readonly batchSize: number;
    // private dropLast: boolean;
    // private subSampler: Sampler$SubSampler;
    getBatchSize(): number;
    sample(arg0: RandomAccessDataset): Iterator<number[]>;
}