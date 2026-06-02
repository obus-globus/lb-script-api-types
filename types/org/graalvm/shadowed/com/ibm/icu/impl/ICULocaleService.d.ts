import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICUService } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService.d.ts'
import type { ICUService$Factory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService$Factory.d.ts'
import type { ICUService$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService$Key.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class ICULocaleService extends ICUService {
    constructor()
    constructor(name: string)
    // private fallbackLocale: ULocale;
    // private fallbackLocaleName: string;
    createKey(id: string): ICUService$Key;
    createKey(id: string, kind: number): ICUService$Key;
    createKey(l: ULocale, kind: number): ICUService$Key;
    get(locale: ULocale): Object;
    get(locale: ULocale, actualReturn: ULocale[]): Object;
    get(locale: ULocale, kind: number): Object;
    get(locale: ULocale, kind: number, actualReturn: ULocale[]): Object;
    getAvailableLocales(): Locale[];
    getAvailableULocales(): ULocale[];
    registerObject(obj: Object, locale: ULocale): ICUService$Factory;
    registerObject(obj: Object, locale: ULocale, visible: boolean): ICUService$Factory;
    registerObject(obj: Object, locale: ULocale, kind: number): ICUService$Factory;
    registerObject(obj: Object, locale: ULocale, kind: number, visible: boolean): ICUService$Factory;
    validateFallbackLocale(): string;
}