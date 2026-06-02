import type { IntBiomeLayer } from '../../../../../com/seedfinding/mcbiome/layer/IntBiomeLayer.d.ts'
import type { MCVersion } from '../../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { PerlinNoiseSampler } from '../../../../../com/seedfinding/mcnoise/perlin/PerlinNoiseSampler.d.ts'
export class OceanTemperatureLayer extends IntBiomeLayer {
    static getLayerSeed(paramarg0: number, paramarg1: number): number;
    static getLocalSeed(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static getLocalSeed(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static getMidSalt(paramarg0: number): number;
    constructor(arg0: MCVersion, arg1: number, arg2: number)
    // private perlin: PerlinNoiseSampler;
    sample(arg0: number, arg1: number, arg2: number): number;
}