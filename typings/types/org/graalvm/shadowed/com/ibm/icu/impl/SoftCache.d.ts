import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CacheBase } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CacheBase.d.ts'
export abstract class SoftCache<K extends unknown, V extends unknown, D extends unknown> extends CacheBase<K, V, D> {
    constructor()
    // private map: Map<K, Object>;
    getInstance(key: K, data: D): V;
}