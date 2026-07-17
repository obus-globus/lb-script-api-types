import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BaseLocale } from '../../../../../com/ibm/icu/impl/locale/BaseLocale.d.ts'
import type { InternalLocaleBuilder$CaseInsensitiveChar } from '../../../../../com/ibm/icu/impl/locale/InternalLocaleBuilder$CaseInsensitiveChar.d.ts'
import type { InternalLocaleBuilder$CaseInsensitiveString } from '../../../../../com/ibm/icu/impl/locale/InternalLocaleBuilder$CaseInsensitiveString.d.ts'
import type { LanguageTag } from '../../../../../com/ibm/icu/impl/locale/LanguageTag.d.ts'
import type { LocaleExtensions } from '../../../../../com/ibm/icu/impl/locale/LocaleExtensions.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InternalLocaleBuilder extends Object {
    constructor()
    // private _extensions: JavaMap<InternalLocaleBuilder$CaseInsensitiveChar, string>;
    // private _language: string;
    // private _region: string;
    // private _script: string;
    // private _uattributes: InternalLocaleBuilder$CaseInsensitiveString[];
    // private _ukeywords: JavaMap<InternalLocaleBuilder$CaseInsensitiveString, string>;
    // private _variant: string;
    addUnicodeLocaleAttribute(arg0: string): InternalLocaleBuilder;
    // private checkVariants(arg0: string, arg1: string): number;
    clear(): InternalLocaleBuilder;
    clearExtensions(): InternalLocaleBuilder;
    getBaseLocale(): BaseLocale;
    getLocaleExtensions(): LocaleExtensions;
    removeUnicodeLocaleAttribute(arg0: string): InternalLocaleBuilder;
    setExtension(arg0: string, arg1: string): InternalLocaleBuilder;
    setExtensions(arg0: string): InternalLocaleBuilder;
    // private setExtensions(arg0: string[], arg1: string): InternalLocaleBuilder;
    setLanguage(arg0: string): InternalLocaleBuilder;
    setLanguageTag(arg0: LanguageTag): InternalLocaleBuilder;
    setLocale(arg0: BaseLocale, arg1: LocaleExtensions): InternalLocaleBuilder;
    setRegion(arg0: string): InternalLocaleBuilder;
    setScript(arg0: string): InternalLocaleBuilder;
    // private setUnicodeLocaleExtension(arg0: string): void;
    setUnicodeLocaleKeyword(arg0: string, arg1: string): InternalLocaleBuilder;
    setVariant(arg0: string): InternalLocaleBuilder;
}