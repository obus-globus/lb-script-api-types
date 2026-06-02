import type { BiomePoint } from '../../../../../com/seedfinding/mcbiome/biome/BiomePoint.d.ts'
import type { IntBiomeLayer } from '../../../../../com/seedfinding/mcbiome/layer/IntBiomeLayer.d.ts'
import type { MultiNoiseLayer17$NoiseSettings } from '../../../../../com/seedfinding/mcbiome/layer/noise/MultiNoiseLayer17$NoiseSettings.d.ts'
import type { MCVersion } from '../../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { DoublePerlinNoiseSampler } from '../../../../../com/seedfinding/mcnoise/noise/DoublePerlinNoiseSampler.d.ts'
export class MultiNoiseLayer17 extends IntBiomeLayer {
    static getLayerSeed(paramarg0: number, paramarg1: number): number;
    static getLocalSeed(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static getLocalSeed(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static getMidSalt(paramarg0: number): number;
    constructor(arg0: MCVersion, arg1: number, arg2: boolean, arg3: BiomePoint[])
    constructor(arg0: MCVersion, arg1: number, arg2: boolean, arg3: BiomePoint[], arg4: MultiNoiseLayer17$NoiseSettings)
    // private altitude: DoublePerlinNoiseSampler;
    // private biomePoints: BiomePoint[];
    // private humidity: DoublePerlinNoiseSampler;
    // private is3D: boolean;
    // private temperature: DoublePerlinNoiseSampler;
    // private weirdness: DoublePerlinNoiseSampler;
    sample(arg0: number, arg1: number, arg2: number): number;
}