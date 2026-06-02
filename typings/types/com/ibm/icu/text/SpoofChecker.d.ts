import type { SpoofChecker$CheckResult } from '../../../../com/ibm/icu/text/SpoofChecker$CheckResult.d.ts'
import type { SpoofChecker$RestrictionLevel } from '../../../../com/ibm/icu/text/SpoofChecker$RestrictionLevel.d.ts'
import type { SpoofChecker$ScriptSet } from '../../../../com/ibm/icu/text/SpoofChecker$ScriptSet.d.ts'
import type { SpoofChecker$SpoofData } from '../../../../com/ibm/icu/text/SpoofChecker$SpoofData.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class SpoofChecker extends Object {
    static ALL_CHECKS: number;
    static ANY_CASE: number;
    static CHAR_LIMIT: number;
    static CONFUSABLE: number;
    static HIDDEN_OVERLAY: number;
    static INCLUSION: string[];
    static INVISIBLE: number;
    static MIXED_NUMBERS: number;
    static MIXED_SCRIPT_CONFUSABLE: number;
    static RECOMMENDED: string[];
    static RESTRICTION_LEVEL: number;
    static SINGLE_SCRIPT: number;
    static SINGLE_SCRIPT_CONFUSABLE: number;
    static WHOLE_SCRIPT_CONFUSABLE: number;
    private constructor()
    // private fAllowedCharsSet: string[];
    // private fAllowedLocales: ULocale[];
    // private fChecks: number;
    // private fRestrictionLevel: SpoofChecker$RestrictionLevel;
    // private fSpoofData: SpoofChecker$SpoofData;
    areConfusable(arg0: number, arg1: CharSequence, arg2: CharSequence): number;
    areConfusable(arg0: string, arg1: string): number;
    equals(arg0: Object | null): boolean;
    failsChecks(arg0: string): boolean;
    failsChecks(arg0: string, arg1: SpoofChecker$CheckResult): boolean;
    findHiddenOverlay(arg0: string): number;
    getAllowedChars(): string[];
    getAllowedJavaLocales(): Locale[];
    getAllowedLocales(): ULocale[];
    getBidiSkeleton(arg0: number, arg1: CharSequence): string;
    getChecks(): number;
    // private getNumerics(arg0: string, arg1: string[]): void;
    // private getResolvedScriptSet(arg0: CharSequence, arg1: SpoofChecker$ScriptSet): void;
    // private getResolvedScriptSetWithout(arg0: CharSequence, arg1: number, arg2: SpoofChecker$ScriptSet): void;
    getRestrictionLevel(): SpoofChecker$RestrictionLevel;
    // private getRestrictionLevel(arg0: string): SpoofChecker$RestrictionLevel;
    getSkeleton(arg0: CharSequence): string;
    getSkeleton(arg0: number, arg1: string): string;
    hashCode(): number;
    isIllegalCombiningDotLeadCharacter(arg0: number, arg1: StringBuilder): boolean;
    isIllegalCombiningDotLeadCharacterNoLookup(arg0: number): boolean;
}