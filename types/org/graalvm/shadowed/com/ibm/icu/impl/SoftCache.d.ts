import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CacheBase } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CacheBase.d.ts'
export abstract class SoftCache<K extends Object | number | string | boolean, V extends Object | number | string | boolean, D extends Object | number | string | boolean> extends CacheBase<K, V, D> {
    constructor()
    // private map: Map<K, Object>;
    getInstance(key: K, data: D): V;
}