import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BiomeModificationContext$AttributesContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeModificationContext$AttributesContext.d.ts'
import type { BiomeModificationContext$EffectsContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeModificationContext$EffectsContext.d.ts'
import type { BiomeModificationContext$GenerationSettingsContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeModificationContext$GenerationSettingsContext.d.ts'
import type { BiomeModificationContext$MobSpawnSettingsContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeModificationContext$MobSpawnSettingsContext.d.ts'
import type { BiomeModificationContext$WeatherContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeModificationContext$WeatherContext.d.ts'
export interface BiomeModificationContext extends Object{
    getAttributes(): BiomeModificationContext$AttributesContext;
    getEffects(): BiomeModificationContext$EffectsContext;
    getGenerationSettings(): BiomeModificationContext$GenerationSettingsContext;
    getMobSpawnSettings(): BiomeModificationContext$MobSpawnSettingsContext;
    getWeather(): BiomeModificationContext$WeatherContext;
}