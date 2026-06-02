import type { InternalLocaleBuilder } from '../../../../com/ibm/icu/impl/locale/InternalLocaleBuilder.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ULocale$Builder extends Object {
    constructor()
    // private _locbld: InternalLocaleBuilder;
    addUnicodeLocaleAttribute(arg0: string): ULocale$Builder;
    build(): ULocale;
    clear(): ULocale$Builder;
    clearExtensions(): ULocale$Builder;
    removeUnicodeLocaleAttribute(arg0: string): ULocale$Builder;
    setExtension(arg0: string, arg1: string): ULocale$Builder;
    setLanguage(arg0: string): ULocale$Builder;
    setLanguageTag(arg0: string): ULocale$Builder;
    setLocale(arg0: ULocale): ULocale$Builder;
    setRegion(arg0: string): ULocale$Builder;
    setScript(arg0: string): ULocale$Builder;
    setUnicodeLocaleKeyword(arg0: string, arg1: string): ULocale$Builder;
    setVariant(arg0: string): ULocale$Builder;
}