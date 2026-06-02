import type { RandomAccessDataset } from '../../../../ai/djl/training/dataset/RandomAccessDataset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export interface Sampler$SubSampler extends Object{
    sample(arg0: RandomAccessDataset): Iterator<number>;
}