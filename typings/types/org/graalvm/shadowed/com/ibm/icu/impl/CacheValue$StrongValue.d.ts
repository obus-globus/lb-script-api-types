import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CacheValue } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CacheValue.d.ts'
import type { CacheValue$Strength } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CacheValue$Strength.d.ts'
export class CacheValue$StrongValue<V extends unknown> extends CacheValue<V> {
    static futureInstancesWillBeStrong(): boolean;
    static getInstance(paramvalue: Object | null): CacheValue<Object>;
    static setStrength(paramstrength: CacheValue$Strength): void;
    constructor(value: V)
    // private value: V;
    get(): V;
    resetIfCleared(value: V): V;
}