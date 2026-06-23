import type { ICUCache } from '../../../../com/ibm/icu/impl/ICUCache.d.ts'
import type { Reference } from '../../../../java/lang/ref/Reference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SimpleCache<K extends unknown, V extends unknown> extends Object implements ICUCache<K, V> {
    static NULL: Object;
    static SOFT: number;
    static WEAK: number;
    constructor()
    constructor(arg0: number)
    constructor(arg0: number, arg1: number)
    // private cacheRef: Reference<Map<K, V>>;
    // private capacity: number;
    // private type: number;
    clear(): void;
    get(arg0: Object): V;
    put(arg0: K, arg1: V): void;
}