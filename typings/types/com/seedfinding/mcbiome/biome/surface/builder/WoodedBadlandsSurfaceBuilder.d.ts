import type { SurfaceConfig } from '../../../../../../com/seedfinding/mcbiome/biome/surface/SurfaceConfig.d.ts'
import type { BadlandsSurfaceBuilder } from '../../../../../../com/seedfinding/mcbiome/biome/surface/builder/BadlandsSurfaceBuilder.d.ts'
import type { Block } from '../../../../../../com/seedfinding/mccore/block/Block.d.ts'
import type { Pair } from '../../../../../../com/seedfinding/mccore/util/data/Pair.d.ts'
import type { OctaveSimplexNoiseSampler } from '../../../../../../com/seedfinding/mcnoise/simplex/OctaveSimplexNoiseSampler.d.ts'
export class WoodedBadlandsSurfaceBuilder extends BadlandsSurfaceBuilder {
    static generateBands(paramarg0: number): Pair<Block[], OctaveSimplexNoiseSampler>;
    constructor(arg0: SurfaceConfig)
    highContion(arg0: number, arg1: number): boolean;
}