import type { TimeZoneGenericNames } from '../../../../com/ibm/icu/impl/TimeZoneGenericNames.d.ts'
import type { TimeZoneFormat$GMTOffsetPatternType } from '../../../../com/ibm/icu/text/TimeZoneFormat$GMTOffsetPatternType.d.ts'
import type { TimeZoneFormat$ParseOption } from '../../../../com/ibm/icu/text/TimeZoneFormat$ParseOption.d.ts'
import type { TimeZoneFormat$Style } from '../../../../com/ibm/icu/text/TimeZoneFormat$Style.d.ts'
import type { TimeZoneFormat$TimeType } from '../../../../com/ibm/icu/text/TimeZoneFormat$TimeType.d.ts'
import type { TimeZoneNames } from '../../../../com/ibm/icu/text/TimeZoneNames.d.ts'
import type { TimeZoneNames$NameType } from '../../../../com/ibm/icu/text/TimeZoneNames$NameType.d.ts'
import type { UFormat } from '../../../../com/ibm/icu/text/UFormat.d.ts'
import type { Freezable } from '../../../../com/ibm/icu/util/Freezable.d.ts'
import type { Output } from '../../../../com/ibm/icu/util/Output.d.ts'
import type { TimeZone } from '../../../../com/ibm/icu/util/TimeZone.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { AttributedCharacterIterator } from '../../../../java/text/AttributedCharacterIterator.d.ts'
import type { FieldPosition } from '../../../../java/text/FieldPosition.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export class TimeZoneFormat extends UFormat implements Freezable<TimeZoneFormat>, Serializable, Cloneable {
    static getInstance(paramarg0: ULocale): TimeZoneFormat;
    static getInstance(paramarg0: Locale): TimeZoneFormat;
    constructor(arg0: ULocale)
    // private _abuttingOffsetHoursAndMinutes: boolean;
    // private _frozen: boolean;
    // private _gmtOffsetDigits: string[];
    // private _gmtOffsetPatternItems: Object[][];
    // private _gmtOffsetPatterns: string[];
    // private _gmtPattern: string;
    // private _gmtPatternPrefix: string;
    // private _gmtPatternSuffix: string;
    // private _gmtZeroFormat: string;
    // private _gnames: TimeZoneGenericNames;
    // private _locale: ULocale;
    // private _parseAllStyles: boolean;
    // private _parseTZDBNames: boolean;
    // private _region: string;
    // private _tzdbNames: TimeZoneNames;
    // private _tznames: TimeZoneNames;
    // private appendOffsetDigits(arg0: StringBuilder, arg1: number, arg2: number): void;
    // private checkAbuttingHoursAndMinutes(): void;
    clone(): TimeZoneFormat;
    protected clone(): Object;
    cloneAsThawed(): TimeZoneFormat;
    format(arg0: TimeZoneFormat$Style, arg1: TimeZone, arg2: number): string;
    format(arg0: TimeZoneFormat$Style, arg1: TimeZone, arg2: number, arg3: Output<TimeZoneFormat$TimeType>): string;
    format(arg0: Object): string;
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    // private formatExemplarLocation(arg0: TimeZone): string;
    // private formatOffsetISO8601(arg0: number, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean): string;
    formatOffsetISO8601Basic(arg0: number, arg1: boolean, arg2: boolean, arg3: boolean): string;
    formatOffsetISO8601Extended(arg0: number, arg1: boolean, arg2: boolean, arg3: boolean): string;
    formatOffsetLocalizedGMT(arg0: number): string;
    // private formatOffsetLocalizedGMT(arg0: number, arg1: boolean): string;
    formatOffsetShortLocalizedGMT(arg0: number): string;
    // private formatSpecific(arg0: TimeZone, arg1: TimeZoneNames$NameType, arg2: TimeZoneNames$NameType, arg3: number, arg4: Output<TimeZoneFormat$TimeType>): string;
    formatToCharacterIterator(arg0: Object): AttributedCharacterIterator;
    freeze(): TimeZoneFormat;
    getDefaultParseOptions(): TimeZoneFormat$ParseOption[];
    getGMTOffsetDigits(): string;
    getGMTOffsetPattern(arg0: TimeZoneFormat$GMTOffsetPatternType): string;
    getGMTPattern(): string;
    getGMTZeroFormat(): string;
    // private getTZDBTimeZoneNames(): TimeZoneNames;
    // private getTargetRegion(): string;
    // private getTimeType(arg0: TimeZoneNames$NameType): TimeZoneFormat$TimeType;
    // private getTimeZoneForOffset(arg0: number): TimeZone;
    // private getTimeZoneGenericNames(): TimeZoneGenericNames;
    // private getTimeZoneID(arg0: string, arg1: string): string;
    getTimeZoneNames(): TimeZoneNames;
    // private initGMTOffsetPatterns(arg0: string[]): void;
    // private initGMTPattern(arg0: string): void;
    isFrozen(): boolean;
    parse(arg0: TimeZoneFormat$Style, arg1: string, arg2: ParsePosition, arg3: Output<TimeZoneFormat$TimeType>): TimeZone;
    parse(arg0: TimeZoneFormat$Style, arg1: string, arg2: ParsePosition, arg3: TimeZoneFormat$ParseOption[], arg4: Output<TimeZoneFormat$TimeType>): TimeZone;
    parse(arg0: string): TimeZone;
    parse(arg0: string, arg1: ParsePosition): TimeZone;
    // private parseAbuttingOffsetFields(arg0: string, arg1: number, arg2: number[]): number;
    // private parseDefaultOffsetFields(arg0: string, arg1: number, arg2: string, arg3: number[]): number;
    // private parseExemplarLocation(arg0: string, arg1: ParsePosition): string;
    parseObject(arg0: string): Object;
    parseObject(arg0: string, arg1: ParsePosition): Object;
    // private parseOffsetDefaultLocalizedGMT(arg0: string, arg1: number, arg2: number[]): number;
    // private parseOffsetFieldWithLocalizedDigits(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number[]): number;
    // private parseOffsetFields(arg0: string, arg1: number, arg2: boolean, arg3: number[]): number;
    // private parseOffsetFieldsWithPattern(arg0: string, arg1: number, arg2: Object[], arg3: boolean, arg4: number[]): number;
    parseOffsetISO8601(arg0: string, arg1: ParsePosition): number;
    parseOffsetLocalizedGMT(arg0: string, arg1: ParsePosition): number;
    // private parseOffsetLocalizedGMT(arg0: string, arg1: ParsePosition, arg2: boolean, arg3: Output<boolean>): number;
    // private parseOffsetLocalizedGMTPattern(arg0: string, arg1: number, arg2: boolean, arg3: number[]): number;
    parseOffsetShortLocalizedGMT(arg0: string, arg1: ParsePosition): number;
    // private parseSingleLocalizedDigit(arg0: string, arg1: number, arg2: number[]): number;
    // private readObject(arg0: ObjectInputStream): void;
    setDefaultParseOptions(arg0: TimeZoneFormat$ParseOption[]): TimeZoneFormat;
    setGMTOffsetDigits(arg0: string): TimeZoneFormat;
    setGMTOffsetPattern(arg0: TimeZoneFormat$GMTOffsetPatternType, arg1: string): TimeZoneFormat;
    setGMTPattern(arg0: string): TimeZoneFormat;
    setGMTZeroFormat(arg0: string): TimeZoneFormat;
    setTimeZoneNames(arg0: TimeZoneNames): TimeZoneFormat;
    // private writeObject(arg0: ObjectOutputStream): void;
}