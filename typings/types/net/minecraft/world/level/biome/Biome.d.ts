import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ExtendedBiome } from '../../../../../net/irisshaders/iris/mixinterface/ExtendedBiome.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { EnvironmentAttributeMap } from '../../../../../net/minecraft/world/attribute/EnvironmentAttributeMap.d.ts'
import type { LevelReader } from '../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { Biome$ClimateSettings } from '../../../../../net/minecraft/world/level/biome/Biome$ClimateSettings.d.ts'
import type { Biome$Precipitation } from '../../../../../net/minecraft/world/level/biome/Biome$Precipitation.d.ts'
import type { BiomeGenerationSettings } from '../../../../../net/minecraft/world/level/biome/BiomeGenerationSettings.d.ts'
import type { BiomeSpecialEffects } from '../../../../../net/minecraft/world/level/biome/BiomeSpecialEffects.d.ts'
import type { MobSpawnSettings } from '../../../../../net/minecraft/world/level/biome/MobSpawnSettings.d.ts'
import type { PerlinSimplexNoise } from '../../../../../net/minecraft/world/level/levelgen/synth/PerlinSimplexNoise.d.ts'
export class Biome extends Object implements ExtendedBiome {
    static BIOME_INFO_NOISE: PerlinSimplexNoise;
    static CODEC: Codec<Holder<Biome>>;
    static DIRECT_CODEC: Codec<Biome>;
    static LIST_CODEC: Codec<Holder<Biome>[]>;
    static NETWORK_CODEC: Codec<Biome>;
    private constructor(climateSettings: Biome$ClimateSettings, attributes: EnvironmentAttributeMap, specialEffects: BiomeSpecialEffects, generationSettings: BiomeGenerationSettings, mobSettings: MobSpawnSettings)
    attributes: EnvironmentAttributeMap;
    readonly biomeCategory: number;
    // private cachedSpecialEffects: BiomeSpecialEffects;
    climateSettings: Biome$ClimateSettings;
    // private customFoliageColor: number;
    // private customGrassColor: number;
    // private defaultColorIndex: number;
    readonly generationSettings: BiomeGenerationSettings;
    // private hasCustomFoliageColor: boolean;
    // private hasCustomGrassColor: boolean;
    readonly mobSettings: MobSpawnSettings;
    readonly specialEffects: BiomeSpecialEffects;
    // private temperatureCache: ThreadLocal<Long2FloatLinkedOpenHashMap>;
    coldEnoughToSnow(pos: BlockPos, seaLevel: number): boolean;
    getAttributes(): EnvironmentAttributeMap;
    // private getBaseGrassColor(): number;
    getBaseTemperature(): number;
    getBiomeCategory(): number;
    // private getDefaultColorIndex(): number;
    getDownfall(): number;
    getDryFoliageColor(): number;
    // private getDryFoliageColorFromTexture(): number;
    getFoliageColor(): number;
    // private getFoliageColorFromTexture(): number;
    getGenerationSettings(): BiomeGenerationSettings;
    getGrassColor(arg0: number, arg1: number): number;
    // private getGrassColorFromTexture(): number;
    // private getHeightAdjustedTemperature(pos: BlockPos, seaLevel: number): number;
    getMobSettings(): MobSpawnSettings;
    getPrecipitationAt(pos: BlockPos, seaLevel: number): Biome$Precipitation;
    getSpecialEffects(): BiomeSpecialEffects;
    getTemperature(arg0: BlockPos, arg1: number): number;
    getWaterColor(): number;
    hasPrecipitation(): boolean;
    setBiomeCategory(arg0: number): void;
    // private setupColors(): void;
    shouldFreeze(level: LevelReader, pos: BlockPos): boolean;
    shouldFreeze(level: LevelReader, pos: BlockPos, checkNeighbors: boolean): boolean;
    shouldMeltFrozenOceanIcebergSlightly(pos: BlockPos, seaLevel: number): boolean;
    shouldSnow(level: LevelReader, pos: BlockPos): boolean;
    warmEnoughToRain(pos: BlockPos, seaLevel: number): boolean;
}