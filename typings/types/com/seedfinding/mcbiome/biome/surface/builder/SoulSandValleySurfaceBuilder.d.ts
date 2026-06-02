import type { SurfaceConfig } from '../../../../../../com/seedfinding/mcbiome/biome/surface/SurfaceConfig.d.ts'
import type { ValleySurfaceBuilder } from '../../../../../../com/seedfinding/mcbiome/biome/surface/builder/ValleySurfaceBuilder.d.ts'
import type { BiomeSource } from '../../../../../../com/seedfinding/mcbiome/source/BiomeSource.d.ts'
import type { Block } from '../../../../../../com/seedfinding/mccore/block/Block.d.ts'
import type { Triplet } from '../../../../../../com/seedfinding/mccore/util/data/Triplet.d.ts'
import type { OctavePerlinNoiseSampler } from '../../../../../../com/seedfinding/mcnoise/perlin/OctavePerlinNoiseSampler.d.ts'
export class SoulSandValleySurfaceBuilder extends ValleySurfaceBuilder {
    static CEILING_BLOCK_STATES: Block[];
    static FLOOR_BLOCK_STATES: Block[];
    constructor(arg0: SurfaceConfig)
    getCeilingBlockStates(): Block[];
    getFloorBlockStates(): Block[];
    getNoises(arg0: BiomeSource): Triplet<OctavePerlinNoiseSampler[], OctavePerlinNoiseSampler[], OctavePerlinNoiseSampler>;
    getPatchBlock(): Block;
}