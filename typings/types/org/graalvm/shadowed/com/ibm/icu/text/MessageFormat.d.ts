import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../../../java/io/ObjectOutputStream.d.ts'
import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { AttributedCharacterIterator } from '../../../../../../../java/text/AttributedCharacterIterator.d.ts'
import type { FieldPosition } from '../../../../../../../java/text/FieldPosition.d.ts'
import type { Format } from '../../../../../../../java/text/Format.d.ts'
import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DateFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateFormat.d.ts'
import type { MessageFormat$AppendableWrapper } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MessageFormat$AppendableWrapper.d.ts'
import type { MessageFormat$PluralSelectorContext } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MessageFormat$PluralSelectorContext.d.ts'
import type { MessageFormat$PluralSelectorProvider } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MessageFormat$PluralSelectorProvider.d.ts'
import type { MessagePattern } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MessagePattern.d.ts'
import type { MessagePattern$ApostropheMode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MessagePattern$ApostropheMode.d.ts'
import type { NumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat.d.ts'
import type { UFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UFormat.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$Type } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale$Type.d.ts'
export class MessageFormat extends UFormat {
    static autoQuoteApostrophe(parampattern: string): string;
    static format(parampattern: string, ...paramarguments: Object[]): string;
    static format(parampattern: string, paramarguments: JavaMap<string, Object>): string;
    constructor(pattern: string)
    constructor(pattern: string, locale: Locale)
    constructor(pattern: string, locale: ULocale)
    // private cachedFormatters: JavaMap<number, Format>;
    // private customFormatArgStarts: number[];
    // private msgPattern: MessagePattern;
    // private ordinalProvider: MessageFormat$PluralSelectorProvider;
    // private pluralProvider: MessageFormat$PluralSelectorProvider;
    // private stockDateFormatter: DateFormat;
    // private stockNumberFormatter: NumberFormat;
    // private ulocale: ULocale;
    applyPattern(pttrn: string): void;
    applyPattern(pattern: string, aposMode: MessagePattern$ApostropheMode): void;
    // private argNameMatches(partIndex: number, argName: string, argNumber: number): boolean;
    // private cacheExplicitFormats(): void;
    clone(): Object;
    // private createAppropriateFormat(type: string, style: string): Format;
    dateTimeFormatForPatternOrSkeleton(style: string): Format;
    equals(obj: Object | null): boolean;
    // private findFirstPluralNumberArg(msgStart: number, argName: string): number;
    // private findOtherSubMessage(partIndex: number): number;
    format(arg0: Object): string;
    format(arguments: Object, result: StringBuffer, pos: FieldPosition): StringBuffer;
    // private format(arguments: Object, result: MessageFormat$AppendableWrapper, fp: FieldPosition): void;
    format(arguments: Object[], result: StringBuffer, pos: FieldPosition): StringBuffer;
    // private format(arguments: Object[], argsMap: JavaMap<string, Object>, dest: MessageFormat$AppendableWrapper, fp: FieldPosition): void;
    // private format(msgStart: number, pluralNumber: MessageFormat$PluralSelectorContext, args: Object[], argsMap: JavaMap<string, Object>, dest: MessageFormat$AppendableWrapper, fp: FieldPosition): void;
    format(arguments: JavaMap<string, Object>, result: StringBuffer, pos: FieldPosition): StringBuffer;
    // private formatComplexSubMessage(msgStart: number, pluralNumber: MessageFormat$PluralSelectorContext, args: Object[], argsMap: JavaMap<string, Object>, dest: MessageFormat$AppendableWrapper): void;
    formatToCharacterIterator(arguments: Object): AttributedCharacterIterator;
    getApostropheMode(): MessagePattern$ApostropheMode;
    // private getArgName(partIndex: number): string;
    getArgumentNames(): string[];
    getFormatByArgumentName(argumentName: string): Format;
    getFormats(): Format[];
    getFormatsByArgumentIndex(): Format[];
    // private getLiteralStringUntilNextArgument(from: number): string;
    getLocale(): Locale;
    getLocale(type: ULocale$Type): ULocale;
    // private getStockDateFormatter(): DateFormat;
    // private getStockNumberFormatter(): NumberFormat;
    getULocale(): ULocale;
    hashCode(): number;
    // private nextTopLevelArgStart(partIndex: number): number;
    // private parse(msgStart: number, source: string, pos: ParsePosition, args: Object[], argsMap: JavaMap<string, Object>): void;
    parse(source: string): Object[];
    parse(source: string, pos: ParsePosition): Object[];
    parseObject(arg0: string): Object;
    parseObject(source: string, pos: ParsePosition): Object;
    parseToMap(source: string): JavaMap<string, Object>;
    parseToMap(source: string, pos: ParsePosition): JavaMap<string, Object>;
    // private readObject(in_: ObjectInputStream): void;
    // private resetPattern(): void;
    // private setArgStartFormat(argStart: number, formatter: Format): void;
    // private setCustomArgStartFormat(argStart: number, formatter: Format): void;
    setFormat(formatElementIndex: number, newFormat: Format): void;
    setFormatByArgumentIndex(argumentIndex: number, newFormat: Format): void;
    setFormatByArgumentName(argumentName: string, newFormat: Format): void;
    setFormats(newFormats: Format[]): void;
    setFormatsByArgumentIndex(newFormats: Format[]): void;
    setFormatsByArgumentName(newFormats: JavaMap<string, Format>): void;
    setLocale(locale: Locale): void;
    setLocale(locale: ULocale): void;
    setLocale(valid: ULocale, actual: ULocale): void;
    toPattern(): string;
    // private updateMetaData(dest: MessageFormat$AppendableWrapper, prevLength: number, fp: FieldPosition, argId: Object): FieldPosition;
    usesNamedArguments(): boolean;
    // private writeObject(out: ObjectOutputStream): void;
}