import type { CollationKey } from '../../../../com/ibm/icu/text/CollationKey.d.ts'
import type { Collator$CollatorFactory } from '../../../../com/ibm/icu/text/Collator$CollatorFactory.d.ts'
import type { RawCollationKey } from '../../../../com/ibm/icu/text/RawCollationKey.d.ts'
import type { Freezable } from '../../../../com/ibm/icu/util/Freezable.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$Type } from '../../../../com/ibm/icu/util/ULocale$Type.d.ts'
import type { VersionInfo } from '../../../../com/ibm/icu/util/VersionInfo.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export abstract class Collator extends Object implements Freezable<Collator>, Comparator<Object>, Cloneable {
    static CANONICAL_DECOMPOSITION: number;
    static FULL_DECOMPOSITION: number;
    static IDENTICAL: number;
    static NO_DECOMPOSITION: number;
    static PRIMARY: number;
    static QUATERNARY: number;
    static SECONDARY: number;
    static TERTIARY: number;
    static comparing<T extends unknown, U extends Comparable<Object>>(paramarg0: (param0: Object) => U): (param0: T, param1: T) => number;
    static comparing<T extends unknown, U extends unknown>(paramarg0: (param0: Object) => U, paramarg1: (param0: Object, param1: Object) => number): (param0: T, param1: T) => number;
    static comparingDouble<T extends unknown>(paramarg0: (param0: Object) => number): (param0: T, param1: T) => number;
    static comparingInt<T extends unknown>(paramarg0: (param0: Object) => number): (param0: T, param1: T) => number;
    static comparingLong<T extends unknown>(paramarg0: (param0: Object) => number): (param0: T, param1: T) => number;
    static getAvailableLocales(): Locale[];
    static getAvailableULocales(): ULocale[];
    static getDisplayName(paramarg0: ULocale): string;
    static getDisplayName(paramarg0: ULocale, paramarg1: ULocale): string;
    static getDisplayName(paramarg0: Locale): string;
    static getDisplayName(paramarg0: Locale, paramarg1: Locale): string;
    static getEquivalentReorderCodes(paramarg0: number): number[];
    static getFunctionalEquivalent(paramarg0: string, paramarg1: ULocale): ULocale;
    static getFunctionalEquivalent(paramarg0: string, paramarg1: ULocale, paramarg2: boolean[]): ULocale;
    static getInstance(): Collator;
    static getInstance(paramarg0: ULocale): Collator;
    static getInstance(paramarg0: Locale): Collator;
    static getKeywordValues(paramarg0: string): string[];
    static getKeywordValuesForLocale(paramarg0: string, paramarg1: ULocale, paramarg2: boolean): string[];
    static getKeywords(): string[];
    static naturalOrder<T extends Comparable<Object>>(): (param0: T, param1: T) => number;
    static nullsFirst<T extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: T, param1: T) => number;
    static nullsLast<T extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: T, param1: T) => number;
    static registerFactory(paramarg0: Collator$CollatorFactory): Object;
    static registerInstance(paramarg0: Collator, paramarg1: ULocale): Object;
    static reverseOrder<T extends Comparable<Object>>(): (param0: T, param1: T) => number;
    static unregister(paramarg0: Object): boolean;
    constructor()
    // private checkNotFrozen(): void;
    clone(): Collator;
    cloneAsThawed(): Collator;
    compare(arg0: Object, arg1: Object): number;
    compare(arg0: string, arg1: string): number;
    doCompare(arg0: CharSequence, arg1: CharSequence): number;
    equals(arg0: Object | null): boolean;
    equals(arg0: string, arg1: string): boolean;
    freeze(): Collator;
    getCollationKey(arg0: string): CollationKey;
    getDecomposition(): number;
    getLocale(arg0: ULocale$Type): ULocale;
    getMaxVariable(): number;
    getRawCollationKey(arg0: string, arg1: RawCollationKey): RawCollationKey;
    getReorderCodes(): number[];
    getStrength(): number;
    getTailoredSet(): string[];
    getUCAVersion(): VersionInfo;
    getVariableTop(): number;
    getVersion(): VersionInfo;
    hashCode(): number;
    isFrozen(): boolean;
    reversed(): (param0: Object, param1: Object) => number;
    setDecomposition(arg0: number): void;
    setLocale(arg0: ULocale, arg1: ULocale): void;
    setMaxVariable(arg0: number): Collator;
    setReorderCodes(...arg0: number[]): void;
    setStrength(arg0: number): void;
    setStrength2(arg0: number): Collator;
    setVariableTop(arg0: number): void;
    setVariableTop(arg0: string): number;
    thenComparing(arg0: (param0: Object, param1: Object) => number): (param0: Object, param1: Object) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: Object) => U): (param0: Object, param1: Object) => number;
    thenComparing<U extends unknown>(arg0: (param0: Object) => U, arg1: (param0: U, param1: U) => number): (param0: Object, param1: Object) => number;
    thenComparingDouble(arg0: (param0: Object) => number): (param0: Object, param1: Object) => number;
    thenComparingInt(arg0: (param0: Object) => number): (param0: Object, param1: Object) => number;
    thenComparingLong(arg0: (param0: Object) => number): (param0: Object, param1: Object) => number;
}