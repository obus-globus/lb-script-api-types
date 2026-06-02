import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
export class SafeInteger extends Number implements TruffleObject, Comparable<SafeInteger> {
    static valueOf(paramvalue: number): SafeInteger;
    static valueOf(paramvalue: number): SafeInteger;
    private constructor(value: number)
    // private value: number;
    addExact(other: SafeInteger): SafeInteger;
    compareTo(other: SafeInteger): number;
    decrementExact(): SafeInteger;
    equals(obj: Object | null): boolean;
    getLanguage(): Class<TruffleLanguage<Object>>;
    getMetaObject(): Object;
    hasLanguage(): boolean;
    hasMetaObject(): boolean;
    hashCode(): number;
    incrementExact(): SafeInteger;
    isNegative(): boolean;
    toDisplayString(allowSideEffects: boolean): Object;
    toDouble(): number;
    toFloat(): number;
    toInt(): number;
    toLong(): number;
    toString(): string;
}