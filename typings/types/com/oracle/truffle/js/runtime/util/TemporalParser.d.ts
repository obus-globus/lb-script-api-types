import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSTemporalParserRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalParserRecord.d.ts'
import type { Matcher } from '../../../../../../java/util/regex/Matcher.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TemporalParser extends Object {
    constructor(input: TruffleString)
    // private calendar: TruffleString;
    // private context: JSContext;
    // private day: TruffleString;
    // private fraction: TruffleString;
    // private hour: TruffleString;
    // private input: TruffleString;
    // private minute: TruffleString;
    // private month: TruffleString;
    // private offsetFraction: TruffleString;
    // private offsetHour: TruffleString;
    // private offsetMinute: TruffleString;
    // private offsetSecond: TruffleString;
    // private offsetSign: TruffleString;
    // private pos: number;
    // private rest: TruffleString;
    // private second: TruffleString;
    // private timeZoneIANAName: TruffleString;
    // private timeZoneNumericUTCOffset: TruffleString;
    // private timeZoneUTCOffsetName: TruffleString;
    // private utcDesignator: TruffleString;
    // private year: TruffleString;
    // private atEnd(): boolean;
    // private group(string: TruffleString, matcher: Matcher, groupNumber: number): TruffleString;
    isTemporalZonedDateTimeString(): boolean;
    // private move(newPos: number): void;
    parseAnnotatedDateTime(zoned: boolean, timeRequired: boolean): JSTemporalParserRecord;
    // private parseAnnotatedTime(): JSTemporalParserRecord;
    // private parseAnnotatedYearMonth(): JSTemporalParserRecord;
    parseAnnotationValue(): boolean;
    // private parseAnnotations(): boolean;
    parseCalendarString(): JSTemporalParserRecord;
    // private parseDate(): boolean;
    parseTemporalInstantString(): JSTemporalParserRecord;
    parseTemporalMonthDayString(): JSTemporalParserRecord;
    parseTemporalTimeString(): JSTemporalParserRecord;
    // private parseTimeSpecSeparator(): boolean;
    // private parseTimeZoneIANAName(): boolean;
    parseTimeZoneIdentifier(): JSTemporalParserRecord;
    parseTimeZoneNumericUTCOffset(): JSTemporalParserRecord;
    parseYearMonth(): JSTemporalParserRecord;
    // private parseZonedDateTimeString(): JSTemporalParserRecord;
    // private reset(): void;
    result(): JSTemporalParserRecord;
    // private tryParseDateSpecMonthDay(): boolean;
    // private tryParseDateSpecYearMonth(): boolean;
    // private tryParseDateTime(zoned: boolean, timeRequired: boolean): boolean;
    // private tryParseDateTimeSeparator(): boolean;
    // private tryParseDateTimeUTCOffset(zoned: boolean): boolean;
    // private tryParseTimeDesignator(): boolean;
    // private tryParseTimeSpec(): boolean;
    // private tryParseTimeZoneAnnotation(): boolean;
    // private tryParseTimeZoneIdentifier(): boolean;
    // private tryParseTimeZoneNameRequired(): boolean;
    // private tryParseTimeZoneNumericUTCOffset(): boolean;
    // private tryParseUTCDesignator(): boolean;
}