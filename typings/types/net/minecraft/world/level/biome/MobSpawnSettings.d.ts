import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { WeightedList } from '../../../../../net/minecraft/util/random/WeightedList.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { MobCategory } from '../../../../../net/minecraft/world/entity/MobCategory.d.ts'
import type { MobSpawnSettings$MobSpawnCost } from '../../../../../net/minecraft/world/level/biome/MobSpawnSettings$MobSpawnCost.d.ts'
import type { MobSpawnSettings$SpawnerData } from '../../../../../net/minecraft/world/level/biome/MobSpawnSettings$SpawnerData.d.ts'
export class MobSpawnSettings extends Object {
    static CODEC: MapCodec<MobSpawnSettings>;
    static EMPTY: MobSpawnSettings;
    static EMPTY_MOB_LIST: WeightedList<MobSpawnSettings$SpawnerData>;
    private constructor(creatureGenerationProbability: number, spawners: { [key in MobCategory]: WeightedList<MobSpawnSettings$SpawnerData> }, mobSpawnCosts: Map<EntityType<any>, MobSpawnSettings$MobSpawnCost>)
    creatureGenerationProbability: number;
    mobSpawnCosts: Map<EntityType<any>, MobSpawnSettings$MobSpawnCost>;
    spawners: { [key in MobCategory]: WeightedList<MobSpawnSettings$SpawnerData> };
    getCreatureProbability(): number;
    getMobSpawnCost(type: EntityType<any>): MobSpawnSettings$MobSpawnCost;
    getMobs(category: MobCategory): WeightedList<MobSpawnSettings$SpawnerData>;
}