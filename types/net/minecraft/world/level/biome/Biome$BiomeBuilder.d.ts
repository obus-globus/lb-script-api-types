import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EnvironmentAttribute } from '../../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { EnvironmentAttributeMap } from '../../../../../net/minecraft/world/attribute/EnvironmentAttributeMap.d.ts'
import type { EnvironmentAttributeMap$Builder } from '../../../../../net/minecraft/world/attribute/EnvironmentAttributeMap$Builder.d.ts'
import type { AttributeModifier } from '../../../../../net/minecraft/world/attribute/modifier/AttributeModifier.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { Biome$TemperatureModifier } from '../../../../../net/minecraft/world/level/biome/Biome$TemperatureModifier.d.ts'
import type { BiomeGenerationSettings } from '../../../../../net/minecraft/world/level/biome/BiomeGenerationSettings.d.ts'
import type { BiomeSpecialEffects } from '../../../../../net/minecraft/world/level/biome/BiomeSpecialEffects.d.ts'
import type { MobSpawnSettings } from '../../../../../net/minecraft/world/level/biome/MobSpawnSettings.d.ts'
export class Biome$BiomeBuilder extends Object {
    constructor()
    // private attributes: EnvironmentAttributeMap$Builder;
    // private downfall: number;
    // private generationSettings: BiomeGenerationSettings;
    // private hasPrecipitation: boolean;
    // private mobSpawnSettings: MobSpawnSettings;
    // private specialEffects: BiomeSpecialEffects;
    // private temperature: number;
    // private temperatureModifier: Biome$TemperatureModifier;
    build(): Biome;
    downfall(downfall: number): Biome$BiomeBuilder;
    generationSettings(generationSettings: BiomeGenerationSettings): Biome$BiomeBuilder;
    hasPrecipitation(hasPrecipitation: boolean): Biome$BiomeBuilder;
    mobSpawnSettings(mobSpawnSettings: MobSpawnSettings): Biome$BiomeBuilder;
    modifyAttribute<Parameter extends Object | number | string | boolean>(attribute: EnvironmentAttribute<Value>, modifier: AttributeModifier<Value, Parameter>, value: Parameter): Biome$BiomeBuilder;
    putAttributes(attributes: EnvironmentAttributeMap): Biome$BiomeBuilder;
    putAttributes(attributes: EnvironmentAttributeMap$Builder): Biome$BiomeBuilder;
    setAttribute<Value extends Object | number | string | boolean>(attribute: EnvironmentAttribute<Value>, value: Value): Biome$BiomeBuilder;
    specialEffects(specialEffects: BiomeSpecialEffects): Biome$BiomeBuilder;
    temperature(temperature: number): Biome$BiomeBuilder;
    temperatureAdjustment(temperatureModifier: Biome$TemperatureModifier): Biome$BiomeBuilder;
    toString(): string;
}