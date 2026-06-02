import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { CompoundTag } from '../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { WeightedList } from '../../../../../../../net/minecraft/util/random/WeightedList.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
import type { SpawnData } from '../../../../../../../net/minecraft/world/level/SpawnData.d.ts'
import type { TrialSpawner } from '../../../../../../../net/minecraft/world/level/block/entity/trialspawner/TrialSpawner.d.ts'
import type { TrialSpawnerConfig } from '../../../../../../../net/minecraft/world/level/block/entity/trialspawner/TrialSpawnerConfig.d.ts'
import type { TrialSpawnerState } from '../../../../../../../net/minecraft/world/level/block/entity/trialspawner/TrialSpawnerState.d.ts'
import type { TrialSpawnerStateData$Packed } from '../../../../../../../net/minecraft/world/level/block/entity/trialspawner/TrialSpawnerStateData$Packed.d.ts'
import type { LootTable } from '../../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export class TrialSpawnerStateData extends Object {
    constructor()
    // private cooldownEndsAt: number;
    // private currentMobs: UUID[];
    // private detectedPlayers: UUID[];
    // private dispensing: WeightedList<ItemStack>;
    // private displayEntity: Entity;
    // private ejectingLootTable: Optional<ResourceKey<LootTable>>;
    // private nextMobSpawnsAt: number;
    // private nextSpawnData: Optional<SpawnData>;
    // private oSpin: number;
    spin: number;
    // private totalMobsSpawned: number;
    apply(packed: TrialSpawnerStateData$Packed): void;
    countAdditionalPlayers(pos: BlockPos): number;
    getDispensingItems(level: ServerLevel, config: TrialSpawnerConfig, pos: BlockPos): WeightedList<ItemStack>;
    getOSpin(): number;
    getOrCreateDisplayEntity(trialSpawner: TrialSpawner, level: Level, state: TrialSpawnerState): Entity;
    getOrCreateNextSpawnData(trialSpawner: TrialSpawner, random: RandomSource): SpawnData;
    getSpin(): number;
    getUpdateTag(state: TrialSpawnerState): CompoundTag;
    hasFinishedSpawningAllMobs(config: TrialSpawnerConfig, additionalPlayers: number): boolean;
    hasMobToSpawn(trialSpawner: TrialSpawner, random: RandomSource): boolean;
    haveAllCurrentMobsDied(): boolean;
    isCooldownFinished(serverLevel: ServerLevel): boolean;
    isReadyToEjectItems(serverLevel: ServerLevel, timeBetweenEjections: number, targetCooldownLength: number): boolean;
    isReadyToOpenShutter(serverLevel: ServerLevel, delayBeforeOpen: number, targetCooldownLength: number): boolean;
    isReadyToSpawnNextMob(serverLevel: ServerLevel, config: TrialSpawnerConfig, additionalPlayers: number): boolean;
    pack(): TrialSpawnerStateData$Packed;
    reset(): void;
    resetAfterBecomingOminous(trialSpawner: TrialSpawner, level: ServerLevel): void;
    resetStatistics(): void;
    tryDetectPlayers(level: ServerLevel, pos: BlockPos, trialSpawner: TrialSpawner): void;
}