import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CacheValue$Strength } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CacheValue$Strength.d.ts'
export abstract class CacheValue<V extends unknown> extends Object {
    static futureInstancesWillBeStrong(): boolean;
    static getInstance<V extends unknown>(paramvalue: V): CacheValue<V>;
    static setStrength(paramstrength: CacheValue$Strength): void;
    constructor()
    get(): V;
    isNull(): boolean;
    resetIfCleared(value: V): V;
}