import type { Trainer } from '../../../../ai/djl/training/Trainer.d.ts'
import type { TrainingResult } from '../../../../ai/djl/training/TrainingResult.d.ts'
import type { EarlyStoppingListener$Builder } from '../../../../ai/djl/training/listener/EarlyStoppingListener$Builder.d.ts'
import type { TrainingListener } from '../../../../ai/djl/training/listener/TrainingListener.d.ts'
import type { TrainingListener$BatchData } from '../../../../ai/djl/training/listener/TrainingListener$BatchData.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EarlyStoppingListener extends Object implements TrainingListener {
    static builder(): EarlyStoppingListener$Builder;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: string, arg6: any)
    // private earlyStopPctImprovement: number;
    // private epochPatience: number;
    // private maxMillis: number;
    // private minEpochs: number;
    // private monitoredMetric: string;
    // private numberOfEpochsWithoutImprovements: number;
    // private objectiveSuccess: number;
    // private prevMetricValue: number;
    // private startTimeMills: number;
    // private getMetric(arg0: TrainingResult): number;
    onEpoch(arg0: Trainer): void;
    onTrainingBatch(arg0: Trainer, arg1: TrainingListener$BatchData): void;
    onTrainingBegin(arg0: Trainer): void;
    onTrainingEnd(arg0: Trainer): void;
    onValidationBatch(arg0: Trainer, arg1: TrainingListener$BatchData): void;
}