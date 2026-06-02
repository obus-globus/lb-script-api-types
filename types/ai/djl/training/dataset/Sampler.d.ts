import type { RandomAccessDataset } from '../../../../ai/djl/training/dataset/RandomAccessDataset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export interface Sampler extends Object{
    getBatchSize(): number;
    sample(arg0: RandomAccessDataset): Iterator<number[]>;
}