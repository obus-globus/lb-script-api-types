import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameTestInfo } from '../../../../net/minecraft/gametest/framework/GameTestInfo.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
export interface GameTestRunner$StructureSpawner extends Object{
    onBatchStart(level: ServerLevel): void;
    spawnStructure(testInfo: GameTestInfo): Optional<GameTestInfo>;
}