import type { DayPeriodRules$DayPeriod } from '../../../../com/ibm/icu/impl/DayPeriodRules$DayPeriod.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DayPeriodRules extends Object {
    static getInstance(paramarg0: ULocale): DayPeriodRules;
    private constructor()
    readonly dayPeriodForHour: DayPeriodRules$DayPeriod[];
    // private hasMidnight: boolean;
    // private hasNoon: boolean;
    // private add(arg0: number, arg1: number, arg2: DayPeriodRules$DayPeriod): void;
    getDayPeriodForHour(arg0: number): DayPeriodRules$DayPeriod;
    // private getEndHourForDayPeriod(arg0: DayPeriodRules$DayPeriod): number;
    getMidPointForDayPeriod(arg0: DayPeriodRules$DayPeriod): number;
    // private getStartHourForDayPeriod(arg0: DayPeriodRules$DayPeriod): number;
    hasMidnight(): boolean;
    hasNoon(): boolean;
}