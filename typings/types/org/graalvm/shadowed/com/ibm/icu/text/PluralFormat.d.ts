import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { FieldPosition } from '../../../../../../../java/text/FieldPosition.d.ts'
import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
import type { MessagePattern } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MessagePattern.d.ts'
import type { NumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat.d.ts'
import type { PluralFormat$PluralSelectorAdapter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralFormat$PluralSelectorAdapter.d.ts'
import type { PluralRules } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
import type { PluralRules$PluralType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$PluralType.d.ts'
import type { RbnfLenientScanner } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RbnfLenientScanner.d.ts'
import type { UFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UFormat.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class PluralFormat extends UFormat {
    constructor()
    constructor(locale: Locale)
    constructor(locale: Locale, rules: PluralRules)
    constructor(locale: Locale, type: PluralRules$PluralType)
    constructor(pattern: string)
    constructor(rules: PluralRules)
    constructor(rules: PluralRules, pattern: string)
    constructor(ulocale: ULocale)
    constructor(ulocale: ULocale, pattern: string)
    constructor(ulocale: ULocale, rules: PluralRules)
    constructor(ulocale: ULocale, rules: PluralRules, pattern: string)
    constructor(ulocale: ULocale, type: PluralRules$PluralType)
    constructor(ulocale: ULocale, type: PluralRules$PluralType, pattern: string)
    constructor(ulocale: ULocale, type: PluralRules$PluralType, pattern: string, numberFormat: NumberFormat)
    // private msgPattern: MessagePattern;
    readonly numberFormat: NumberFormat;
    // private offset: number;
    // private parsedValues: { [key: string]: string };
    // private pattern: string;
    // private pluralRules: PluralRules;
    // private pluralRulesWrapper: PluralFormat$PluralSelectorAdapter;
    // private ulocale: ULocale;
    applyPattern(pattern: string): void;
    equals(rhs: Object | null): boolean;
    equals(rhs: PluralFormat): boolean;
    format(number: Object, toAppendTo: StringBuffer, pos: FieldPosition): StringBuffer;
    format(number: number): string;
    // private format(numberObject: Number, number: number): string;
    hashCode(): number;
    // private init(rules: PluralRules, type: PluralRules$PluralType, locale: ULocale, numberFormat: NumberFormat): void;
    parse(text: string, parsePosition: ParsePosition): Number;
    parseObject(source: string, pos: ParsePosition): Object;
    parseType(source: string, scanner: RbnfLenientScanner, pos: FieldPosition): string;
    // private readObject(in_: ObjectInputStream): void;
    // private resetPattern(): void;
    setLocale(ulocale: ULocale): void;
    setNumberFormat(format: NumberFormat): void;
    toPattern(): string;
    toString(): string;
}