import type { RandomAccessDataset } from '../../../../ai/djl/training/dataset/RandomAccessDataset.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class BatchSampler$Iterate extends Object implements Iterator<number[]> {
    constructor(null_: BatchSampler$Iterate, arg1: RandomAccessDataset)
    // private current: number;
    // private size: number;
    // private subSample: Iterator<number>;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): number[];
}