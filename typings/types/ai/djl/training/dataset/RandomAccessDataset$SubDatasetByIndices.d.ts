import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { RandomAccessDataset } from '../../../../ai/djl/training/dataset/RandomAccessDataset.d.ts'
import type { Record } from '../../../../ai/djl/training/dataset/Record.d.ts'
import type { Progress } from '../../../../ai/djl/util/Progress.d.ts'
export class RandomAccessDataset$SubDatasetByIndices extends RandomAccessDataset {
    constructor(arg0: RandomAccessDataset, arg1: number[])
    // private dataset: RandomAccessDataset;
    // private subIndices: number[];
    availableSize(): number;
    get(arg0: NDManager, arg1: number): Record;
    prepare(): void;
    prepare(arg0: Progress): void;
}