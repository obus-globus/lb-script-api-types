import type { BoolBiomeLayer } from '../../../../../com/seedfinding/mcbiome/layer/BoolBiomeLayer.d.ts'
import type { MCVersion } from '../../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { SimplexNoiseSampler } from '../../../../../com/seedfinding/mcnoise/simplex/SimplexNoiseSampler.d.ts'
import type { LCG } from '../../../../../com/seedfinding/mcseed/lcg/LCG.d.ts'
export class EndSimplexLayer extends BoolBiomeLayer {
    static SIMPLEX_SKIP: LCG;
    static getLayerSeed(paramarg0: number, paramarg1: number): number;
    static getLocalSeed(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static getLocalSeed(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static getMidSalt(paramarg0: number): number;
    constructor(arg0: MCVersion, arg1: number)
    // private simplex: SimplexNoiseSampler;
    sample(arg0: number, arg1: number, arg2: number): boolean;
    sample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean[];
}