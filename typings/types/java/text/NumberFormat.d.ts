import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { StringBuffer } from '../../java/lang/StringBuffer.d.ts'
import type { RoundingMode } from '../../java/math/RoundingMode.d.ts'
import type { FieldPosition } from '../../java/text/FieldPosition.d.ts'
import type { Format } from '../../java/text/Format.d.ts'
import type { Format$StringBuf } from '../../java/text/Format$StringBuf.d.ts'
import type { NumberFormat$Style } from '../../java/text/NumberFormat$Style.d.ts'
import type { ParsePosition } from '../../java/text/ParsePosition.d.ts'
import type { Currency } from '../../java/util/Currency.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Number } from '../../java/lang/Number.d.ts'
export abstract class NumberFormat extends Format {
    static FRACTION_FIELD: number;
    static INTEGER_FIELD: number;
    static getAvailableLocales(): (Object | null)[];
    static getCompactNumberInstance(): NumberFormat;
    static getCompactNumberInstance(paramarg0: Locale, paramarg1: NumberFormat$Style): NumberFormat;
    static getCurrencyInstance(): NumberFormat;
    static getCurrencyInstance(paramarg0: Locale): NumberFormat;
    static getInstance(): NumberFormat;
    static getInstance(paramarg0: Locale): NumberFormat;
    static getIntegerInstance(): NumberFormat;
    static getIntegerInstance(paramarg0: Locale): NumberFormat;
    static getNumberInstance(): NumberFormat;
    static getNumberInstance(paramarg0: Locale): NumberFormat;
    static getPercentInstance(): NumberFormat;
    static getPercentInstance(paramarg0: Locale): NumberFormat;
    constructor()
    readonly groupingUsed: boolean;
    // private maxFractionDigits: number;
    // private maxIntegerDigits: number;
    readonly maximumFractionDigits: number;
    readonly maximumIntegerDigits: number;
    // private minFractionDigits: number;
    // private minIntegerDigits: number;
    readonly minimumFractionDigits: number;
    readonly minimumIntegerDigits: number;
    readonly parseIntegerOnly: boolean;
    // private serialVersionOnStream: number;
    clone(): Object;
    equals(arg0: Object | null): boolean;
    fastFormat(arg0: number): string;
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: Object, arg1: Format$StringBuf, arg2: FieldPosition): Format$StringBuf;
    format(arg0: number): string;
    format(arg0: number, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: number, arg1: Format$StringBuf, arg2: FieldPosition): Format$StringBuf;
    format(arg0: number): string;
    format(arg0: number, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: number, arg1: Format$StringBuf, arg2: FieldPosition): Format$StringBuf;
    getCurrency(): Currency;
    getMaximumFractionDigits(): number;
    getMaximumIntegerDigits(): number;
    getMinimumFractionDigits(): number;
    getMinimumIntegerDigits(): number;
    getRoundingMode(): RoundingMode;
    hashCode(): number;
    isGroupingUsed(): boolean;
    isParseIntegerOnly(): boolean;
    isStrict(): boolean;
    parse(arg0: string): Number;
    parse(arg0: string, arg1: ParsePosition): Number;
    parseObject(arg0: string, arg1: ParsePosition): Object;
    // private readObject(arg0: ObjectInputStream): void;
    setCurrency(arg0: Currency): void;
    setGroupingUsed(arg0: boolean): void;
    setMaximumFractionDigits(arg0: number): void;
    setMaximumIntegerDigits(arg0: number): void;
    setMinimumFractionDigits(arg0: number): void;
    setMinimumIntegerDigits(arg0: number): void;
    setParseIntegerOnly(arg0: boolean): void;
    setRoundingMode(arg0: RoundingMode): void;
    setStrict(arg0: boolean): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}