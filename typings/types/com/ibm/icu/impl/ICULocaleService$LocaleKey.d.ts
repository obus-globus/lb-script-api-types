import type { ICUService$Key } from '../../../../com/ibm/icu/impl/ICUService$Key.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
export class ICULocaleService$LocaleKey extends ICUService$Key {
    static KIND_ANY: number;
    static createWithCanonical(paramarg0: ULocale, paramarg1: string, paramarg2: number): ICULocaleService$LocaleKey;
    static createWithCanonicalFallback(paramarg0: string, paramarg1: string): ICULocaleService$LocaleKey;
    static createWithCanonicalFallback(paramarg0: string, paramarg1: string, paramarg2: number): ICULocaleService$LocaleKey;
    constructor(arg0: string, arg1: string, arg2: string, arg3: number)
    // private currentID: string;
    // private fallbackID: string;
    // private kind: number;
    // private primaryID: string;
    // private varstart: number;
    canonicalID(): string;
    canonicalLocale(): ULocale;
    currentDescriptor(): string;
    currentID(): string;
    currentLocale(): ULocale;
    fallback(): boolean;
    isFallbackOf(arg0: string): boolean;
    kind(): number;
    prefix(): string;
}