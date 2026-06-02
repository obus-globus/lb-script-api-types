import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BaseLocale } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/BaseLocale.d.ts'
import type { LocaleExtensions } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/LocaleExtensions.d.ts'
import type { ParseStatus } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/ParseStatus.d.ts'
import type { StringTokenIterator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/StringTokenIterator.d.ts'
export class LanguageTag extends Object {
    static PRIVATEUSE: string;
    static PRIVUSE_VARIANT_PREFIX: string;
    static SEP: string;
    static UNDETERMINED: string;
    static canonicalizeExtension(params: string): string;
    static canonicalizeExtensionSingleton(params: string): string;
    static canonicalizeExtensionSubtag(params: string): string;
    static canonicalizeExtlang(params: string): string;
    static canonicalizeLanguage(params: string): string;
    static canonicalizePrivateuse(params: string): string;
    static canonicalizePrivateuseSubtag(params: string): string;
    static canonicalizeRegion(params: string): string;
    static canonicalizeScript(params: string): string;
    static canonicalizeVariant(params: string): string;
    static isExtensionSingleton(params: string): boolean;
    static isExtensionSingletonChar(paramc: string): boolean;
    static isExtensionSubtag(params: string): boolean;
    static isExtlang(params: string): boolean;
    static isLanguage(params: string): boolean;
    static isPrivateusePrefix(params: string): boolean;
    static isPrivateusePrefixChar(paramc: string): boolean;
    static isPrivateuseSubtag(params: string): boolean;
    static isRegion(params: string): boolean;
    static isScript(params: string): boolean;
    static isTKey(params: string): boolean;
    static isVariant(params: string): boolean;
    static parse(paramlanguageTag: string, paramsts: ParseStatus): LanguageTag;
    static parseLocale(parambaseLocale: BaseLocale, paramlocaleExtensions: LocaleExtensions): LanguageTag;
    private constructor()
    // private _extensions: string[];
    // private _extlangs: string[];
    // private _language: string;
    // private _privateuse: string;
    // private _region: string;
    // private _script: string;
    // private _variants: string[];
    getExtensions(): string[];
    getExtlangs(): string[];
    getLanguage(): string;
    getPrivateuse(): string;
    getRegion(): string;
    getScript(): string;
    getVariants(): string[];
    // private parseExtensions(itr: StringTokenIterator, sts: ParseStatus): boolean;
    // private parseExtlangs(itr: StringTokenIterator, sts: ParseStatus): boolean;
    // private parseLanguage(itr: StringTokenIterator, sts: ParseStatus): boolean;
    // private parsePrivateuse(itr: StringTokenIterator, sts: ParseStatus): boolean;
    // private parseRegion(itr: StringTokenIterator, sts: ParseStatus): boolean;
    // private parseScript(itr: StringTokenIterator, sts: ParseStatus): boolean;
    // private parseVariants(itr: StringTokenIterator, sts: ParseStatus): boolean;
    toString(): string;
}