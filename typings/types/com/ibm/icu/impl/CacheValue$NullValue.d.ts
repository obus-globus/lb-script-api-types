import type { CacheValue } from '../../../../com/ibm/icu/impl/CacheValue.d.ts'
import type { CacheValue$Strength } from '../../../../com/ibm/icu/impl/CacheValue$Strength.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CacheValue$NullValue<V extends unknown> extends CacheValue<V> {
    static futureInstancesWillBeStrong(): boolean;
    static getInstance(paramarg0: Object | null): CacheValue<Object>;
    static setStrength(paramarg0: CacheValue$Strength): void;
    private constructor()
    get(): V;
    isNull(): boolean;
    resetIfCleared(arg0: V): V;
}