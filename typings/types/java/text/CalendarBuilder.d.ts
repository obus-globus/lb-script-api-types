import type { Calendar } from '../../java/util/Calendar.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class CalendarBuilder extends Object {
    static ISO_DAY_OF_WEEK: number;
    static WEEK_YEAR: number;
    constructor()
    // private field: number[];
    // private maxFieldIndex: number;
    // private nextStamp: number;
    addYear(arg0: number): CalendarBuilder;
    clear(arg0: number): CalendarBuilder;
    establish(arg0: Calendar): Calendar;
    isSet(arg0: number): boolean;
    set(arg0: number, arg1: number): CalendarBuilder;
    toString(): string;
}