import type { Biome } from '../../../../../com/seedfinding/mcbiome/biome/Biome.d.ts'
import type { IntBiomeLayer } from '../../../../../com/seedfinding/mcbiome/layer/IntBiomeLayer.d.ts'
import type { CrossLayer } from '../../../../../com/seedfinding/mcbiome/layer/composite/CrossLayer.d.ts'
import type { MCVersion } from '../../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
export class EaseEdgeLayer extends CrossLayer {
    static anyMatch(paramarg0: Biome, paramarg1: number[]): boolean;
    static getLayerSeed(paramarg0: number, paramarg1: number): number;
    static getLocalSeed(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static getLocalSeed(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static getMidSalt(paramarg0: number): number;
    constructor(arg0: MCVersion, arg1: number, arg2: number, arg3: IntBiomeLayer)
    // private canBeNeighbors(arg0: number, arg1: Biome): boolean;
    // private replaceEdge(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Biome, arg7: Biome): boolean;
    // private replaceEdgeIfNeeded(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Biome, arg7: Biome): boolean;
    sample(arg0: number, arg1: number, arg2: number): number;
    sample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
    sample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number[];
}