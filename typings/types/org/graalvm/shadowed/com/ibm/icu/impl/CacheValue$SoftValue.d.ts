import type { Reference } from '../../../../../../../java/lang/ref/Reference.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CacheValue } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CacheValue.d.ts'
import type { CacheValue$Strength } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CacheValue$Strength.d.ts'
export class CacheValue$SoftValue<V extends unknown> extends CacheValue<V> {
    static futureInstancesWillBeStrong(): boolean;
    static getInstance<V extends unknown>(paramvalue: V): CacheValue<V>;
    static setStrength(paramstrength: CacheValue$Strength): void;
    constructor(value: V)
    // private ref: Reference<V>;
    get(): V;
    resetIfCleared(value: V): V;
}