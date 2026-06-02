import type { SpoofChecker } from '../../../../com/ibm/icu/text/SpoofChecker.d.ts'
import type { SpoofChecker$RestrictionLevel } from '../../../../com/ibm/icu/text/SpoofChecker$RestrictionLevel.d.ts'
import type { SpoofChecker$SpoofData } from '../../../../com/ibm/icu/text/SpoofChecker$SpoofData.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SpoofChecker$Builder extends Object {
    constructor()
    constructor(arg0: SpoofChecker)
    // private fAllowedCharsSet: string[];
    // private fAllowedLocales: ULocale[];
    // private fChecks: number;
    // private fRestrictionLevel: SpoofChecker$RestrictionLevel;
    // private fSpoofData: SpoofChecker$SpoofData;
    // private addScriptChars(arg0: ULocale, arg1: string[]): void;
    build(): SpoofChecker;
    setAllowedChars(arg0: string[]): SpoofChecker$Builder;
    setAllowedJavaLocales(arg0: Locale[]): SpoofChecker$Builder;
    setAllowedLocales(arg0: ULocale[]): SpoofChecker$Builder;
    setChecks(arg0: number): SpoofChecker$Builder;
    setData(arg0: Reader): SpoofChecker$Builder;
    setData(arg0: Reader, arg1: Reader): SpoofChecker$Builder;
    setRestrictionLevel(arg0: SpoofChecker$RestrictionLevel): SpoofChecker$Builder;
}