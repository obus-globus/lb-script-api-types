import type { CacheBase } from '../../../../com/ibm/icu/impl/CacheBase.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class SoftCache<K extends Object | number | string | boolean, V extends Object | number | string | boolean, D extends Object | number | string | boolean> extends CacheBase<K, V, D> {
    constructor()
    // private map: Map<K, Object>;
    getInstance(arg0: K, arg1: D): V;
}