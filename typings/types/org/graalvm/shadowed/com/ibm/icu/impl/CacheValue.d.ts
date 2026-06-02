import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CacheValue$Strength } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CacheValue$Strength.d.ts'
export abstract class CacheValue<V extends Object | number | string | boolean> extends Object {
    static futureInstancesWillBeStrong(): boolean;
    static getInstance(paramvalue: Object | null): CacheValue<Object>;
    static setStrength(paramstrength: CacheValue$Strength): void;
    constructor()
    get(): V;
    isNull(): boolean;
    resetIfCleared(value: V): V;
}