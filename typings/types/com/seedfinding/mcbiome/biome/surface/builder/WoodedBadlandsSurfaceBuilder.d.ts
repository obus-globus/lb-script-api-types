import type { SurfaceConfig } from '../../../../../../com/seedfinding/mcbiome/biome/surface/SurfaceConfig.d.ts'
import type { BadlandsSurfaceBuilder } from '../../../../../../com/seedfinding/mcbiome/biome/surface/builder/BadlandsSurfaceBuilder.d.ts'
import type { Pair } from '../../../../../../com/seedfinding/mccore/util/data/Pair.d.ts'
import type { OctaveSimplexNoiseSampler } from '../../../../../../com/seedfinding/mcnoise/simplex/OctaveSimplexNoiseSampler.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WoodedBadlandsSurfaceBuilder extends BadlandsSurfaceBuilder {
    static generateBands(paramarg0: number): Pair<(Object | null)[], OctaveSimplexNoiseSampler>;
    constructor(arg0: SurfaceConfig)
    highContion(arg0: number, arg1: number): boolean;
}