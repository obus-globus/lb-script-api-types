import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { DayOfWeek } from '../../java/time/DayOfWeek.d.ts'
import type { LocalDate as LocalDate_2 } from '../../java/time/LocalDate.d.ts'
import type { Month } from '../../java/time/Month.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { DayOfWeek as DayOfWeek_2 } from '../../kotlinx/datetime/DayOfWeek.d.ts'
import type { LocalDate$Companion } from '../../kotlinx/datetime/LocalDate$Companion.d.ts'
import type { Month as Month_2 } from '../../kotlinx/datetime/Month.d.ts'
export class LocalDate extends Object implements Serializable, Comparable<LocalDate> {
    static Companion: LocalDate$Companion;
    constructor(value: LocalDate_2)
    constructor(year: number, month: Month, dayOfMonth: number)
    constructor(year: number, month: number, day: number)
    constructor(year: number, month: Month_2, day: number)
    readonly day: number;
    readonly dayOfMonth: number;
    readonly dayOfWeek: DayOfWeek_2;
    readonly dayOfYear: number;
    readonly month: Month_2;
    readonly monthNumber: number;
    // private value: LocalDate_2;
    /*not mapped: */ getValue$kotlinx_datetime(): LocalDate_2;
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