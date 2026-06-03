import type { ICUService } from '../../../../com/ibm/icu/impl/ICUService.d.ts'
import type { ICUService$Factory } from '../../../../com/ibm/icu/impl/ICUService$Factory.d.ts'
import type { ICUService$Key } from '../../../../com/ibm/icu/impl/ICUService$Key.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ICULocaleService extends ICUService {
    constructor()
    constructor(arg0: string)
    // private fallbackLocale: ULocale;
    // private fallbackLocaleName: string;
    createKey(arg0: ULocale, arg1: number): ICUService$Key;
    createKey(arg0: string): ICUService$Key;
    createKey(arg0: string, arg1: number): ICUService$Key;
    get(arg0: ULocale): Object;
    get(arg0: ULocale, arg1: ULocale[]): Object;
    get(arg0: ULocale, arg1: number): Object;
    get(arg0: ULocale, arg1: number, arg2: ULocale[]): Object;
    get(arg0: string): Object;
    get(arg0: string, arg1: string[]): Object;
    getAvailableLocales(): Locale[];
    getAvailableULocales(): ULocale[];
    registerObject(arg0: Object, arg1: ULocale): ICUService$Factory;
    registerObject(arg0: Object, arg1: ULocale, arg2: boolean): ICUService$Factory;
    registerObject(arg0: Object, arg1: ULocale, arg2: number): ICUService$Factory;
    registerObject(arg0: Object, arg1: ULocale, arg2: number, arg3: boolean): ICUService$Factory;
    registerObject(arg0: Object, arg1: string): ICUService$Factory;
    registerObject(arg0: Object, arg1: string, arg2: boolean): ICUService$Factory;
    validateFallbackLocale(): string;
}