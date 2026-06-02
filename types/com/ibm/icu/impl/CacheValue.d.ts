import type { CacheValue$Strength } from '../../../../com/ibm/icu/impl/CacheValue$Strength.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class CacheValue<V extends Object | number | string | boolean> extends Object {
    static futureInstancesWillBeStrong(): boolean;
    static getInstance(paramarg0: Object | null): CacheValue<Object>;
    static setStrength(paramarg0: CacheValue$Strength): void;
    constructor()
    get(): V;
    isNull(): boolean;
    resetIfCleared(arg0: V): V;
}