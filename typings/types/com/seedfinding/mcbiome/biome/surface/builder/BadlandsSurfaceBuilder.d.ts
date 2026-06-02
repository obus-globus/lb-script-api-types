import type { Biome } from '../../../../../../com/seedfinding/mcbiome/biome/Biome.d.ts'
import type { SurfaceConfig } from '../../../../../../com/seedfinding/mcbiome/biome/surface/SurfaceConfig.d.ts'
import type { SurfaceBuilder } from '../../../../../../com/seedfinding/mcbiome/biome/surface/builder/SurfaceBuilder.d.ts'
import type { BiomeSource } from '../../../../../../com/seedfinding/mcbiome/source/BiomeSource.d.ts'
import type { Block } from '../../../../../../com/seedfinding/mccore/block/Block.d.ts'
import type { ChunkRand } from '../../../../../../com/seedfinding/mccore/rand/ChunkRand.d.ts'
import type { Pair } from '../../../../../../com/seedfinding/mccore/util/data/Pair.d.ts'
import type { OctaveSimplexNoiseSampler } from '../../../../../../com/seedfinding/mcnoise/simplex/OctaveSimplexNoiseSampler.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BadlandsSurfaceBuilder extends SurfaceBuilder {
    static generateBands(paramarg0: number): Pair<(Object | null)[], OctaveSimplexNoiseSampler>;
    constructor(arg0: SurfaceConfig)
    applyToColumn(arg0: BiomeSource, arg1: ChunkRand, arg2: Block[], arg3: Biome, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: Block, arg11: Block): Block[];
    getBandY(arg0: number, arg1: number, arg2: number, arg3: OctaveSimplexNoiseSampler): number;
    getBaseBlock(arg0: number, arg1: Block[], arg2: BiomeSource, arg3: Block): Block;
    highContion(arg0: number, arg1: number): boolean;
    orangeTerracottaCondition(arg0: Block): boolean;
    shouldBypass(): boolean;
}