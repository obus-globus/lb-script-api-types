import type { CacheValue$Strength } from '../../../../com/ibm/icu/impl/CacheValue$Strength.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class CacheValue<V extends unknown> extends Object {
    static futureInstancesWillBeStrong(): boolean;
    static getInstance<V extends unknown>(paramarg0: V): CacheValue<V>;
    static setStrength(paramarg0: CacheValue$Strength): void;
    constructor()
    get(): V;
    isNull(): boolean;
    resetIfCleared(arg0: V): V;
}