import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameTestBatch } from '../../../../net/minecraft/gametest/framework/GameTestBatch.d.ts'
export interface GameTestBatchListener extends Object{
    testBatchFinished(batch: GameTestBatch): void;
    testBatchStarting(batch: GameTestBatch): void;
}