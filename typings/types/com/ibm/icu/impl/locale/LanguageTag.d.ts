import type { BaseLocale } from '../../../../../com/ibm/icu/impl/locale/BaseLocale.d.ts'
import type { LocaleExtensions } from '../../../../../com/ibm/icu/impl/locale/LocaleExtensions.d.ts'
import type { ParseStatus } from '../../../../../com/ibm/icu/impl/locale/ParseStatus.d.ts'
import type { StringTokenIterator } from '../../../../../com/ibm/icu/impl/locale/StringTokenIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LanguageTag extends Object {
    static PRIVATEUSE: string;
    static PRIVUSE_VARIANT_PREFIX: string;
    static SEP: string;
    static UNDETERMINED: string;
    static canonicalizeExtension(paramarg0: string): string;
    static canonicalizeExtensionSingleton(paramarg0: string): string;
    static canonicalizeExtensionSubtag(paramarg0: string): string;
    static canonicalizeExtlang(paramarg0: string): string;
    static canonicalizeLanguage(paramarg0: string): string;
    static canonicalizePrivateuse(paramarg0: string): string;
    static canonicalizePrivateuseSubtag(paramarg0: string): string;
    static canonicalizeRegion(paramarg0: string): string;
    static canonicalizeScript(paramarg0: string): string;
    static canonicalizeVariant(paramarg0: string): string;
    static isExtensionSingleton(paramarg0: string): boolean;
    static isExtensionSingletonChar(paramarg0: string): boolean;
    static isExtensionSubtag(paramarg0: string): boolean;
    static isExtlang(paramarg0: string): boolean;
    static isLanguage(paramarg0: string): boolean;
    static isPrivateusePrefix(paramarg0: string): boolean;
    static isPrivateusePrefixChar(paramarg0: string): boolean;
    static isPrivateuseSubtag(paramarg0: string): boolean;
    static isRegion(paramarg0: string): boolean;
    static isScript(paramarg0: string): boolean;
    static isTKey(paramarg0: string): boolean;
    static isVariant(paramarg0: string): boolean;
    static parse(paramarg0: string, paramarg1: ParseStatus): LanguageTag;
    static parseLocale(paramarg0: BaseLocale, paramarg1: LocaleExtensions): LanguageTag;
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
    // private parseExtensions(arg0: StringTokenIterator, arg1: ParseStatus): boolean;
    // private parseExtlangs(arg0: StringTokenIterator, arg1: ParseStatus): boolean;
    // private parseLanguage(arg0: StringTokenIterator, arg1: ParseStatus): boolean;
    // private parsePrivateuse(arg0: StringTokenIterator, arg1: ParseStatus): boolean;
    // private parseRegion(arg0: StringTokenIterator, arg1: ParseStatus): boolean;
    // private parseScript(arg0: StringTokenIterator, arg1: ParseStatus): boolean;
    // private parseVariants(arg0: StringTokenIterator, arg1: ParseStatus): boolean;
    toString(): string;
}