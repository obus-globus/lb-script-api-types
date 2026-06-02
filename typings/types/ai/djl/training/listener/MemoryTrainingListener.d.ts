import type { Metrics } from '../../../../ai/djl/metric/Metrics.d.ts'
import type { Trainer } from '../../../../ai/djl/training/Trainer.d.ts'
import type { TrainingListener$BatchData } from '../../../../ai/djl/training/listener/TrainingListener$BatchData.d.ts'
import type { TrainingListenerAdapter } from '../../../../ai/djl/training/listener/TrainingListenerAdapter.d.ts'
export class MemoryTrainingListener extends TrainingListenerAdapter {
    static collectMemoryInfo(paramarg0: Metrics): void;
    static dumpMemoryInfo(paramarg0: Metrics, paramarg1: string): void;
    constructor()
    constructor(arg0: string)
    // private outputDir: string;
    onTrainingBatch(arg0: Trainer, arg1: TrainingListener$BatchData): void;
    onTrainingEnd(arg0: Trainer): void;
    onValidationBatch(arg0: Trainer, arg1: TrainingListener$BatchData): void;
}