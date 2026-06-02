import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameTestBatch } from '../../../../net/minecraft/gametest/framework/GameTestBatch.d.ts'
import type { GameTestBatchListener } from '../../../../net/minecraft/gametest/framework/GameTestBatchListener.d.ts'
import type { GameTestInfo } from '../../../../net/minecraft/gametest/framework/GameTestInfo.d.ts'
import type { GameTestRunner$GameTestBatcher } from '../../../../net/minecraft/gametest/framework/GameTestRunner$GameTestBatcher.d.ts'
import type { GameTestRunner$StructureSpawner } from '../../../../net/minecraft/gametest/framework/GameTestRunner$StructureSpawner.d.ts'
import type { GameTestTicker } from '../../../../net/minecraft/gametest/framework/GameTestTicker.d.ts'
import type { TestEnvironmentDefinition$Activation } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition$Activation.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
export class GameTestRunner extends Object {
    static DEFAULT_TESTS_PER_ROW: number;
    constructor(batcher: GameTestRunner$GameTestBatcher, batches: E[], level: ServerLevel, testTicker: GameTestTicker, existingStructureSpawner: GameTestRunner$StructureSpawner, newStructureSpawner: GameTestRunner$StructureSpawner, haltOnError: boolean, clearBetweenBatches: boolean)
    // private allTestInfos: GameTestInfo[];
    // private batchListeners: GameTestBatchListener[];
    // private batches: GameTestBatch[];
    // private clearBetweenBatches: boolean;
    // private currentEnvironment: TestEnvironmentDefinition$Activation<Object>;
    // private existingStructureSpawner: GameTestRunner$StructureSpawner;
    // private haltOnError: boolean;
    // private level: ServerLevel;
    // private newStructureSpawner: GameTestRunner$StructureSpawner;
    // private scheduledForRerun: GameTestInfo[];
    // private stopped: boolean;
    // private testBatcher: GameTestRunner$GameTestBatcher;
    // private testTicker: GameTestTicker;
    addListener(listener: GameTestBatchListener): void;
    // private createStructuresForBatch(batch: E[]): E[];
    // private endCurrentEnvironment(): void;
    getTestInfos(): GameTestInfo[];
    rerunTest(info: GameTestInfo): void;
    // private runBatch(batchIndex: number): void;
    // private runScheduledRerunTests(): void;
    // private spawn(testInfo: GameTestInfo): Optional<GameTestInfo>;
    start(): void;
    stop(): void;
}