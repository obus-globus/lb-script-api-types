import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { DayOfWeek } from '../../java/time/DayOfWeek.d.ts'
import type { LocalDate } from '../../java/time/LocalDate.d.ts'
import type { Month } from '../../java/time/Month.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { DayOfWeek } from '../../kotlinx/datetime/DayOfWeek.d.ts'
import type { LocalDate$Companion } from '../../kotlinx/datetime/LocalDate$Companion.d.ts'
import type { Month } from '../../kotlinx/datetime/Month.d.ts'
export class LocalDate extends Object implements Serializable, Comparable<LocalDate> {
    static Companion: LocalDate$Companion;
    constructor(value: LocalDate)
    constructor(year: number, month: Month, dayOfMonth: number)
    constructor(year: number, month: number, day: number)
    constructor(year: number, month: Month, day: number)
    readonly day: number;
    readonly dayOfMonth: number;
    readonly dayOfWeek: DayOfWeek;
    readonly dayOfYear: number;
    readonly month: Month;
    readonly monthNumber: number;
    // private value: LocalDate;
    /*not mapped: */ getValue$kotlinx_datetime(): LocalDate;
    readonly year: number;
    compareTo(other: LocalDate): number;
    equals(other: Object | null): boolean;
    getDayOfWeek(): DayOfWeek;
    getMonth(): Month;
    hashCode(): number;
    rangeTo(that: LocalDate): (Object | null)[];
    rangeUntil(that: LocalDate): (Object | null)[];
    // private readObject(ois: ObjectInputStream): void;
    toEpochDays(): number;
    toEpochDaysJvm(): number;
    toString(): string;
    // private writeReplace(): Object;
}