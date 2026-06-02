import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JSTemporalParserRecord extends Object {
    constructor(z: boolean, year: number, month: number, day: number, hour: number, minute: number, second: number, fraction: TruffleString, offsetSign: TruffleString, offsetHour: number, offsetMinute: number, offsetSecond: number, offsetFraction: TruffleString, timeZoneIANAName: TruffleString, timeZoneUTCOffsetName: TruffleString, calendar: TruffleString, timeZoneNumericUTCOffset: TruffleString)
    readonly calendar: TruffleString;
    readonly day: number;
    readonly fraction: TruffleString;
    readonly hour: number;
    readonly minute: number;
    readonly month: number;
    readonly offsetFraction: TruffleString;
    readonly offsetHour: number;
    readonly offsetMinute: number;
    readonly offsetSecond: number;
    readonly offsetSign: TruffleString;
    readonly second: number;
    readonly timeZoneIANAName: TruffleString;
    readonly timeZoneNumericUTCOffset: TruffleString;
    readonly timeZoneUTCOffsetName: TruffleString;
    readonly year: number;
    readonly z: boolean;
    getCalendar(): TruffleString;
    getDay(): number;
    getFraction(): TruffleString;
    getHour(): number;
    getMinute(): number;
    getMonth(): number;
    getOffsetFraction(): TruffleString;
    getOffsetHour(): number;
    getOffsetMinute(): number;
    getOffsetSecond(): number;
    getOffsetSign(): TruffleString;
    getSecond(): number;
    getTimeZoneAnnotation(): TruffleString;
    getTimeZoneIANAName(): TruffleString;
    getTimeZoneNumericUTCOffset(): TruffleString;
    getTimeZoneUTCOffsetName(): TruffleString;
    getYear(): number;
    getZ(): boolean;
    hasOffsetHour(): boolean;
    hasOffsetMinute(): boolean;
    hasOffsetSecond(): boolean;
}