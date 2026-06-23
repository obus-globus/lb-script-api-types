import type { BiPredicate } from '../../../../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Weighted } from '../../../../../../net/minecraft/util/random/Weighted.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { MobCategory } from '../../../../../../net/minecraft/world/entity/MobCategory.d.ts'
import type { MobSpawnSettings$SpawnerData } from '../../../../../../net/minecraft/world/level/biome/MobSpawnSettings$SpawnerData.d.ts'
export interface BiomeModificationContext$MobSpawnSettingsContext extends Object {
    addMobCharge(arg0: EntityType<any>, arg1: number, arg2: number): void;
    addSpawn(arg0: MobCategory, arg1: MobSpawnSettings$SpawnerData, arg2: number): void;
    clearMobCharge(arg0: EntityType<any>): void;
    clearSpawns(): void;
    clearSpawns(arg0: MobCategory): void;
    getMobs(arg0: MobCategory): Weighted<MobSpawnSettings$SpawnerData>[];
    removeSpawns(arg0: (param0: MobCategory, param1: MobSpawnSettings$SpawnerData) => boolean): boolean;
    removeSpawnsOfEntityType(arg0: EntityType<any>): boolean;
    setCreatureGenerationProbability(arg0: number): void;
}