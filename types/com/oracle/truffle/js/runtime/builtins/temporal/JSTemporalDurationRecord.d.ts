import type { JSTemporalDateTimeRecord } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalDateTimeRecord.d.ts'
import type { JSTemporalDurationObject } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalDurationObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JSTemporalDurationRecord extends Object {
    static create(paramr: JSTemporalDateTimeRecord): JSTemporalDurationRecord;
    static create(paramduration: JSTemporalDurationObject): JSTemporalDurationRecord;
    static create(paramyears: number, parammonths: number, paramdays: number, paramhours: number, paramminutes: number, paramseconds: number, parammilliseconds: number, parammicroseconds: number, paramnanoseconds: number): JSTemporalDurationRecord;
    static createWeeks(paramyears: number, parammonths: number, paramweeks: number, paramdays: number, paramhours: number, paramminutes: number, paramseconds: number, parammilliseconds: number, parammicroseconds: number, paramnanoseconds: number): JSTemporalDurationRecord;
    static createZero(): JSTemporalDurationRecord;
    private constructor(years: number, months: number, days: number, hours: number, minutes: number, seconds: number, milliseconds: number, microseconds: number, nanoseconds: number, weeks: number)
    readonly days: number;
    readonly hours: number;
    readonly microseconds: number;
    readonly milliseconds: number;
    readonly minutes: number;
    readonly months: number;
    readonly nanoseconds: number;
    readonly seconds: number;
    readonly weeks: number;
    readonly years: number;
    getDays(): number;
    getHours(): number;
    getMicroseconds(): number;
    getMilliseconds(): number;
    getMinutes(): number;
    getMonths(): number;
    getNanoseconds(): number;
    getSeconds(): number;
    getWeeks(): number;
    getYears(): number;
}