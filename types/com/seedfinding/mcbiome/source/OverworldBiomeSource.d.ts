import type { Biome } from '../../../../com/seedfinding/mcbiome/biome/Biome.d.ts'
import type { IntBiomeLayer } from '../../../../com/seedfinding/mcbiome/layer/IntBiomeLayer.d.ts'
import type { VoronoiLayer } from '../../../../com/seedfinding/mcbiome/layer/composite/VoronoiLayer.d.ts'
import type { BiomeSource } from '../../../../com/seedfinding/mcbiome/source/BiomeSource.d.ts'
import type { BiomeSource$Factory } from '../../../../com/seedfinding/mcbiome/source/BiomeSource$Factory.d.ts'
import type { LayeredBiomeSource } from '../../../../com/seedfinding/mcbiome/source/LayeredBiomeSource.d.ts'
import type { Dimension } from '../../../../com/seedfinding/mccore/state/Dimension.d.ts'
import type { BPos } from '../../../../com/seedfinding/mccore/util/pos/BPos.d.ts'
import type { MCVersion } from '../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
export class OverworldBiomeSource extends LayeredBiomeSource<IntBiomeLayer> {
    static DEFAULT_BIOME_SIZE: number;
    static DEFAULT_RIVER_SIZE: number;
    static LARGE_BIOME_SIZE: number;
    static factory(paramarg0: Dimension): (param0: MCVersion, param1: number) => com.seedfinding.mcbiome.source.BiomeSource;
    static of(paramarg0: Dimension, paramarg1: MCVersion, paramarg2: number): BiomeSource;
    constructor(arg0: MCVersion, arg1: number)
    constructor(arg0: MCVersion, arg1: number, arg2: number, arg3: number)
    constructor(arg0: MCVersion, arg1: number, arg2: number, arg3: number, arg4: boolean)
    base: IntBiomeLayer;
    biomeSize: number;
    biomes: IntBiomeLayer;
    debug: IntBiomeLayer;
    full: IntBiomeLayer;
    noise: IntBiomeLayer;
    ocean: IntBiomeLayer;
    river: IntBiomeLayer;
    riverSize: number;
    useDefault1_1: boolean;
    variants: IntBiomeLayer;
    voronoi: VoronoiLayer;
    build(): void;
    getBiome(arg0: BPos): Biome;
    getBiome(arg0: number, arg1: number, arg2: number): Biome;
    getBiomeForNoiseGen(arg0: number, arg1: number, arg2: number): Biome;
    getDimension(): Dimension;
    setBiomeSize(arg0: number): void;
    setLargeBiomeSize(): void;
    setRiverSize(arg0: number): void;
    setUseDefault1_1(arg0: boolean): void;
    stack(arg0: number, arg1: (param0: number, param1: IntBiomeLayer) => IntBiomeLayer, arg2: IntBiomeLayer, arg3: number): IntBiomeLayer;
}