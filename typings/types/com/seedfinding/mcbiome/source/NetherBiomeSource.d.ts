import type { BiomeSource } from '../../../../com/seedfinding/mcbiome/source/BiomeSource.d.ts'
import type { BiomeSource$Factory } from '../../../../com/seedfinding/mcbiome/source/BiomeSource$Factory.d.ts'
import type { MultiNoiseBiomeSource } from '../../../../com/seedfinding/mcbiome/source/MultiNoiseBiomeSource.d.ts'
import type { Dimension } from '../../../../com/seedfinding/mccore/state/Dimension.d.ts'
import type { MCVersion } from '../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
export class NetherBiomeSource extends MultiNoiseBiomeSource {
    static factory(paramarg0: Dimension): (param0: MCVersion, param1: number) => BiomeSource;
    static of(paramarg0: Dimension, paramarg1: MCVersion, paramarg2: number): BiomeSource;
    constructor(arg0: MCVersion, arg1: number)
    build(): void;
    getDimension(): Dimension;
}