import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { InternalLocaleBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/InternalLocaleBuilder.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class ULocale$Builder extends Object {
    constructor()
    // private _locbld: InternalLocaleBuilder;
    addUnicodeLocaleAttribute(attribute: string): ULocale$Builder;
    build(): ULocale;
    clear(): ULocale$Builder;
    clearExtensions(): ULocale$Builder;
    removeUnicodeLocaleAttribute(attribute: string): ULocale$Builder;
    setExtension(key: string, value: string): ULocale$Builder;
    setLanguage(language: string): ULocale$Builder;
    setLanguageTag(languageTag: string): ULocale$Builder;
    setLocale(locale: ULocale): ULocale$Builder;
    setRegion(region: string): ULocale$Builder;
    setScript(script: string): ULocale$Builder;
    setUnicodeLocaleKeyword(key: string, type: string): ULocale$Builder;
    setVariant(variant: string): ULocale$Builder;
}