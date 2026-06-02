import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { SpoofChecker$CheckResult } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/SpoofChecker$CheckResult.d.ts'
import type { SpoofChecker$RestrictionLevel } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/SpoofChecker$RestrictionLevel.d.ts'
import type { SpoofChecker$ScriptSet } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/SpoofChecker$ScriptSet.d.ts'
import type { SpoofChecker$SpoofData } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/SpoofChecker$SpoofData.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
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
    areConfusable(direction: number, s1: CharSequence, s2: CharSequence): number;
    areConfusable(s1: string, s2: string): number;
    equals(other: Object | null): boolean;
    failsChecks(text: string): boolean;
    failsChecks(text: string, checkResult: SpoofChecker$CheckResult): boolean;
    findHiddenOverlay(input: string): number;
    getAllowedChars(): string[];
    getAllowedJavaLocales(): Locale[];
    getAllowedLocales(): ULocale[];
    getBidiSkeleton(direction: number, str: CharSequence): string;
    getChecks(): number;
    // private getNumerics(input: string, result: string[]): void;
    // private getResolvedScriptSet(input: CharSequence, result: SpoofChecker$ScriptSet): void;
    // private getResolvedScriptSetWithout(input: CharSequence, script: number, result: SpoofChecker$ScriptSet): void;
    getRestrictionLevel(): SpoofChecker$RestrictionLevel;
    // private getRestrictionLevel(input: string): SpoofChecker$RestrictionLevel;
    getSkeleton(str: CharSequence): string;
    getSkeleton(type: number, id: string): string;
    hashCode(): number;
    isIllegalCombiningDotLeadCharacter(cp: number, sb: StringBuilder): boolean;
    isIllegalCombiningDotLeadCharacterNoLookup(cp: number): boolean;
}