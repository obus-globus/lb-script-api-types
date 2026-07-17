import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { AttributedCharacterIterator } from '../../../../../../../java/text/AttributedCharacterIterator.d.ts'
import type { FieldPosition } from '../../../../../../../java/text/FieldPosition.d.ts'
import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { TimeZoneGenericNames } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TimeZoneGenericNames.d.ts'
import type { TimeZoneFormat$GMTOffsetPatternType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneFormat$GMTOffsetPatternType.d.ts'
import type { TimeZoneFormat$ParseOption } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneFormat$ParseOption.d.ts'
import type { TimeZoneFormat$Style } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneFormat$Style.d.ts'
import type { TimeZoneFormat$TimeType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneFormat$TimeType.d.ts'
import type { TimeZoneNames } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneNames.d.ts'
import type { TimeZoneNames$NameType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneNames$NameType.d.ts'
import type { UFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UFormat.d.ts'
import type { Freezable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Freezable.d.ts'
import type { Output } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Output.d.ts'
import type { TimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class TimeZoneFormat extends UFormat implements Serializable, Cloneable, Freezable<TimeZoneFormat> {
    static getInstance(paramlocale: Locale): TimeZoneFormat;
    static getInstance(paramlocale: ULocale): TimeZoneFormat;
    constructor(locale: ULocale)
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
    // private appendOffsetDigits(buf: StringBuilder, n: number, minDigits: number): void;
    // private checkAbuttingHoursAndMinutes(): void;
    clone(): TimeZoneFormat;
    cloneAsThawed(): TimeZoneFormat;
    format(arg0: Object): string;
    format(obj: Object, toAppendTo: StringBuffer, pos: FieldPosition): StringBuffer;
    format(style: TimeZoneFormat$Style, tz: TimeZone, date: number): string;
    format(style: TimeZoneFormat$Style, tz: TimeZone, date: number, timeType: Output<TimeZoneFormat$TimeType>): string;
    // private formatExemplarLocation(tz: TimeZone): string;
    // private formatOffsetISO8601(offset: number, isBasic: boolean, useUtcIndicator: boolean, isShort: boolean, ignoreSeconds: boolean): string;
    formatOffsetISO8601Basic(offset: number, useUtcIndicator: boolean, isShort: boolean, ignoreSeconds: boolean): string;
    formatOffsetISO8601Extended(offset: number, useUtcIndicator: boolean, isShort: boolean, ignoreSeconds: boolean): string;
    formatOffsetLocalizedGMT(offset: number): string;
    // private formatOffsetLocalizedGMT(offset: number, isShort: boolean): string;
    formatOffsetShortLocalizedGMT(offset: number): string;
    // private formatSpecific(tz: TimeZone, stdType: TimeZoneNames$NameType, dstType: TimeZoneNames$NameType, date: number, timeType: Output<TimeZoneFormat$TimeType>): string;
    formatToCharacterIterator(obj: Object): AttributedCharacterIterator;
    freeze(): TimeZoneFormat;
    getDefaultParseOptions(): TimeZoneFormat$ParseOption[];
    getGMTOffsetDigits(): string;
    getGMTOffsetPattern(type: TimeZoneFormat$GMTOffsetPatternType): string;
    getGMTPattern(): string;
    getGMTZeroFormat(): string;
    // private getTZDBTimeZoneNames(): TimeZoneNames;
    // private getTargetRegion(): string;
    // private getTimeType(nameType: TimeZoneNames$NameType): TimeZoneFormat$TimeType;
    // private getTimeZoneForOffset(offset: number): TimeZone;
    // private getTimeZoneGenericNames(): TimeZoneGenericNames;
    // private getTimeZoneID(tzID: string, mzID: string): string;
    getTimeZoneNames(): TimeZoneNames;
    // private initGMTOffsetPatterns(gmtOffsetPatterns: string[]): void;
    // private initGMTPattern(gmtPattern: string): void;
    isFrozen(): boolean;
    parse(text: string): TimeZone;
    parse(text: string, pos: ParsePosition): TimeZone;
    parse(style: TimeZoneFormat$Style, text: string, pos: ParsePosition, options: TimeZoneFormat$ParseOption[], timeType: Output<TimeZoneFormat$TimeType>): TimeZone;
    parse(style: TimeZoneFormat$Style, text: string, pos: ParsePosition, timeType: Output<TimeZoneFormat$TimeType>): TimeZone;
    // private parseAbuttingOffsetFields(text: string, start: number, parsedLen: number[]): number;
    // private parseDefaultOffsetFields(text: string, start: number, separator: string, parsedLen: number[]): number;
    // private parseExemplarLocation(text: string, pos: ParsePosition): string;
    parseObject(arg0: string): Object;
    parseObject(source: string, pos: ParsePosition): Object;
    // private parseOffsetDefaultLocalizedGMT(text: string, start: number, parsedLen: number[]): number;
    // private parseOffsetFieldWithLocalizedDigits(text: string, start: number, minDigits: number, maxDigits: number, minVal: number, maxVal: number, parsedLen: number[]): number;
    // private parseOffsetFields(text: string, start: number, isShort: boolean, parsedLen: number[]): number;
    // private parseOffsetFieldsWithPattern(text: string, start: number, patternItems: Object[], forceSingleHourDigit: boolean, fields: number[]): number;
    parseOffsetISO8601(text: string, pos: ParsePosition): number;
    parseOffsetLocalizedGMT(text: string, pos: ParsePosition): number;
    // private parseOffsetLocalizedGMT(text: string, pos: ParsePosition, isShort: boolean, hasDigitOffset: Output<boolean>): number;
    // private parseOffsetLocalizedGMTPattern(text: string, start: number, isShort: boolean, parsedLen: number[]): number;
    parseOffsetShortLocalizedGMT(text: string, pos: ParsePosition): number;
    // private parseSingleLocalizedDigit(text: string, start: number, len: number[]): number;
    // private readObject(ois: ObjectInputStream): void;
    setDefaultParseOptions(options: TimeZoneFormat$ParseOption[]): TimeZoneFormat;
    setGMTOffsetDigits(digits: string): TimeZoneFormat;
    setGMTOffsetPattern(type: TimeZoneFormat$GMTOffsetPatternType, pattern: string): TimeZoneFormat;
    setGMTPattern(pattern: string): TimeZoneFormat;
    setGMTZeroFormat(gmtZeroFormat: string): TimeZoneFormat;
    setTimeZoneNames(tznames: TimeZoneNames): TimeZoneFormat;
    // private writeObject(oos: ObjectOutputStream): void;
}