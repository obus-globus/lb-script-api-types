import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { Batch } from '../../../../ai/djl/training/dataset/Batch.d.ts'
import type { TranslatorOptions } from '../../../../ai/djl/translate/TranslatorOptions.d.ts'
import type { Progress } from '../../../../ai/djl/util/Progress.d.ts'
import type { ExecutorService } from '../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Dataset extends Object{
    getData(arg0: NDManager): Batch[];
    getData(arg0: NDManager, arg1: ExecutorService): Batch[];
    matchingTranslatorOptions(): TranslatorOptions;
    prepare(): void;
    prepare(arg0: Progress): void;
}