import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BaseLocale } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/BaseLocale.d.ts'
import type { InternalLocaleBuilder$CaseInsensitiveChar } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/InternalLocaleBuilder$CaseInsensitiveChar.d.ts'
import type { InternalLocaleBuilder$CaseInsensitiveString } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/InternalLocaleBuilder$CaseInsensitiveString.d.ts'
import type { LanguageTag } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/LanguageTag.d.ts'
import type { LocaleExtensions } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/LocaleExtensions.d.ts'
export class InternalLocaleBuilder extends Object {
    constructor()
    // private _extensions: Map<InternalLocaleBuilder$CaseInsensitiveChar, string>;
    // private _language: string;
    // private _region: string;
    // private _script: string;
    // private _uattributes: InternalLocaleBuilder$CaseInsensitiveString[];
    // private _ukeywords: Map<InternalLocaleBuilder$CaseInsensitiveString, string>;
    // private _variant: string;
    addUnicodeLocaleAttribute(attribute: string): InternalLocaleBuilder;
    // private checkVariants(variants: string, sep: string): number;
    clear(): InternalLocaleBuilder;
    clearExtensions(): InternalLocaleBuilder;
    getBaseLocale(): BaseLocale;
    getLocaleExtensions(): LocaleExtensions;
    removeUnicodeLocaleAttribute(attribute: string): InternalLocaleBuilder;
    setExtension(singleton: string, value: string): InternalLocaleBuilder;
    setExtensions(subtags: string): InternalLocaleBuilder;
    // private setExtensions(bcpExtensions: string[], privateuse: string): InternalLocaleBuilder;
    setLanguage(language: string): InternalLocaleBuilder;
    setLanguageTag(langtag: LanguageTag): InternalLocaleBuilder;
    setLocale(base: BaseLocale, extensions: LocaleExtensions): InternalLocaleBuilder;
    setRegion(region: string): InternalLocaleBuilder;
    setScript(script: string): InternalLocaleBuilder;
    // private setUnicodeLocaleExtension(subtags: string): void;
    setUnicodeLocaleKeyword(key: string, type: string): InternalLocaleBuilder;
    setVariant(variant: string): InternalLocaleBuilder;
}