import type { Biome } from '../../../../../com/seedfinding/mcbiome/biome/Biome.d.ts'
import type { IntBiomeLayer } from '../../../../../com/seedfinding/mcbiome/layer/IntBiomeLayer.d.ts'
import type { MultiNoiseLayer18$BiomePoint } from '../../../../../com/seedfinding/mcbiome/layer/noise/MultiNoiseLayer18$BiomePoint.d.ts'
import type { MultiNoiseLayer18$NoiseSettings } from '../../../../../com/seedfinding/mcbiome/layer/noise/MultiNoiseLayer18$NoiseSettings.d.ts'
import type { MultiNoiseLayer18$TargetPoint } from '../../../../../com/seedfinding/mcbiome/layer/noise/MultiNoiseLayer18$TargetPoint.d.ts'
import type { MultiNoiseLayer18$TerrainShaper } from '../../../../../com/seedfinding/mcbiome/layer/noise/MultiNoiseLayer18$TerrainShaper.d.ts'
import type { MCVersion } from '../../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { DoublePerlinNoiseSampler } from '../../../../../com/seedfinding/mcnoise/noise/DoublePerlinNoiseSampler.d.ts'
export class MultiNoiseLayer18 extends IntBiomeLayer {
    static shaper: MultiNoiseLayer18$TerrainShaper;
    static computeDimensionDensity(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static computeDimensionDensity(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static getLayerSeed(paramarg0: number, paramarg1: number): number;
    static getLocalSeed(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static getLocalSeed(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static getMidSalt(paramarg0: number): number;
    constructor(arg0: MCVersion, arg1: number, arg2: boolean, arg3: MultiNoiseLayer18$TargetPoint[])
    constructor(arg0: MCVersion, arg1: number, arg2: boolean, arg3: MultiNoiseLayer18$TargetPoint[], arg4: MultiNoiseLayer18$NoiseSettings)
    // private altitude: DoublePerlinNoiseSampler;
    // private biomePoints: MultiNoiseLayer18$TargetPoint[];
    // private erosion: DoublePerlinNoiseSampler;
    // private humidity: DoublePerlinNoiseSampler;
    // private is3D: boolean;
    // private offset: DoublePerlinNoiseSampler;
    // private temperature: DoublePerlinNoiseSampler;
    // private weirdness: DoublePerlinNoiseSampler;
    // private bruteforceFinder(arg0: MultiNoiseLayer18$TargetPoint, arg1: MultiNoiseLayer18$BiomePoint[]): Biome;
    sample(arg0: number, arg1: number, arg2: number): number;
}