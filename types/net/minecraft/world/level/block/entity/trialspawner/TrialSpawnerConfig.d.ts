import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { WeightedList } from '../../../../../../../net/minecraft/util/random/WeightedList.d.ts'
import type { EntityType } from '../../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { SpawnData } from '../../../../../../../net/minecraft/world/level/SpawnData.d.ts'
import type { TrialSpawnerConfig$Builder } from '../../../../../../../net/minecraft/world/level/block/entity/trialspawner/TrialSpawnerConfig$Builder.d.ts'
import type { LootTable } from '../../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export class TrialSpawnerConfig extends Record {
    static CODEC: Codec<Object>;
    static DEFAULT: TrialSpawnerConfig;
    static DIRECT_CODEC: Codec<TrialSpawnerConfig>;
    static builder(): TrialSpawnerConfig$Builder;
    // private itemsToDropWhenOminous: ResourceKey<LootTable>;
    // private lootTablesToEject: WeightedList<ResourceKey<LootTable>>;
    // private simultaneousMobs: number;
    // private simultaneousMobsAddedPerPlayer: number;
    // private spawnPotentialsDefinition: WeightedList<SpawnData>;
    // private spawnRange: number;
    // private ticksBetweenSpawn: number;
    // private totalMobs: number;
    // private totalMobsAddedPerPlayer: number;
    calculateTargetSimultaneousMobs(additionalPlayers: number): number;
    calculateTargetTotalMobs(additionalPlayers: number): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    itemsToDropWhenOminous(): ResourceKey<LootTable>;
    lootTablesToEject(): WeightedList<ResourceKey<LootTable>>;
    simultaneousMobs(): number;
    simultaneousMobsAddedPerPlayer(): number;
    spawnPotentialsDefinition(): WeightedList<SpawnData>;
    spawnRange(): number;
    ticksBetweenItemSpawners(): number;
    ticksBetweenSpawn(): number;
    toString(): string;
    totalMobs(): number;
    totalMobsAddedPerPlayer(): number;
    withSpawning(type: EntityType<Object>): TrialSpawnerConfig;
}