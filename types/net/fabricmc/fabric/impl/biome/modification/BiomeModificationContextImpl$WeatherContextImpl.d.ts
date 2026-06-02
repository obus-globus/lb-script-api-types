import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BiomeModificationContext$WeatherContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeModificationContext$WeatherContext.d.ts'
import type { Biome$TemperatureModifier } from '../../../../../../net/minecraft/world/level/biome/Biome$TemperatureModifier.d.ts'
export class BiomeModificationContextImpl$WeatherContextImpl extends Object implements BiomeModificationContext$WeatherContext {
    private constructor(null_: BiomeModificationContextImpl$WeatherContextImpl)
    setDownfall(arg0: number): void;
    setPrecipitation(arg0: boolean): void;
    setTemperature(arg0: number): void;
    setTemperatureModifier(arg0: Biome$TemperatureModifier): void;
}