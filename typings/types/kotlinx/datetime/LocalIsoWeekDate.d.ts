import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { DayOfWeek } from '../../kotlinx/datetime/DayOfWeek.d.ts'
import type { LocalDate } from '../../kotlinx/datetime/LocalDate.d.ts'
import type { LocalIsoWeekDate$Companion } from '../../kotlinx/datetime/LocalIsoWeekDate$Companion.d.ts'
export class LocalIsoWeekDate extends Object implements Comparable<LocalIsoWeekDate> {
    static Companion: LocalIsoWeekDate$Companion;
    constructor(isoWeekYear: number, isoWeekNumber: number, dayOfWeek: number)
    constructor(isoWeekYear: number, isoWeekNumber: number, dayOfWeek: DayOfWeek)
    private constructor(isoWeekYear: number, isoWeekNumber: number, dayOfWeek: DayOfWeek, unit: void)
    readonly dayOfWeek: DayOfWeek;
    readonly isoWeekNumber: number;
    readonly isoWeekYear: number;
    // private checkValidity(fail: (param0: string) => void): void;
    compareTo(other: LocalIsoWeekDate): number;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toLocalDate(): LocalDate;
    toString(): string;
}