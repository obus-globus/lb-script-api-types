import type { TimeZone } from '../../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Instant } from '../../../../../../../org/apache/logging/log4j/core/time/Instant.d.ts'
import type { FastDateFormat } from '../../../../../../../org/apache/logging/log4j/core/util/datetime/FastDateFormat.d.ts'
import type { FixedDateFormat$FixedFormat } from '../../../../../../../org/apache/logging/log4j/core/util/datetime/FixedDateFormat$FixedFormat.d.ts'
import type { FixedDateFormat$FixedTimeZoneFormat } from '../../../../../../../org/apache/logging/log4j/core/util/datetime/FixedDateFormat$FixedTimeZoneFormat.d.ts'
export class FixedDateFormat extends Object {
    static create(paramformat: FixedDateFormat$FixedFormat): FixedDateFormat;
    static create(paramformat: FixedDateFormat$FixedFormat, paramtz: TimeZone): FixedDateFormat;
    static createIfSupported(...paramoptions: (Object | null)[]): FixedDateFormat;
    constructor(fixedFormat: FixedDateFormat$FixedFormat, tz: TimeZone)
    constructor(fixedFormat: FixedDateFormat$FixedFormat, tz: TimeZone, secondFractionDigits: number)
    // private cachedDate: string[];
    // private dateLength: number;
    // private dstOffsets: number[];
    // private fastDateFormat: FastDateFormat;
    // private fixedFormat: FixedDateFormat$FixedFormat;
    // private fixedTimeZoneFormat: FixedDateFormat$FixedTimeZoneFormat;
    readonly length: number;
    // private midnightToday: number;
    // private midnightTomorrow: number;
    // private millisSeparatorChar: string;
    // private millisSeparatorLength: number;
    // private secondFractionDigits: number;
    // private timeSeparatorChar: string;
    // private timeSeparatorLength: number;
    readonly timeZone: TimeZone;
    // private calcMidnightMillis(time: number, addDays: number): number;
    // private daylightSavingTime(hourOfDay: number): number;
    // private digitsLessThanThree(): number;
    format(epochMillis: number): string;
    format(epochMillis: number, buffer: string[], startPos: number): number;
    formatInstant(instant: Instant): string;
    formatInstant(instant: Instant, buffer: string[], startPos: number): number;
    // private formatNanoOfMillisecond(nanoOfMillisecond: number, buffer: string[], pos: number): number;
    getFormat(): string;
    getLength(): number;
    getTimeZone(): TimeZone;
    isEquivalent(oldEpochSecond: number, oldNanoOfSecond: number, epochSecond: number, nanoOfSecond: number): boolean;
    millisSinceMidnight(currentTime: number): number;
    // private updateCachedDate(now: number): void;
    // private updateDaylightSavingTime(): void;
    // private updateMidnightMillis(now: number): void;
    // private writeDate(buffer: string[], startPos: number): void;
    // private writeTime(ms: number, buffer: string[], pos: number): number;
    // private writeTimeZone(epochMillis: number, buffer: string[], pos: number): number;
}