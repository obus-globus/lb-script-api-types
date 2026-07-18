import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class UTS35Validator extends Object {
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
    private constructor()
}