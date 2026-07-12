import type { DateFormat } from '../../../../com/ibm/icu/text/DateFormat.d.ts'
import type { MessageFormat$AppendableWrapper } from '../../../../com/ibm/icu/text/MessageFormat$AppendableWrapper.d.ts'
import type { MessageFormat$PluralSelectorContext } from '../../../../com/ibm/icu/text/MessageFormat$PluralSelectorContext.d.ts'
import type { MessageFormat$PluralSelectorProvider } from '../../../../com/ibm/icu/text/MessageFormat$PluralSelectorProvider.d.ts'
import type { MessagePattern } from '../../../../com/ibm/icu/text/MessagePattern.d.ts'
import type { MessagePattern$ApostropheMode } from '../../../../com/ibm/icu/text/MessagePattern$ApostropheMode.d.ts'
import type { NumberFormat } from '../../../../com/ibm/icu/text/NumberFormat.d.ts'
import type { UFormat } from '../../../../com/ibm/icu/text/UFormat.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$Type } from '../../../../com/ibm/icu/util/ULocale$Type.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { AttributedCharacterIterator } from '../../../../java/text/AttributedCharacterIterator.d.ts'
import type { FieldPosition } from '../../../../java/text/FieldPosition.d.ts'
import type { Format } from '../../../../java/text/Format.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export class MessageFormat extends UFormat implements Cloneable {
    static autoQuoteApostrophe(paramarg0: string): string;
    static format(paramarg0: string, ...paramarg1: (Object | null)[]): string;
    static format(paramarg0: string, paramarg1: { [key: string]: Object }): string;
    constructor(arg0: string)
    constructor(arg0: string, arg1: ULocale)
    constructor(arg0: string, arg1: Locale)
    // private cachedFormatters: { [key: number]: Format };
    // private customFormatArgStarts: number[];
    // private msgPattern: MessagePattern;
    // private ordinalProvider: MessageFormat$PluralSelectorProvider;
    // private pluralProvider: MessageFormat$PluralSelectorProvider;
    // private stockDateFormatter: DateFormat;
    // private stockNumberFormatter: NumberFormat;
    // private ulocale: ULocale;
    applyPattern(arg0: string): void;
    applyPattern(arg0: string, arg1: MessagePattern$ApostropheMode): void;
    // private argNameMatches(arg0: number, arg1: string, arg2: number): boolean;
    // private cacheExplicitFormats(): void;
    clone(): MessageFormat;
    // private createAppropriateFormat(arg0: string, arg1: string): Format;
    dateTimeFormatForPatternOrSkeleton(arg0: string): Format;
    equals(arg0: Object | null): boolean;
    // private findFirstPluralNumberArg(arg0: number, arg1: string): number;
    // private findOtherSubMessage(arg0: number): number;
    format(arg0: Object): string;
    // private format(arg0: Object, arg1: MessageFormat$AppendableWrapper, arg2: FieldPosition): void;
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: Object[], arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    // private format(arg0: Object[], arg1: { [key: string]: Object }, arg2: MessageFormat$AppendableWrapper, arg3: FieldPosition): void;
    // private format(arg0: number, arg1: MessageFormat$PluralSelectorContext, arg2: Object[], arg3: { [key: string]: Object }, arg4: MessageFormat$AppendableWrapper, arg5: FieldPosition): void;
    format(arg0: { [key: string]: Object }, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    // private formatComplexSubMessage(arg0: number, arg1: MessageFormat$PluralSelectorContext, arg2: Object[], arg3: { [key: string]: Object }, arg4: MessageFormat$AppendableWrapper): void;
    formatToCharacterIterator(arg0: Object): AttributedCharacterIterator;
    getApostropheMode(): MessagePattern$ApostropheMode;
    // private getArgName(arg0: number): string;
    getArgumentNames(): string[];
    getFormatByArgumentName(arg0: string): Format;
    getFormats(): Format[];
    getFormatsByArgumentIndex(): Format[];
    // private getLiteralStringUntilNextArgument(arg0: number): string;
    getLocale(): Locale;
    getLocale(arg0: ULocale$Type): ULocale;
    // private getStockDateFormatter(): DateFormat;
    // private getStockNumberFormatter(): NumberFormat;
    getULocale(): ULocale;
    hashCode(): number;
    // private nextTopLevelArgStart(arg0: number): number;
    // private parse(arg0: number, arg1: string, arg2: ParsePosition, arg3: Object[], arg4: { [key: string]: Object }): void;
    parse(arg0: string): Object[];
    parse(arg0: string, arg1: ParsePosition): Object[];
    parseObject(arg0: string): Object;
    parseObject(arg0: string, arg1: ParsePosition): Object;
    parseToMap(arg0: string): { [key: string]: Object };
    parseToMap(arg0: string, arg1: ParsePosition): { [key: string]: Object };
    // private readObject(arg0: ObjectInputStream): void;
    // private resetPattern(): void;
    // private setArgStartFormat(arg0: number, arg1: Format): void;
    // private setCustomArgStartFormat(arg0: number, arg1: Format): void;
    setFormat(arg0: number, arg1: Format): void;
    setFormatByArgumentIndex(arg0: number, arg1: Format): void;
    setFormatByArgumentName(arg0: string, arg1: Format): void;
    setFormats(arg0: Format[]): void;
    setFormatsByArgumentIndex(arg0: Format[]): void;
    setFormatsByArgumentName(arg0: { [key: string]: Format }): void;
    setLocale(arg0: ULocale): void;
    setLocale(arg0: ULocale, arg1: ULocale): void;
    setLocale(arg0: Locale): void;
    toPattern(): string;
    // private updateMetaData(arg0: MessageFormat$AppendableWrapper, arg1: number, arg2: FieldPosition, arg3: Object): FieldPosition;
    usesNamedArguments(): boolean;
    // private writeObject(arg0: ObjectOutputStream): void;
}