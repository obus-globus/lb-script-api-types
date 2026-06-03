import type { IntBiomeLayer } from '../../../../../com/seedfinding/mcbiome/layer/IntBiomeLayer.d.ts'
import type { MCVersion } from '../../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
export class VoronoiLayer extends IntBiomeLayer {
    static getLayerSeed(paramarg0: number, paramarg1: number): number;
    static getLocalSeed(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static getLocalSeed(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static getMidSalt(paramarg0: number): number;
    constructor(arg0: MCVersion, arg1: number, arg2: boolean, arg3: IntBiomeLayer)
    // private is3D: boolean;
    readonly seed: number;
    getSeed(): number;
    is3D(): boolean;
    sample(arg0: number, arg1: number, arg2: number): number;
    sample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number[];
    // private sample14minus(arg0: number, arg1: number): number;
    // private sample15plus(arg0: number, arg1: number, arg2: number): number;
}