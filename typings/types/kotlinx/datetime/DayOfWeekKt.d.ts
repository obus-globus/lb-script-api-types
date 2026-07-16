import type { DayOfWeek } from '../../java/time/DayOfWeek.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { DayOfWeek as DayOfWeek_2 } from '../../kotlinx/datetime/DayOfWeek.d.ts'
export class DayOfWeekKt extends Object {
    static DayOfWeek(isoDayNumber: number): DayOfWeek;
    static DayOfWeek(isoDayNumber: number): DayOfWeek_2;
    static getIsoDayNumber(paramarg0: DayOfWeek): number;
    static getIsoDayNumber(paramarg0: DayOfWeek_2): number;
}