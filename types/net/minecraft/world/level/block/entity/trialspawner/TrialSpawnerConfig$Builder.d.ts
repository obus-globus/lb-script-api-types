import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { WeightedList } from '../../../../../../../net/minecraft/util/random/WeightedList.d.ts'
import type { SpawnData } from '../../../../../../../net/minecraft/world/level/SpawnData.d.ts'
import type { TrialSpawnerConfig } from '../../../../../../../net/minecraft/world/level/block/entity/trialspawner/TrialSpawnerConfig.d.ts'
import type { LootTable } from '../../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export class TrialSpawnerConfig$Builder extends Object {
    constructor()
    // private itemsToDropWhenOminous: ResourceKey<LootTable>;
    // private lootTablesToEject: WeightedList<ResourceKey<LootTable>>;
    // private simultaneousMobs: number;
    // private simultaneousMobsAddedPerPlayer: number;
    // private spawnPotentialsDefinition: WeightedList<SpawnData>;
    // private spawnRange: number;
    // private ticksBetweenSpawn: number;
    // private totalMobs: number;
    // private totalMobsAddedPerPlayer: number;
    build(): TrialSpawnerConfig;
    itemsToDropWhenOminous(itemsToDropWhenOminous: ResourceKey<LootTable>): TrialSpawnerConfig$Builder;
    lootTablesToEject(lootTablesToEject: WeightedList<ResourceKey<LootTable>>): TrialSpawnerConfig$Builder;
    simultaneousMobs(simultaneousMobs: number): TrialSpawnerConfig$Builder;
    simultaneousMobsAddedPerPlayer(simultaneousMobsAddedPerPlayer: number): TrialSpawnerConfig$Builder;
    spawnPotentialsDefinition(spawnPotentialsDefinition: WeightedList<SpawnData>): TrialSpawnerConfig$Builder;
    spawnRange(spawnRange: number): TrialSpawnerConfig$Builder;
    ticksBetweenSpawn(ticksBetweenSpawn: number): TrialSpawnerConfig$Builder;
    totalMobs(totalMobs: number): TrialSpawnerConfig$Builder;
    totalMobsAddedPerPlayer(totalMobsAddedPerPlayer: number): TrialSpawnerConfig$Builder;
}