import type { Biome } from '../../../../com/seedfinding/mcbiome/biome/Biome.d.ts'
import type { BiomePoint } from '../../../../com/seedfinding/mcbiome/biome/BiomePoint.d.ts'
import type { IntBiomeLayer } from '../../../../com/seedfinding/mcbiome/layer/IntBiomeLayer.d.ts'
import type { VoronoiLayer } from '../../../../com/seedfinding/mcbiome/layer/composite/VoronoiLayer.d.ts'
import type { MultiNoiseLayer17 } from '../../../../com/seedfinding/mcbiome/layer/noise/MultiNoiseLayer17.d.ts'
import type { BiomeSource } from '../../../../com/seedfinding/mcbiome/source/BiomeSource.d.ts'
import type { BiomeSource$Factory } from '../../../../com/seedfinding/mcbiome/source/BiomeSource$Factory.d.ts'
import type { LayeredBiomeSource } from '../../../../com/seedfinding/mcbiome/source/LayeredBiomeSource.d.ts'
import type { Dimension } from '../../../../com/seedfinding/mccore/state/Dimension.d.ts'
import type { BPos } from '../../../../com/seedfinding/mccore/util/pos/BPos.d.ts'
import type { MCVersion } from '../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
export abstract class MultiNoiseBiomeSource extends LayeredBiomeSource<IntBiomeLayer> {
    static factory(paramarg0: Dimension): (param0: MCVersion, param1: number) => com.seedfinding.mcbiome.source.BiomeSource;
    static of(paramarg0: Dimension, paramarg1: MCVersion, paramarg2: number): BiomeSource;
    constructor(arg0: MCVersion, arg1: number, arg2: BiomePoint[])
    readonly biomePoints: BiomePoint[];
    full: MultiNoiseLayer17;
    // private threeDimensional: boolean;
    voronoi: VoronoiLayer;
    addDimension(): MultiNoiseBiomeSource;
    build(): void;
    getBiome(arg0: BPos): Biome;
    getBiome(arg0: number, arg1: number, arg2: number): Biome;
    getBiomeForNoiseGen(arg0: number, arg1: number, arg2: number): Biome;
    getBiomePoints(): BiomePoint[];
    getDimension(): Dimension;
    is3D(): boolean;
}