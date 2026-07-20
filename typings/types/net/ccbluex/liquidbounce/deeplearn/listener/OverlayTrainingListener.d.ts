import type { Trainer } from '../../../../../ai/djl/training/Trainer.d.ts'
import type { TrainingListener$BatchData } from '../../../../../ai/djl/training/listener/TrainingListener$BatchData.d.ts'
import type { TrainingListenerAdapter } from '../../../../../ai/djl/training/listener/TrainingListenerAdapter.d.ts'
/**
 * Displays training overlay in Minecraft
 *
 * Training Epoch 1/10 - Batch 45%
 * [███████████░░░░░░░░░░░░░░]
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/listener/OverlayTrainingListener.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/listener/OverlayTrainingListener.kt:37}
 */
export class OverlayTrainingListener extends TrainingListenerAdapter {
    constructor(maxEpoch: number)
    // private maxEpoch: number;
    // private numEpochs: number;
    onEpoch(trainer: Trainer | null): void;
    onTrainingBatch(trainer: Trainer, batchData: TrainingListener$BatchData): void;
    onValidationBatch(trainer: Trainer, batchData: TrainingListener$BatchData): void;
    reportBatchData(batchData: TrainingListener$BatchData): void;
}