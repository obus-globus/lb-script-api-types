import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { Climate$Parameter } from '../../../../../net/minecraft/world/level/biome/Climate$Parameter.d.ts'
import type { Climate$ParameterPoint } from '../../../../../net/minecraft/world/level/biome/Climate$ParameterPoint.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
export class OverworldBiomeBuilder extends Object {
    static EROSION_INDEX_1_START: number;
    static EROSION_INDEX_2_START: number;
    static FAR_INLAND_START: number;
    static HIGH_START: number;
    static MID_INLAND_START: number;
    static NEAR_INLAND_START: number;
    static PEAK_START: number;
    static getDebugStringForPeaksAndValleys(parampeaksAndValleys: number): string;
    static isDeepDarkRegion(paramerosion: DensityFunction, paramdepth: DensityFunction, paramcontext: DensityFunction$FunctionContext): boolean;
    constructor()
    // private FROZEN_RANGE: Climate$Parameter;
    // private FULL_RANGE: Climate$Parameter;
    // private MIDDLE_BIOMES: ResourceKey<Biome>[][];
    // private MIDDLE_BIOMES_VARIANT: ResourceKey<Biome>[][];
    // private OCEANS: ResourceKey<Biome>[][];
    // private PLATEAU_BIOMES: ResourceKey<Biome>[][];
    // private PLATEAU_BIOMES_VARIANT: ResourceKey<Biome>[][];
    // private SHATTERED_BIOMES: ResourceKey<Biome>[][];
    // private UNFROZEN_RANGE: Climate$Parameter;
    // private coastContinentalness: Climate$Parameter;
    // private deepOceanContinentalness: Climate$Parameter;
    // private erosions: Climate$Parameter[];
    // private farInlandContinentalness: Climate$Parameter;
    // private humidities: Climate$Parameter[];
    // private inlandContinentalness: Climate$Parameter;
    // private midInlandContinentalness: Climate$Parameter;
    // private mushroomFieldsContinentalness: Climate$Parameter;
    // private nearInlandContinentalness: Climate$Parameter;
    // private oceanContinentalness: Climate$Parameter;
    // private temperatures: Climate$Parameter[];
    addBiomes(biomes: (param0: Pair<Climate$ParameterPoint, ResourceKey<Biome>>) => void): void;
    // private addBottomBiome(biomes: (param0: Pair<Climate$ParameterPoint, ResourceKey<Biome>>) => void, temperature: Climate$Parameter, humidity: Climate$Parameter, continentalness: Climate$Parameter, erosion: Climate$Parameter, weirdness: Climate$Parameter, offset: number, biome: ResourceKey<Biome>): void;
    // private addDebugBiomes(biomes: (param0: Pair<Climate$ParameterPoint, ResourceKey<Biome>>) => void): void;
    // private addHighSlice(biomes: (param0: Pair<Climate$ParameterPoint, ResourceKey<Biome>>) => void, weirdness: Climate$Parameter): void;
    // private addInlandBiomes(biomes: (param0: Pair<Climate$ParameterPoint, ResourceKey<Biome>>) => void): void;
    // private addLowSlice(biomes: (param0: Pair<Climate$ParameterPoint, ResourceKey<Biome>>) => void, weirdness: Climate$Parameter): void;
    // private addMidSlice(biomes: (param0: Pair<Climate$ParameterPoint, ResourceKey<Biome>>) => void, weirdness: Climate$Parameter): void;
    // private addOffCoastBiomes(biomes: (param0: Pair<Climate$ParameterPoint, ResourceKey<Biome>>) => void): void;
    // private addPeaks(biomes: (param0: Pair<Climate$ParameterPoint, ResourceKey<Biome>>) => void, weirdness: Climate$Parameter): void;
    // private addSurfaceBiome(biomes: (param0: Pair<Climate$ParameterPoint, ResourceKey<Biome>>) => void, temperature: Climate$Parameter, humidity: Climate$Parameter, continentalness: Climate$Parameter, erosion: Climate$Parameter, weirdness: Climate$Parameter, offset: number, second: ResourceKey<Biome>): void;
    // private addUndergroundBiome(biomes: (param0: Pair<Climate$ParameterPoint, ResourceKey<Biome>>) => void, temperature: Climate$Parameter, humidity: Climate$Parameter, continentalness: Climate$Parameter, erosion: Climate$Parameter, weirdness: Climate$Parameter, offset: number, biome: ResourceKey<Biome>): void;
    // private addUndergroundBiomes(biomes: (param0: Pair<Climate$ParameterPoint, ResourceKey<Biome>>) => void): void;
    // private addValleys(biomes: (param0: Pair<Climate$ParameterPoint, ResourceKey<Biome>>) => void, weirdness: Climate$Parameter): void;
    getContinentalnessThresholds(): Climate$Parameter[];
    getDebugStringForContinentalness(continentalness: number): string;
    getDebugStringForErosion(erosion: number): string;
    getDebugStringForHumidity(humidity: number): string;
    getDebugStringForTemperature(temperature: number): string;
    getErosionThresholds(): Climate$Parameter[];
    getHumidityThresholds(): Climate$Parameter[];
    getPeaksAndValleysThresholds(): Climate$Parameter[];
    getTemperatureThresholds(): Climate$Parameter[];
    getWeirdnessThresholds(): Climate$Parameter[];
    // private maybePickWindsweptSavannaBiome(temperatureIndex: number, humidityIndex: number, weirdness: Climate$Parameter, underlyingBiome: ResourceKey<Biome>): ResourceKey<Biome>;
    // private pickBadlandsBiome(humidityIndex: number, weirdness: Climate$Parameter): ResourceKey<Biome>;
    // private pickBeachBiome(temperatureIndex: number, humidityIndex: number): ResourceKey<Biome>;
    // private pickMiddleBiome(temperatureIndex: number, humidityIndex: number, weirdness: Climate$Parameter): ResourceKey<Biome>;
    // private pickMiddleBiomeOrBadlandsIfHot(temperatureIndex: number, humidityIndex: number, weirdness: Climate$Parameter): ResourceKey<Biome>;
    // private pickMiddleBiomeOrBadlandsIfHotOrSlopeIfCold(temperatureIndex: number, humidityIndex: number, weirdness: Climate$Parameter): ResourceKey<Biome>;
    // private pickPeakBiome(temperatureIndex: number, humidityIndex: number, weirdness: Climate$Parameter): ResourceKey<Biome>;
    // private pickPlateauBiome(temperatureIndex: number, humidityIndex: number, weirdness: Climate$Parameter): ResourceKey<Biome>;
    // private pickShatteredBiome(temperatureIndex: number, humidityIndex: number, weirdness: Climate$Parameter): ResourceKey<Biome>;
    // private pickShatteredCoastBiome(temperatureIndex: number, humidityIndex: number, weirdness: Climate$Parameter): ResourceKey<Biome>;
    // private pickSlopeBiome(temperatureIndex: number, humidityIndex: number, weirdness: Climate$Parameter): ResourceKey<Biome>;
    spawnTarget(): Climate$ParameterPoint[];
}