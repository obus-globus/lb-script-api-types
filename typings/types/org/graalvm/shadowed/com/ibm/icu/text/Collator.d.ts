import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
import type { CollationKey } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CollationKey.d.ts'
import type { Collator$CollatorFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Collator$CollatorFactory.d.ts'
import type { RawCollationKey } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RawCollationKey.d.ts'
import type { Freezable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Freezable.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$Type } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale$Type.d.ts'
import type { VersionInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/VersionInfo.d.ts'
export abstract class Collator extends Object implements Comparator<Object>, Cloneable, Freezable<Collator> {
    static CANONICAL_DECOMPOSITION: number;
    static FULL_DECOMPOSITION: number;
    static IDENTICAL: number;
    static NO_DECOMPOSITION: number;
    static PRIMARY: number;
    static QUATERNARY: number;
    static SECONDARY: number;
    static TERTIARY: number;
    static comparing(paramarg0: (param0: Object) => Object | null): (param0: Object | null, param1: Object | null) => number;
    static comparing(paramarg0: (param0: Object) => Object | null, paramarg1: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingDouble(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingInt(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingLong(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static getAvailableLocales(): Locale[];
    static getAvailableULocales(): ULocale[];
    static getDisplayName(paramobjectLocale: Locale): string;
    static getDisplayName(paramobjectLocale: Locale, paramdisplayLocale: Locale): string;
    static getDisplayName(paramobjectLocale: ULocale): string;
    static getDisplayName(paramobjectLocale: ULocale, paramdisplayLocale: ULocale): string;
    static getEquivalentReorderCodes(paramreorderCode: number): number[];
    static getFunctionalEquivalent(paramkeyword: string, paramlocID: ULocale): ULocale;
    static getFunctionalEquivalent(paramkeyword: string, paramlocID: ULocale, paramisAvailable: boolean[]): ULocale;
    static getInstance(): Collator;
    static getInstance(paramlocale: Locale): Collator;
    static getInstance(paramlocale: ULocale): Collator;
    static getKeywordValues(paramkeyword: string): string[];
    static getKeywordValuesForLocale(paramkey: string, paramlocale: ULocale, paramcommonlyUsed: boolean): string[];
    static getKeywords(): string[];
    static naturalOrder(): (param0: Object | null, param1: Object | null) => number;
    static nullsFirst(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static nullsLast(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static registerFactory(paramfactory: Collator$CollatorFactory): Object;
    static registerInstance(paramcollator: Collator, paramlocale: ULocale): Object;
    static reverseOrder(): (param0: Object | null, param1: Object | null) => number;
    static unregister(paramregistryKey: Object): boolean;
    constructor()
    // private checkNotFrozen(): void;
    clone(): Object;
    cloneAsThawed(): Collator;
    compare(source: Object, target: Object): number;
    compare(source: string, target: string): number;
    doCompare(left: CharSequence, right: CharSequence): number;
    equals(obj: Object | null): boolean;
    equals(source: string, target: string): boolean;
    freeze(): Collator;
    getCollationKey(source: string): CollationKey;
    getDecomposition(): number;
    getLocale(type: ULocale$Type): ULocale;
    getMaxVariable(): number;
    getRawCollationKey(source: string, key: RawCollationKey): RawCollationKey;
    getReorderCodes(): number[];
    getStrength(): number;
    getTailoredSet(): string[];
    getUCAVersion(): VersionInfo;
    getVariableTop(): number;
    getVersion(): VersionInfo;
    hashCode(): number;
    isFrozen(): boolean;
    reversed(): (param0: Object, param1: Object) => number;
    setDecomposition(decomposition: number): void;
    setLocale(valid: ULocale, actual: ULocale): void;
    setMaxVariable(group: number): Collator;
    setReorderCodes(...order: number[]): void;
    setStrength(newStrength: number): void;
    setStrength2(newStrength: number): Collator;
    setVariableTop(varTop: number): void;
    setVariableTop(varTop: string): number;
    thenComparing(arg0: (param0: Object, param1: Object) => number): (param0: Object, param1: Object) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: Object) => U): (param0: Object, param1: Object) => number;
    thenComparing<U extends unknown>(arg0: (param0: Object) => U, arg1: (param0: U, param1: U) => number): (param0: Object, param1: Object) => number;
    thenComparingDouble(arg0: (param0: Object) => number): (param0: Object, param1: Object) => number;
    thenComparingInt(arg0: (param0: Object) => number): (param0: Object, param1: Object) => number;
    thenComparingLong(arg0: (param0: Object) => number): (param0: Object, param1: Object) => number;
}