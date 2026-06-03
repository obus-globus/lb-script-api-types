import type { BoolBiomeLayer } from '../../../../../com/seedfinding/mcbiome/layer/BoolBiomeLayer.d.ts'
import type { FloatBiomeLayer } from '../../../../../com/seedfinding/mcbiome/layer/FloatBiomeLayer.d.ts'
import type { MCVersion } from '../../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
export class EndHeightLayer extends FloatBiomeLayer {
    static getLayerSeed(paramarg0: number, paramarg1: number): number;
    static getLocalSeed(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static getLocalSeed(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static getMidSalt(paramarg0: number): number;
    constructor(arg0: MCVersion, arg1: BoolBiomeLayer)
    getNoiseValueAt(arg0: number, arg1: number): number;
    sample(arg0: number, arg1: number, arg2: number): number;
    sample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number[];
}