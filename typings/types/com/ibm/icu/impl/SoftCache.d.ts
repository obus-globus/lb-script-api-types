import type { CacheBase } from '../../../../com/ibm/icu/impl/CacheBase.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class SoftCache<K extends unknown, V extends unknown, D extends unknown> extends CacheBase<K, V, D> {
    constructor()
    // private map: Map<K, Object>;
    getInstance(arg0: K, arg1: D): V;
}