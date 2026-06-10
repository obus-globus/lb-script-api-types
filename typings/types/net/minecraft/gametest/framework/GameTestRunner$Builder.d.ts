import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameTestBatch } from '../../../../net/minecraft/gametest/framework/GameTestBatch.d.ts'
import type { GameTestInfo } from '../../../../net/minecraft/gametest/framework/GameTestInfo.d.ts'
import type { GameTestRunner } from '../../../../net/minecraft/gametest/framework/GameTestRunner.d.ts'
import type { GameTestRunner$GameTestBatcher } from '../../../../net/minecraft/gametest/framework/GameTestRunner$GameTestBatcher.d.ts'
import type { GameTestRunner$StructureSpawner } from '../../../../net/minecraft/gametest/framework/GameTestRunner$StructureSpawner.d.ts'
import type { GameTestTicker } from '../../../../net/minecraft/gametest/framework/GameTestTicker.d.ts'
import type { StructureGridSpawner } from '../../../../net/minecraft/gametest/framework/StructureGridSpawner.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
export class GameTestRunner$Builder extends Object {
    static fromBatches(parambatches: GameTestBatch[], paramlevel: ServerLevel): GameTestRunner$Builder;
    static fromInfo(paramtests: GameTestInfo[], paramlevel: ServerLevel): GameTestRunner$Builder;
    private constructor(batches: GameTestBatch[], level: ServerLevel)
    // private batcher: GameTestRunner$GameTestBatcher;
    // private batches: GameTestBatch[];
    // private clearBetweenBatches: boolean;
    // private existingStructureSpawner: GameTestRunner$StructureSpawner;
    // private haltOnError: boolean;
    // private level: ServerLevel;
    // private newStructureSpawner: GameTestRunner$StructureSpawner;
    // private testTicker: GameTestTicker;
    batcher(batcher: GameTestRunner$GameTestBatcher): GameTestRunner$Builder;
    build(): GameTestRunner;
    clearBetweenBatches(): GameTestRunner$Builder;
    existingStructureSpawner(spawner: StructureGridSpawner): GameTestRunner$Builder;
    haltOnError(): GameTestRunner$Builder;
    newStructureSpawner(structureSpawner: GameTestRunner$StructureSpawner): GameTestRunner$Builder;
}