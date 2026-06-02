import type { BiomeLayer } from '../../../../com/seedfinding/mcbiome/layer/BiomeLayer.d.ts'
import type { BoolLayerCache } from '../../../../com/seedfinding/mcbiome/layer/cache/BoolLayerCache.d.ts'
import type { MCVersion } from '../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class BoolBiomeLayer extends BiomeLayer {
    static getLayerSeed(paramarg0: number, paramarg1: number): number;
    static getLocalSeed(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static getLocalSeed(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static getMidSalt(paramarg0: number): number;
    constructor(arg0: MCVersion)
    constructor(arg0: MCVersion, arg1: BiomeLayer[])
    constructor(arg0: MCVersion, arg1: number, arg2: number)
    constructor(arg0: MCVersion, arg1: number, arg2: number, arg3: BiomeLayer[])
    // private layerCache: BoolLayerCache;
    get(arg0: number, arg1: number, arg2: number): boolean;
    sample(arg0: number, arg1: number, arg2: number): boolean;
    sample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): (Object | null)[];
}