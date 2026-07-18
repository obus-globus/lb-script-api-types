import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { PluralRules } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
import type { PluralRules$FixedDecimal } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$FixedDecimal.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class CurrencyPluralInfo extends Object implements Serializable, Cloneable {
    static getInstance(): CurrencyPluralInfo;
    static getInstance(paramlocale: Locale): CurrencyPluralInfo;
    static getInstance(paramlocale: ULocale): CurrencyPluralInfo;
    constructor()
    constructor(locale: Locale)
    constructor(locale: ULocale)
    // private pluralCountToCurrencyUnitPattern: JavaMap<string, string>;
    readonly pluralRules: PluralRules;
    // private ulocale: ULocale;
    clone(): Object;
    equals(a: Object | null): boolean;
    getCurrencyPluralPattern(pluralCount: string): string;
    getLocale(): ULocale;
    getPluralRules(): PluralRules;
    hashCode(): number;
    // private initialize(uloc: ULocale): void;
    pluralPatternIterator(): Iterator<string>;
    select(number: number): string;
    select(numberInfo: PluralRules$FixedDecimal): string;
    setCurrencyPluralPattern(pluralCount: string, pattern: string): void;
    setLocale(loc: ULocale): void;
    setPluralRules(ruleDescription: string): void;
    // private setupCurrencyPluralPattern(uloc: ULocale): void;
}