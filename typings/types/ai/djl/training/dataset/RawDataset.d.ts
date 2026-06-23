import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { Batch } from '../../../../ai/djl/training/dataset/Batch.d.ts'
import type { Dataset } from '../../../../ai/djl/training/dataset/Dataset.d.ts'
import type { TranslatorOptions } from '../../../../ai/djl/translate/TranslatorOptions.d.ts'
import type { Progress } from '../../../../ai/djl/util/Progress.d.ts'
import type { ExecutorService } from '../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RawDataset<T extends unknown> extends Dataset, Object{
    getData(arg0: NDManager, arg1: ExecutorService): Batch[];
    getData(): T;
    matchingTranslatorOptions(): TranslatorOptions;
    prepare(): void;
    prepare(arg0: Progress): void;
}