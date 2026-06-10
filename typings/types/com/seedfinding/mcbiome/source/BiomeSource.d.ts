import type { Biome } from '../../../../com/seedfinding/mcbiome/biome/Biome.d.ts'
import type { BiomeSource$Factory } from '../../../../com/seedfinding/mcbiome/source/BiomeSource$Factory.d.ts'
import type { StaticNoiseSource } from '../../../../com/seedfinding/mcbiome/source/StaticNoiseSource.d.ts'
import type { Dimension } from '../../../../com/seedfinding/mccore/state/Dimension.d.ts'
import type { BPos } from '../../../../com/seedfinding/mccore/util/pos/BPos.d.ts'
import type { MCVersion } from '../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { JRand } from '../../../../com/seedfinding/mcseed/rand/JRand.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class BiomeSource extends Object {
    static factory(paramarg0: Dimension): (param0: MCVersion, param1: number) => BiomeSource;
    static of(paramarg0: Dimension, paramarg1: MCVersion, paramarg2: number): BiomeSource;
    constructor(arg0: MCVersion, arg1: number)
    readonly staticNoiseSource: StaticNoiseSource;
    readonly version: MCVersion;
    readonly worldSeed: number;
    getBiome(arg0: BPos): Biome;
    getBiome(arg0: number, arg1: number, arg2: number): Biome;
    getBiomeForNoiseGen(arg0: number, arg1: number, arg2: number): Biome;
    getDimension(): Dimension;
    getStaticNoiseSource(): StaticNoiseSource;
    getVersion(): MCVersion;
    getWorldSeed(): number;
    iterateUniqueBiomes(arg0: number, arg1: number, arg2: number, arg3: (param0: Biome) => boolean): boolean;
    iterateUniqueBiomes(arg0: number, arg1: number, arg2: number, arg3: number, arg4: (param0: Biome) => boolean): boolean;
    locateBiome(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Biome[], arg6: JRand, arg7: boolean): BPos;
    locateBiome(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Biome[], arg5: JRand): BPos;
    locateBiome12(arg0: number, arg1: number, arg2: number, arg3: Biome[], arg4: JRand): BPos;
    locateNearestBiome(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Biome[], arg5: JRand): BPos;
}