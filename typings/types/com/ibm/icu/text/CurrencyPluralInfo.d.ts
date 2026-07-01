import type { PluralRules } from '../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { PluralRules$FixedDecimal } from '../../../../com/ibm/icu/text/PluralRules$FixedDecimal.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class CurrencyPluralInfo extends Object implements Serializable, Cloneable {
    static getInstance(): CurrencyPluralInfo;
    static getInstance(paramarg0: ULocale): CurrencyPluralInfo;
    static getInstance(paramarg0: Locale): CurrencyPluralInfo;
    constructor()
    constructor(arg0: ULocale)
    constructor(arg0: Locale)
    // private pluralCountToCurrencyUnitPattern: { [key: string]: string };
    readonly pluralRules: PluralRules;
    // private ulocale: ULocale;
    clone(): CurrencyPluralInfo;
    equals(arg0: Object | null): boolean;
    getCurrencyPluralPattern(arg0: string): string;
    getLocale(): ULocale;
    getPluralRules(): PluralRules;
    hashCode(): number;
    // private initialize(arg0: ULocale): void;
    pluralPatternIterator(): Iterator<string>;
    select(arg0: PluralRules$FixedDecimal): string;
    select(arg0: number): string;
    setCurrencyPluralPattern(arg0: string, arg1: string): void;
    setLocale(arg0: ULocale): void;
    setPluralRules(arg0: string): void;
    // private setupCurrencyPluralPattern(arg0: ULocale): void;
}