import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { WeightedList$Builder } from '../../../../../net/minecraft/util/random/WeightedList$Builder.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { MobCategory } from '../../../../../net/minecraft/world/entity/MobCategory.d.ts'
import type { MobSpawnSettings } from '../../../../../net/minecraft/world/level/biome/MobSpawnSettings.d.ts'
import type { MobSpawnSettings$MobSpawnCost } from '../../../../../net/minecraft/world/level/biome/MobSpawnSettings$MobSpawnCost.d.ts'
import type { MobSpawnSettings$SpawnerData } from '../../../../../net/minecraft/world/level/biome/MobSpawnSettings$SpawnerData.d.ts'
export class MobSpawnSettings$Builder extends Object {
    constructor()
    // private creatureGenerationProbability: number;
    // private mobSpawnCosts: JavaMap<EntityType<any>, MobSpawnSettings$MobSpawnCost>;
    // private spawners: JavaMap<MobCategory, WeightedList$Builder<MobSpawnSettings$SpawnerData>>;
    addMobCharge(type: EntityType<any>, charge: number, energyBudget: number): MobSpawnSettings$Builder;
    addSpawn(category: MobCategory, weight: number, spawnerData: MobSpawnSettings$SpawnerData): MobSpawnSettings$Builder;
    build(): MobSpawnSettings;
    creatureGenerationProbability(creatureGenerationProbability: number): MobSpawnSettings$Builder;
}