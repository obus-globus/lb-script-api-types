import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { ArrayDataset } from '../../../../ai/djl/training/dataset/ArrayDataset.d.ts'
import type { Batch } from '../../../../ai/djl/training/dataset/Batch.d.ts'
import type { Record } from '../../../../ai/djl/training/dataset/Record.d.ts'
import type { Progress } from '../../../../ai/djl/util/Progress.d.ts'
export class ArrayDataset$SubDatasetByIndices extends ArrayDataset {
    constructor(arg0: ArrayDataset, arg1: number[])
    // private dataset: ArrayDataset;
    // private subIndices: number[];
    availableSize(): number;
    get(arg0: NDManager, arg1: number): Record;
    getByIndices(arg0: NDManager, arg1: number[]): Batch;
    getByRange(arg0: NDManager, arg1: number, arg2: number): Batch;
    prepare(arg0: Progress): void;
}