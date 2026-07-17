import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Reference } from '../../../../../../../java/lang/ref/Reference.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICUCache } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUCache.d.ts'
export class SimpleCache<K extends unknown, V extends unknown> extends Object implements ICUCache<K, V> {
    static NULL: Object;
    static SOFT: number;
    static WEAK: number;
    constructor()
    constructor(cacheType: number)
    constructor(cacheType: number, initialCapacity: number)
    // private cacheRef: Reference<JavaMap<K, V>>;
    // private capacity: number;
    // private type: number;
    clear(): void;
    get(key: Object): V;
    put(key: K, value: V): void;
}