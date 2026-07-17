import type { Matcher } from '../../../../../../java/util/regex/Matcher.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class UTS35Validator extends Object {
    static getVariants(parammatcher: Matcher): string[];
    static isAlpha(paramc: string): boolean;
    static isAlphanum(paramc: string): boolean;
    static isDigit(paramc: string): boolean;
    static isStructurallyValidLanguageId(paramlanguageId: string): boolean;
    static isStructurallyValidLanguageSubtag(paramlanguage: string): boolean;
    static isStructurallyValidRegionSubtag(paramregion: string): boolean;
    static isStructurallyValidScriptSubtag(paramscript: string): boolean;
    static isStructurallyValidType(paramtype: string): boolean;
    static isStructurallyValidVariantSubtag(paramvariant: string): boolean;
    static isWellFormedUnicodeBCP47LocaleIdentifier(paramlanguageTag: string): boolean;
    static wellFormedUnicodeBCP47LocaleIdentifierMatcher(paramlanguageTag: string): Matcher;
    private constructor()
}