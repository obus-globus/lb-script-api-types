import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DayPeriodRules$DayPeriod } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/DayPeriodRules$DayPeriod.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class DayPeriodRules extends Object {
    static getInstance(paramlocale: ULocale): DayPeriodRules;
    private constructor()
    readonly dayPeriodForHour: DayPeriodRules$DayPeriod[];
    // private hasMidnight: boolean;
    // private hasNoon: boolean;
    // private add(startHour: number, limitHour: number, period: DayPeriodRules$DayPeriod): void;
    getDayPeriodForHour(hour: number): DayPeriodRules$DayPeriod;
    // private getEndHourForDayPeriod(dayPeriod: DayPeriodRules$DayPeriod): number;
    getMidPointForDayPeriod(dayPeriod: DayPeriodRules$DayPeriod): number;
    // private getStartHourForDayPeriod(dayPeriod: DayPeriodRules$DayPeriod): number;
    hasMidnight(): boolean;
    hasNoon(): boolean;
}