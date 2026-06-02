import type { Trainer } from '../../../ai/djl/training/Trainer.d.ts'
import type { Batch } from '../../../ai/djl/training/dataset/Batch.d.ts'
import type { Dataset } from '../../../ai/djl/training/dataset/Dataset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EasyTrain extends Object {
    static evaluateDataset(paramarg0: Trainer, paramarg1: Dataset): void;
    static fit(paramarg0: Trainer, paramarg1: number, paramarg2: Dataset, paramarg3: Dataset): void;
    static trainBatch(paramarg0: Trainer, paramarg1: Batch): void;
    static validateBatch(paramarg0: Trainer, paramarg1: Batch): void;
    private constructor()
}