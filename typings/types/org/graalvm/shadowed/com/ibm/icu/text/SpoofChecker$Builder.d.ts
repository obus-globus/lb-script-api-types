import type { Reader } from '../../../../../../../java/io/Reader.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SpoofChecker } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/SpoofChecker.d.ts'
import type { SpoofChecker$RestrictionLevel } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/SpoofChecker$RestrictionLevel.d.ts'
import type { SpoofChecker$SpoofData } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/SpoofChecker$SpoofData.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class SpoofChecker$Builder extends Object {
    constructor()
    constructor(src: SpoofChecker)
    // private fAllowedCharsSet: string[];
    // private fAllowedLocales: ULocale[];
    // private fChecks: number;
    // private fRestrictionLevel: SpoofChecker$RestrictionLevel;
    // private fSpoofData: SpoofChecker$SpoofData;
    // private addScriptChars(locale: ULocale, allowedChars: string[]): void;
    build(): SpoofChecker;
    setAllowedChars(chars: string[]): SpoofChecker$Builder;
    setAllowedJavaLocales(locales: Locale[]): SpoofChecker$Builder;
    setAllowedLocales(locales: ULocale[]): SpoofChecker$Builder;
    setChecks(checks: number): SpoofChecker$Builder;
    setData(confusables: Reader): SpoofChecker$Builder;
    setData(confusables: Reader, confusablesWholeScript: Reader): SpoofChecker$Builder;
    setRestrictionLevel(restrictionLevel: SpoofChecker$RestrictionLevel): SpoofChecker$Builder;
}