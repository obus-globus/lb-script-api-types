import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Biome$TemperatureModifier } from '../../../../../../net/minecraft/world/level/biome/Biome$TemperatureModifier.d.ts'
export interface BiomeModificationContext$WeatherContext extends Object{
    setDownfall(arg0: number): void;
    setPrecipitation(arg0: boolean): void;
    setTemperature(arg0: number): void;
    setTemperatureModifier(arg0: Biome$TemperatureModifier): void;
}