import type { Trainer } from '../../../../../ai/djl/training/Trainer.d.ts'
import type { TrainingListener$BatchData } from '../../../../../ai/djl/training/listener/TrainingListener$BatchData.d.ts'
import type { TrainingListenerAdapter } from '../../../../../ai/djl/training/listener/TrainingListenerAdapter.d.ts'
/**
 * Displays training overlay in Minecraft
 *
 * Training Epoch 1/10 - Batch 45%
 * [███████████░░░░░░░░░░░░░░]
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/listener/OverlayTrainingListener.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/listener/OverlayTrainingListener.kt:31}
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