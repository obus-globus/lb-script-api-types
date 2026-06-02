import type { IntLayerCache$Sampler } from '../../../../../com/seedfinding/mcbiome/layer/cache/IntLayerCache$Sampler.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntLayerCache extends Object {
    constructor(arg0: number)
    // private keys: number[];
    // private mask: number;
    // private values: number[];
    forceStoreAndGet(arg0: number, arg1: number, arg2: number, arg3: (param0: number, param1: number, param2: number) => kotlin.Int): number;
    get(arg0: number, arg1: number, arg2: number, arg3: (param0: number, param1: number, param2: number) => kotlin.Int): number;
    getWithoutStore(arg0: number, arg1: number, arg2: number, arg3: (param0: number, param1: number, param2: number) => kotlin.Int): number;
    murmur64(arg0: number): number;
    uniqueHash(arg0: number, arg1: number, arg2: number): number;
}