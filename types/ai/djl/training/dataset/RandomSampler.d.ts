import type { RandomAccessDataset } from '../../../../ai/djl/training/dataset/RandomAccessDataset.d.ts'
import type { Sampler$SubSampler } from '../../../../ai/djl/training/dataset/Sampler$SubSampler.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class RandomSampler extends Object implements Sampler$SubSampler {
    constructor()
    sample(arg0: RandomAccessDataset): Iterator<number>;
}