import type { Biome } from '../../../../../../com/seedfinding/mcbiome/biome/Biome.d.ts'
import type { SurfaceConfig } from '../../../../../../com/seedfinding/mcbiome/biome/surface/SurfaceConfig.d.ts'
import type { DefaultSurfaceBuilder } from '../../../../../../com/seedfinding/mcbiome/biome/surface/builder/DefaultSurfaceBuilder.d.ts'
import type { BiomeSource } from '../../../../../../com/seedfinding/mcbiome/source/BiomeSource.d.ts'
import type { Block } from '../../../../../../com/seedfinding/mccore/block/Block.d.ts'
import type { ChunkRand } from '../../../../../../com/seedfinding/mccore/rand/ChunkRand.d.ts'
export class GravellyMountainSurfaceBuilder extends DefaultSurfaceBuilder {
    constructor(arg0: SurfaceConfig)
    applyToColumn(arg0: BiomeSource, arg1: ChunkRand, arg2: Block[], arg3: Biome, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Block, arg10: Block): Block[];
    applyToColumn(arg0: BiomeSource, arg1: ChunkRand, arg2: Block[], arg3: Biome, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: Block, arg11: Block): Block[];
}