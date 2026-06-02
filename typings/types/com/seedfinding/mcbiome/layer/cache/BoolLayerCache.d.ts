import type { BoolLayerCache$Sampler } from '../../../../../com/seedfinding/mcbiome/layer/cache/BoolLayerCache$Sampler.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BoolLayerCache extends Object {
    constructor(arg0: number)
    // private keys: number[];
    // private mask: number;
    // private values: (Object | null)[];
    get(arg0: number, arg1: number, arg2: number, arg3: (param0: number, param1: number, param2: number) => kotlin.Boolean): boolean;
    murmur64(arg0: number): number;
    uniqueHash(arg0: number, arg1: number, arg2: number): number;
}