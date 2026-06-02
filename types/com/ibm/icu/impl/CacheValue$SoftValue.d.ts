import type { CacheValue } from '../../../../com/ibm/icu/impl/CacheValue.d.ts'
import type { CacheValue$Strength } from '../../../../com/ibm/icu/impl/CacheValue$Strength.d.ts'
import type { Reference } from '../../../../java/lang/ref/Reference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CacheValue$SoftValue<V extends Object | number | string | boolean> extends CacheValue<V> {
    static futureInstancesWillBeStrong(): boolean;
    static getInstance(paramarg0: Object | null): CacheValue<Object>;
    static setStrength(paramarg0: CacheValue$Strength): void;
    constructor(arg0: V)
    // private ref: Reference<V>;
    get(): V;
    resetIfCleared(arg0: V): V;
}