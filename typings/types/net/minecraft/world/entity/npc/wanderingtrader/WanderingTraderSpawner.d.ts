import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { WanderingTrader } from '../../../../../../net/minecraft/world/entity/npc/wanderingtrader/WanderingTrader.d.ts'
import type { BlockGetter } from '../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { CustomSpawner } from '../../../../../../net/minecraft/world/level/CustomSpawner.d.ts'
import type { LevelReader } from '../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { WanderingTraderData } from '../../../../../../net/minecraft/world/level/saveddata/WanderingTraderData.d.ts'
import type { SavedDataStorage } from '../../../../../../net/minecraft/world/level/storage/SavedDataStorage.d.ts'
export class WanderingTraderSpawner extends Object implements CustomSpawner {
    static DEFAULT_SPAWN_DELAY: number;
    static MIN_SPAWN_CHANCE: number;
    constructor(savedDataStorage: SavedDataStorage)
    // private random: RandomSource;
    // private savedDataStorage: SavedDataStorage;
    // private tickDelay: number;
    // private traderData: WanderingTraderData;
    // private findSpawnPositionNear(level: LevelReader, referencePosition: BlockPos, radius: number): BlockPos;
    // private getTraderData(): WanderingTraderData;
    // private hasEnoughSpace(level: BlockGetter, spawnPos: BlockPos): boolean;
    // private spawn(level: ServerLevel): boolean;
    tick(level: ServerLevel, spawnEnemies: boolean): void;
    // private tryToSpawnLlamaFor(level: ServerLevel, trader: WanderingTrader, radius: number): void;
}