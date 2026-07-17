import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LSR } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/LSR.d.ts'
import type { LocaleMatcher$Builder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/LocaleMatcher$Builder.d.ts'
import type { LocaleMatcher$Direction } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/LocaleMatcher$Direction.d.ts'
import type { LocaleMatcher$FavorSubtag } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/LocaleMatcher$FavorSubtag.d.ts'
import type { LocaleMatcher$LocaleLsrIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/LocaleMatcher$LocaleLsrIterator.d.ts'
import type { LocaleMatcher$LsrIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/LocaleMatcher$LsrIterator.d.ts'
import type { LocaleMatcher$Result } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/LocaleMatcher$Result.d.ts'
import type { LocaleMatcher$ULocaleLsrIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/LocaleMatcher$ULocaleLsrIterator.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class LocaleMatcher extends Object {
    static builder(): LocaleMatcher$Builder;
    constructor(supportedLocales: string)
    constructor(supportedLocales: ULocale[])
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
    canonicalize(locale: ULocale): ULocale;
    // private defaultResult(): LocaleMatcher$Result;
    getBestLocale(desiredLocale: Locale): Locale;
    getBestLocale(desiredLocales: Locale[]): Locale;
    getBestLocaleResult(desiredLocale: Locale): LocaleMatcher$Result;
    getBestLocaleResult(desiredLocales: Locale[]): LocaleMatcher$Result;
    getBestMatch(desiredLocaleList: string): ULocale;
    getBestMatch(desiredLocales: ULocale[]): ULocale;
    getBestMatch(desiredLocale: ULocale): ULocale;
    getBestMatchResult(desiredLocales: ULocale[]): LocaleMatcher$Result;
    getBestMatchResult(desiredLocale: ULocale): LocaleMatcher$Result;
    // private getBestSuppIndex(desiredLSR: LSR, remainingIter: LocaleMatcher$LsrIterator): number;
    isMatch(desired: Locale, supported: Locale): boolean;
    isMatch(desired: ULocale, supported: ULocale): boolean;
    // private makeResult(desiredLocale: Locale, lsrIter: LocaleMatcher$LocaleLsrIterator, suppIndex: number): LocaleMatcher$Result;
    // private makeResult(desiredLocale: ULocale, lsrIter: LocaleMatcher$ULocaleLsrIterator, suppIndex: number): LocaleMatcher$Result;
    match(desired: ULocale, desiredMax: ULocale, supported: ULocale, supportedMax: ULocale): number;
    // private putIfAbsent(lsr: LSR, i: number, suppLength: number): number;
    toString(): string;
}