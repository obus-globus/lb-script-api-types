import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Biome$TemperatureModifier } from '../../../../../net/minecraft/world/level/biome/Biome$TemperatureModifier.d.ts'
export class Biome$ClimateSettings extends Record {
    static CODEC: MapCodec<Biome$ClimateSettings>;
    constructor(hasPrecipitation: boolean, temperature: number, temperatureModifier: Biome$TemperatureModifier, downfall: number)
    // private downfall: number;
    // private hasPrecipitation: boolean;
    // private temperature: number;
    // private temperatureModifier: Biome$TemperatureModifier;
    downfall(): number;
    equals(o: Object | null): boolean;
    hasPrecipitation(): boolean;
    hashCode(): number;
    temperature(): number;
    temperatureModifier(): Biome$TemperatureModifier;
    toString(): string;
}