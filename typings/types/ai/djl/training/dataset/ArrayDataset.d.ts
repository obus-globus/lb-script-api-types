import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { Batch } from '../../../../ai/djl/training/dataset/Batch.d.ts'
import type { RandomAccessDataset } from '../../../../ai/djl/training/dataset/RandomAccessDataset.d.ts'
import type { RandomAccessDataset$BaseBuilder } from '../../../../ai/djl/training/dataset/RandomAccessDataset$BaseBuilder.d.ts'
import type { Record } from '../../../../ai/djl/training/dataset/Record.d.ts'
import type { Sampler } from '../../../../ai/djl/training/dataset/Sampler.d.ts'
import type { Progress } from '../../../../ai/djl/util/Progress.d.ts'
import type { ExecutorService } from '../../../../java/util/concurrent/ExecutorService.d.ts'
export class ArrayDataset extends RandomAccessDataset {
    constructor()
    constructor(arg0: RandomAccessDataset$BaseBuilder<any>)
    // private data: NDArray[];
    // private labels: NDArray[];
    availableSize(): number;
    get(arg0: NDManager, arg1: number): Record;
    getByIndices(arg0: NDManager, ...arg1: number[]): Batch;
    getByRange(arg0: NDManager, arg1: number, arg2: number): Batch;
    getData(arg0: NDManager): Batch[];
    getData(arg0: NDManager, arg1: Sampler): Batch[];
    getData(arg0: NDManager, arg1: Sampler, arg2: ExecutorService): Batch[];
    getData(arg0: NDManager, arg1: ExecutorService): Batch[];
    newSubDataset(arg0: number[], arg1: number, arg2: number): RandomAccessDataset;
    newSubDataset(arg0: number[]): RandomAccessDataset;
    prepare(): void;
    prepare(arg0: Progress): void;
}