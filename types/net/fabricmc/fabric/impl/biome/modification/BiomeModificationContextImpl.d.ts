import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BiomeModificationContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeModificationContext.d.ts'
import type { BiomeModificationContext$AttributesContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeModificationContext$AttributesContext.d.ts'
import type { BiomeModificationContext$EffectsContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeModificationContext$EffectsContext.d.ts'
import type { BiomeModificationContext$GenerationSettingsContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeModificationContext$GenerationSettingsContext.d.ts'
import type { BiomeModificationContext$MobSpawnSettingsContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeModificationContext$MobSpawnSettingsContext.d.ts'
import type { BiomeModificationContext$WeatherContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeModificationContext$WeatherContext.d.ts'
import type { BiomeModificationContextImpl$GenerationSettingsContextImpl } from '../../../../../../net/fabricmc/fabric/impl/biome/modification/BiomeModificationContextImpl$GenerationSettingsContextImpl.d.ts'
import type { BiomeModificationContextImpl$SpawnSettingsContextImpl } from '../../../../../../net/fabricmc/fabric/impl/biome/modification/BiomeModificationContextImpl$SpawnSettingsContextImpl.d.ts'
import type { RegistryAccess } from '../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
export class BiomeModificationContextImpl extends Object implements BiomeModificationContext {
    constructor(arg0: RegistryAccess, arg1: Biome)
    readonly attributes: BiomeModificationContext$AttributesContext;
    // private biome: Biome;
    readonly effects: BiomeModificationContext$EffectsContext;
    readonly generationSettings: BiomeModificationContextImpl$GenerationSettingsContextImpl;
    // private registries: RegistryAccess;
    // private spawnSettings: BiomeModificationContextImpl$SpawnSettingsContextImpl;
    readonly weather: BiomeModificationContext$WeatherContext;
    freeze(): void;
    getAttributes(): BiomeModificationContext$AttributesContext;
    getEffects(): BiomeModificationContext$EffectsContext;
    getGenerationSettings(): BiomeModificationContext$GenerationSettingsContext;
    getMobSpawnSettings(): BiomeModificationContext$MobSpawnSettingsContext;
    getWeather(): BiomeModificationContext$WeatherContext;
    shouldRebuildFeatures(): boolean;
}