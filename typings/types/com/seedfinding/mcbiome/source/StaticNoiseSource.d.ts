import type { FloatLayerCache } from '../../../../com/seedfinding/mcbiome/layer/cache/FloatLayerCache.d.ts'
import type { Block } from '../../../../com/seedfinding/mccore/block/Block.d.ts'
import type { Pair } from '../../../../com/seedfinding/mccore/util/data/Pair.d.ts'
import type { Quad } from '../../../../com/seedfinding/mccore/util/data/Quad.d.ts'
import type { Triplet } from '../../../../com/seedfinding/mccore/util/data/Triplet.d.ts'
import type { OctavePerlinNoiseSampler } from '../../../../com/seedfinding/mcnoise/perlin/OctavePerlinNoiseSampler.d.ts'
import type { OctaveSimplexNoiseSampler } from '../../../../com/seedfinding/mcnoise/simplex/OctaveSimplexNoiseSampler.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StaticNoiseSource extends Object {
    static BIOME_INFO_NOISE: OctaveSimplexNoiseSampler;
    static FROZEN_TEMPERATURE_NOISE: OctaveSimplexNoiseSampler;
    static TEMPERATURE_CACHE: FloatLayerCache;
    static TEMPERATURE_NOISE: OctaveSimplexNoiseSampler;
    constructor(arg0: number)
    readonly badlandsSurface: Quad<Block[], OctaveSimplexNoiseSampler, OctaveSimplexNoiseSampler, OctaveSimplexNoiseSampler>;
    readonly netherForestsNoise: OctavePerlinNoiseSampler;
    readonly netherNoise: OctavePerlinNoiseSampler;
    readonly noises: Pair<OctaveSimplexNoiseSampler, OctaveSimplexNoiseSampler>;
    readonly patchNoise: OctavePerlinNoiseSampler[];
    readonly valleyNoise: OctavePerlinNoiseSampler[];
    readonly worldSeed: number;
    getBadlandsSurface(): Quad<Block[], OctaveSimplexNoiseSampler, OctaveSimplexNoiseSampler, OctaveSimplexNoiseSampler>;
    getBasaltDeltasNoise(): Triplet<OctavePerlinNoiseSampler[], OctavePerlinNoiseSampler[], OctavePerlinNoiseSampler>;
    getFrozenOceanSurface(): Pair<OctaveSimplexNoiseSampler, OctaveSimplexNoiseSampler>;
    getNetherForestsNoise(): OctavePerlinNoiseSampler;
    getNetherNoise(): OctavePerlinNoiseSampler;
    getNoises(): Pair<OctaveSimplexNoiseSampler, OctaveSimplexNoiseSampler>;
    getPatchNoise(): OctavePerlinNoiseSampler[];
    getSoulSandValleyNoise(): Triplet<OctavePerlinNoiseSampler[], OctavePerlinNoiseSampler[], OctavePerlinNoiseSampler>;
    getValleyNoise(): OctavePerlinNoiseSampler[];
    getWorldSeed(): number;
    // private purgeCache(arg0: number): void;
}