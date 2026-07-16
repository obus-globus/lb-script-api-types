import type { CacheValue } from '../../../../com/ibm/icu/impl/CacheValue.d.ts'
import type { CacheValue$Strength } from '../../../../com/ibm/icu/impl/CacheValue$Strength.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CacheValue$StrongValue<V extends unknown> extends CacheValue<V> {
    static futureInstancesWillBeStrong(): boolean;
    static getInstance<V extends unknown>(paramarg0: V): CacheValue<V>;
    static setStrength(paramarg0: CacheValue$Strength): void;
    constructor(arg0: V)
    // private value: V;
    get(): V;
    resetIfCleared(arg0: V): V;
}