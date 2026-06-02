import type { BiomeLayer } from '../../../../com/seedfinding/mcbiome/layer/BiomeLayer.d.ts'
import type { BiomeSource } from '../../../../com/seedfinding/mcbiome/source/BiomeSource.d.ts'
import type { BiomeSource$Factory } from '../../../../com/seedfinding/mcbiome/source/BiomeSource$Factory.d.ts'
import type { Dimension } from '../../../../com/seedfinding/mccore/state/Dimension.d.ts'
import type { MCVersion } from '../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
export abstract class LayeredBiomeSource<T extends BiomeLayer> extends BiomeSource {
    static factory(paramarg0: Dimension): (param0: MCVersion, param1: number) => com.seedfinding.mcbiome.source.BiomeSource;
    static of(paramarg0: Dimension, paramarg1: MCVersion, paramarg2: number): BiomeSource;
    constructor(arg0: MCVersion, arg1: number)
    readonly layers: T[];
    getLayer(arg0: Class<BiomeLayer>): T;
    getLayer(arg0: number): T;
    getLayerCount(): number;
    getLayers(): T[];
}