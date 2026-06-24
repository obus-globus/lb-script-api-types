import type { Batch } from '../../../../ai/djl/training/dataset/Batch.d.ts'
import type { Callable } from '../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DataIterable$PreFetchCallable extends Object implements Callable<Batch> {
    constructor(null_: Batch[], arg1: number[])
    // private indices: number[];
    // private progress: number;
    call(): Batch;
}