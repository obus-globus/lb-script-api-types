import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSTemporalDateTimeRecord } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalDateTimeRecord.d.ts'
import type { JSTemporalTimeZoneRecord } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalTimeZoneRecord.d.ts'
export class ParseISODateTimeResult extends JSTemporalDateTimeRecord {
    static create(paramyear: number, parammonth: number, paramday: number, paramhour: number, paramminute: number, paramsecond: number, parammillisecond: number, parammicrosecond: number, paramnanosecond: number): JSTemporalDateTimeRecord;
    static createCalendar(paramyear: number, parammonth: number, paramday: number, paramhour: number, paramminute: number, paramsecond: number, parammillisecond: number, parammicrosecond: number, paramnanosecond: number, paramcalendar: TruffleString): JSTemporalDateTimeRecord;
    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number, microsecond: number, nanosecond: number, calendar: TruffleString, timeZoneResult: JSTemporalTimeZoneRecord)
    readonly timeZoneResult: JSTemporalTimeZoneRecord;
    getTimeZoneResult(): JSTemporalTimeZoneRecord;
    withTimeZoneResult(newTimeZoneResult: JSTemporalTimeZoneRecord): ParseISODateTimeResult;
}