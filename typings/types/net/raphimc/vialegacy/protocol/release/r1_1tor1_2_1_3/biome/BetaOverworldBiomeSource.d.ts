import type { Biome } from '../../../../../../../com/seedfinding/mcbiome/biome/Biome.d.ts'
import type { BiomeSource } from '../../../../../../../com/seedfinding/mcbiome/source/BiomeSource.d.ts'
import type { BiomeSource$Factory } from '../../../../../../../com/seedfinding/mcbiome/source/BiomeSource$Factory.d.ts'
import type { Dimension } from '../../../../../../../com/seedfinding/mccore/state/Dimension.d.ts'
import type { BPos } from '../../../../../../../com/seedfinding/mccore/util/pos/BPos.d.ts'
import type { MCVersion } from '../../../../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { BetaBiome } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_1tor1_2_1_3/biome/BetaBiome.d.ts'
import type { BetaOctaveSimplexNoiseSampler } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_1tor1_2_1_3/biome/BetaOctaveSimplexNoiseSampler.d.ts'
export class BetaOverworldBiomeSource extends BiomeSource {
    static factory(paramarg0: Dimension): (param0: MCVersion, param1: number) => com.seedfinding.mcbiome.source.BiomeSource;
    static of(paramarg0: Dimension, paramarg1: MCVersion, paramarg2: number): BiomeSource;
    constructor(arg0: number)
    // private biomeNoise: BetaOctaveSimplexNoiseSampler;
    // private humidityNoise: BetaOctaveSimplexNoiseSampler;
    // private temperatureNoise: BetaOctaveSimplexNoiseSampler;
    getBetaBiome(arg0: number, arg1: number): BetaBiome;
    getBiome(arg0: BPos): Biome;
    getBiome(arg0: number, arg1: number, arg2: number): Biome;
    getBiomeForNoiseGen(arg0: number, arg1: number, arg2: number): Biome;
    getDimension(): Dimension;
    getHumidity(arg0: number, arg1: number): number;
    getTemperature(arg0: number, arg1: number): number;
}