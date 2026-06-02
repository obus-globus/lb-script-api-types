import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JSTemporalDateTimeRecord extends Object {
    static create(paramyear: number, parammonth: number, paramday: number, paramhour: number, paramminute: number, paramsecond: number, parammillisecond: number, parammicrosecond: number, paramnanosecond: number): JSTemporalDateTimeRecord;
    static createCalendar(paramyear: number, parammonth: number, paramday: number, paramhour: number, paramminute: number, paramsecond: number, parammillisecond: number, parammicrosecond: number, paramnanosecond: number, paramcalendar: TruffleString): JSTemporalDateTimeRecord;
    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number, microsecond: number, nanosecond: number, calendar: TruffleString)
    readonly calendar: TruffleString;
    readonly day: number;
    readonly hour: number;
    readonly microsecond: number;
    readonly millisecond: number;
    readonly minute: number;
    readonly month: number;
    readonly nanosecond: number;
    readonly second: number;
    readonly year: number;
    getCalendar(): TruffleString;
    getDay(): number;
    getHour(): number;
    getMicrosecond(): number;
    getMillisecond(): number;
    getMinute(): number;
    getMonth(): number;
    getNanosecond(): number;
    getSecond(): number;
    getYear(): number;
    hasCalendar(): boolean;
}