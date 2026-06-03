import type { MessagePattern } from '../../../../com/ibm/icu/text/MessagePattern.d.ts'
import type { NumberFormat } from '../../../../com/ibm/icu/text/NumberFormat.d.ts'
import type { PluralFormat$PluralSelectorAdapter } from '../../../../com/ibm/icu/text/PluralFormat$PluralSelectorAdapter.d.ts'
import type { PluralRules } from '../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { PluralRules$PluralType } from '../../../../com/ibm/icu/text/PluralRules$PluralType.d.ts'
import type { RbnfLenientScanner } from '../../../../com/ibm/icu/text/RbnfLenientScanner.d.ts'
import type { UFormat } from '../../../../com/ibm/icu/text/UFormat.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { FieldPosition } from '../../../../java/text/FieldPosition.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class PluralFormat extends UFormat {
    constructor()
    constructor(arg0: PluralRules)
    constructor(arg0: PluralRules, arg1: string)
    constructor(arg0: ULocale)
    constructor(arg0: ULocale, arg1: PluralRules)
    constructor(arg0: ULocale, arg1: PluralRules, arg2: string)
    constructor(arg0: ULocale, arg1: PluralRules$PluralType)
    constructor(arg0: ULocale, arg1: PluralRules$PluralType, arg2: string)
    constructor(arg0: ULocale, arg1: PluralRules$PluralType, arg2: string, arg3: NumberFormat)
    constructor(arg0: ULocale, arg1: string)
    constructor(arg0: Locale)
    constructor(arg0: Locale, arg1: PluralRules)
    constructor(arg0: Locale, arg1: PluralRules$PluralType)
    constructor(arg0: string)
    // private msgPattern: MessagePattern;
    readonly numberFormat: NumberFormat;
    // private offset: number;
    // private parsedValues: { [key: string]: string };
    // private pattern: string;
    // private pluralRules: PluralRules;
    // private pluralRulesWrapper: PluralFormat$PluralSelectorAdapter;
    // private ulocale: ULocale;
    applyPattern(arg0: string): void;
    equals(arg0: PluralFormat): boolean;
    equals(arg0: Object | null): boolean;
    format(arg0: Object): string;
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: number): string;
    // private format(arg0: Number, arg1: number): string;
    hashCode(): number;
    // private init(arg0: PluralRules, arg1: PluralRules$PluralType, arg2: ULocale, arg3: NumberFormat): void;
    parse(arg0: string, arg1: ParsePosition): Number;
    parseObject(arg0: string): Object;
    parseObject(arg0: string, arg1: ParsePosition): Object;
    parseType(arg0: string, arg1: RbnfLenientScanner, arg2: FieldPosition): string;
    // private readObject(arg0: ObjectInputStream): void;
    // private resetPattern(): void;
    setLocale(arg0: ULocale): void;
    setLocale(arg0: ULocale, arg1: ULocale): void;
    setNumberFormat(arg0: NumberFormat): void;
    toPattern(): string;
    toString(): string;
}