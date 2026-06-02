import type { ICUService$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService$Key.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class ICULocaleService$LocaleKey extends ICUService$Key {
    static KIND_ANY: number;
    static createWithCanonical(paramlocale: ULocale, paramcanonicalFallbackID: string, paramkind: number): ICULocaleService$LocaleKey;
    static createWithCanonicalFallback(paramprimaryID: string, paramcanonicalFallbackID: string): ICULocaleService$LocaleKey;
    static createWithCanonicalFallback(paramprimaryID: string, paramcanonicalFallbackID: string, paramkind: number): ICULocaleService$LocaleKey;
    constructor(primaryID: string, canonicalPrimaryID: string, canonicalFallbackID: string, kind: number)
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
    isFallbackOf(id: string): boolean;
    kind(): number;
    prefix(): string;
}