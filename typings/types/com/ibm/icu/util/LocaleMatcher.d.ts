import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { LSR } from '../../../../com/ibm/icu/impl/locale/LSR.d.ts'
import type { LocaleMatcher$Builder } from '../../../../com/ibm/icu/util/LocaleMatcher$Builder.d.ts'
import type { LocaleMatcher$Direction } from '../../../../com/ibm/icu/util/LocaleMatcher$Direction.d.ts'
import type { LocaleMatcher$FavorSubtag } from '../../../../com/ibm/icu/util/LocaleMatcher$FavorSubtag.d.ts'
import type { LocaleMatcher$LocaleLsrIterator } from '../../../../com/ibm/icu/util/LocaleMatcher$LocaleLsrIterator.d.ts'
import type { LocaleMatcher$LsrIterator } from '../../../../com/ibm/icu/util/LocaleMatcher$LsrIterator.d.ts'
import type { LocaleMatcher$Result } from '../../../../com/ibm/icu/util/LocaleMatcher$Result.d.ts'
import type { LocaleMatcher$ULocaleLsrIterator } from '../../../../com/ibm/icu/util/LocaleMatcher$ULocaleLsrIterator.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocaleMatcher extends Object {
    static builder(): LocaleMatcher$Builder;
    constructor(arg0: ULocale[])
    constructor(arg0: string)
    // private defaultLocale: Locale;
    // private defaultULocale: ULocale;
    // private demotionPerDesiredLocale: number;
    // private direction: LocaleMatcher$Direction;
    // private favorSubtag: LocaleMatcher$FavorSubtag;
    // private supportedIndexes: number[];
    // private supportedLSRs: LSR[];
    // private supportedLSRsLength: number;
    // private supportedLocales: Locale[];
    // private supportedLsrToIndex: JavaMap<LSR, number>;
    // private supportedULocales: ULocale[];
    // private thresholdDistance: number;
    canonicalize(arg0: ULocale): ULocale;
    // private defaultResult(): LocaleMatcher$Result;
    getBestLocale(arg0: Locale): Locale;
    getBestLocale(arg0: Locale[]): Locale;
    getBestLocaleResult(arg0: Locale): LocaleMatcher$Result;
    getBestLocaleResult(arg0: Locale[]): LocaleMatcher$Result;
    getBestMatch(arg0: ULocale): ULocale;
    getBestMatch(arg0: string): ULocale;
    getBestMatch(arg0: ULocale[]): ULocale;
    getBestMatchResult(arg0: ULocale): LocaleMatcher$Result;
    getBestMatchResult(arg0: ULocale[]): LocaleMatcher$Result;
    // private getBestSuppIndex(arg0: LSR, arg1: LocaleMatcher$LsrIterator): number;
    isMatch(arg0: ULocale, arg1: ULocale): boolean;
    isMatch(arg0: Locale, arg1: Locale): boolean;
    // private makeResult(arg0: ULocale, arg1: LocaleMatcher$ULocaleLsrIterator, arg2: number): LocaleMatcher$Result;
    // private makeResult(arg0: Locale, arg1: LocaleMatcher$LocaleLsrIterator, arg2: number): LocaleMatcher$Result;
    match(arg0: ULocale, arg1: ULocale, arg2: ULocale, arg3: ULocale): number;
    // private putIfAbsent(arg0: LSR, arg1: number, arg2: number): number;
    toString(): string;
}