import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CacheValue } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CacheValue.d.ts'
import type { CacheValue$Strength } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CacheValue$Strength.d.ts'
export class CacheValue$NullValue<V extends Object | number | string | boolean> extends CacheValue<V> {
    static futureInstancesWillBeStrong(): boolean;
    static getInstance(paramvalue: Object | null): CacheValue<Object>;
    static setStrength(paramstrength: CacheValue$Strength): void;
    private constructor()
    get(): V;
    isNull(): boolean;
    resetIfCleared(value: V): V;
}