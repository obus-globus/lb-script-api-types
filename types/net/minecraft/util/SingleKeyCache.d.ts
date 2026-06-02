import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class SingleKeyCache<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object {
    constructor(computeValue: (param0: K) => V)
    // private cacheKey: K;
    // private cachedValue: V;
    // private computeValue: (param0: K) => V;
    getValue(cacheKey: K): V;
}