import type { Device } from '../../../../ai/djl/Device.d.ts'
import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { Batch } from '../../../../ai/djl/training/dataset/Batch.d.ts'
import type { Dataset } from '../../../../ai/djl/training/dataset/Dataset.d.ts'
import type { RandomAccessDataset$BaseBuilder } from '../../../../ai/djl/training/dataset/RandomAccessDataset$BaseBuilder.d.ts'
import type { Record } from '../../../../ai/djl/training/dataset/Record.d.ts'
import type { Sampler } from '../../../../ai/djl/training/dataset/Sampler.d.ts'
import type { Batchifier } from '../../../../ai/djl/translate/Batchifier.d.ts'
import type { Pipeline } from '../../../../ai/djl/translate/Pipeline.d.ts'
import type { TranslatorOptions } from '../../../../ai/djl/translate/TranslatorOptions.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { Progress } from '../../../../ai/djl/util/Progress.d.ts'
import type { ExecutorService } from '../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export abstract class RandomAccessDataset extends Object implements Dataset {
    constructor()
    constructor(arg0: RandomAccessDataset$BaseBuilder<any>)
    // private dataBatchifier: Batchifier;
    // private device: Device;
    // private labelBatchifier: Batchifier;
    // private limit: number;
    // private pipeline: Pipeline;
    // private prefetchNumber: number;
    // private sampler: Sampler;
    // private targetPipeline: Pipeline;
    availableSize(): number;
    // private flattenRecord(arg0: (Object | null)[]): Number[];
    get(arg0: NDManager, arg1: number): Record;
    getData(arg0: NDManager, arg1: ExecutorService): Batch[];
    getData(arg0: NDManager): Batch[];
    getData(arg0: NDManager, arg1: Sampler): Batch[];
    getData(arg0: NDManager, arg1: Sampler, arg2: ExecutorService): Batch[];
    matchingTranslatorOptions(): TranslatorOptions;
    newSubDataset(arg0: number[], arg1: number, arg2: number): RandomAccessDataset;
    newSubDataset(arg0: number[]): RandomAccessDataset;
    prepare(): void;
    prepare(arg0: Progress): void;
    randomSplit(arg0: number[]): RandomAccessDataset[];
    size(): number;
    subDataset(arg0: number, arg1: number): RandomAccessDataset;
    subDataset<K extends unknown>(arg0: K[], arg1: K[]): RandomAccessDataset;
    subDataset(arg0: number[]): RandomAccessDataset;
    subDataset<K extends unknown>(arg0: Map<K, number>, arg1: K[]): RandomAccessDataset;
    toArray(arg0: NDManager): Pair<Number[][], Number[][]>;
}