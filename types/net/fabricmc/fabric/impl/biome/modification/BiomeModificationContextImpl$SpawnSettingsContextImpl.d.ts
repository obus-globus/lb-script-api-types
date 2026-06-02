import type { BiPredicate } from '../../../../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BiomeModificationContext$MobSpawnSettingsContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeModificationContext$MobSpawnSettingsContext.d.ts'
import type { Weighted } from '../../../../../../net/minecraft/util/random/Weighted.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { MobCategory } from '../../../../../../net/minecraft/world/entity/MobCategory.d.ts'
import type { MobSpawnSettings } from '../../../../../../net/minecraft/world/level/biome/MobSpawnSettings.d.ts'
import type { MobSpawnSettings$SpawnerData } from '../../../../../../net/minecraft/world/level/biome/MobSpawnSettings$SpawnerData.d.ts'
export class BiomeModificationContextImpl$SpawnSettingsContextImpl extends Object implements BiomeModificationContext$MobSpawnSettingsContext {
    constructor(null_: BiomeModificationContextImpl$SpawnSettingsContextImpl)
    // private fabricSpawners: { [key in MobCategory]: Weighted<MobSpawnSettings$SpawnerData>[] };
    // private spawnSettings: MobSpawnSettings;
    addMobCharge(arg0: EntityType<Object>, arg1: number, arg2: number): void;
    addSpawn(arg0: MobCategory, arg1: MobSpawnSettings$SpawnerData, arg2: number): void;
    clearMobCharge(arg0: EntityType<Object>): void;
    clearSpawns(): void;
    clearSpawns(arg0: MobCategory): void;
    freeze(): void;
    // private freezeSpawnCosts(): void;
    // private freezeSpawners(): void;
    getMobs(arg0: MobCategory): Weighted<MobSpawnSettings$SpawnerData>[];
    removeSpawns(arg0: (param0: MobCategory, param1: MobSpawnSettings$SpawnerData) => kotlin.Boolean): boolean;
    removeSpawnsOfEntityType(arg0: EntityType<Object>): boolean;
    setCreatureGenerationProbability(arg0: number): void;
    // private unfreezeSpawnCost(): void;
    // private unfreezeSpawners(): void;
}