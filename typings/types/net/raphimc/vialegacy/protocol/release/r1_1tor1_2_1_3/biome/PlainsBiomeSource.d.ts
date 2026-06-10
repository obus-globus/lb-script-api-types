import type { Biome } from '../../../../../../../com/seedfinding/mcbiome/biome/Biome.d.ts'
import type { BiomeSource } from '../../../../../../../com/seedfinding/mcbiome/source/BiomeSource.d.ts'
import type { BiomeSource$Factory } from '../../../../../../../com/seedfinding/mcbiome/source/BiomeSource$Factory.d.ts'
import type { Dimension } from '../../../../../../../com/seedfinding/mccore/state/Dimension.d.ts'
import type { BPos } from '../../../../../../../com/seedfinding/mccore/util/pos/BPos.d.ts'
import type { MCVersion } from '../../../../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
export class PlainsBiomeSource extends BiomeSource {
    static factory(paramarg0: Dimension): (param0: MCVersion, param1: number) => BiomeSource;
    static of(paramarg0: Dimension, paramarg1: MCVersion, paramarg2: number): BiomeSource;
    constructor()
    getBiome(arg0: BPos): Biome;
    getBiome(arg0: number, arg1: number, arg2: number): Biome;
    getBiomeForNoiseGen(arg0: number, arg1: number, arg2: number): Biome;
    getDimension(): Dimension;
}