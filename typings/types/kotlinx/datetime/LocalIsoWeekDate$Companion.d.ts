import type { Object } from '../../java/lang/Object.d.ts'
import type { DayOfWeek } from '../../kotlinx/datetime/DayOfWeek.d.ts'
import type { LocalIsoWeekDate } from '../../kotlinx/datetime/LocalIsoWeekDate.d.ts'
export class LocalIsoWeekDate$Companion extends Object {
    orNull(isoWeekYear: number, isoWeekNumber: number, dayOfWeek: number): LocalIsoWeekDate | null;
    orNull(isoWeekYear: number, isoWeekNumber: number, dayOfWeek: DayOfWeek): LocalIsoWeekDate | null;
    parse(isoString: string): LocalIsoWeekDate;
    // private parseImpl<T extends unknown>(text: string, parseException: (param0: string, param1: number) => void, construct: (param0: number, param1: number, param2: number) => T): T;
    parseOrNull(isoString: string): LocalIsoWeekDate | null;
}