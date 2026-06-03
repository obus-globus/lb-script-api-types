import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { DayOfWeek } from '../../java/time/DayOfWeek.d.ts'
import type { LocalDateTime as LocalDateTime_2 } from '../../java/time/LocalDateTime.d.ts'
import type { Month } from '../../java/time/Month.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { DayOfWeek as DayOfWeek_2 } from '../../kotlinx/datetime/DayOfWeek.d.ts'
import type { LocalDate } from '../../kotlinx/datetime/LocalDate.d.ts'
import type { LocalDateTime$Companion } from '../../kotlinx/datetime/LocalDateTime$Companion.d.ts'
import type { LocalTime } from '../../kotlinx/datetime/LocalTime.d.ts'
import type { Month as Month_2 } from '../../kotlinx/datetime/Month.d.ts'
export class LocalDateTime extends Object implements Serializable, Comparable<LocalDateTime> {
    static Companion: LocalDateTime$Companion;
    constructor(value: LocalDateTime_2)
    constructor(year: number, month: Month, dayOfMonth: number, hour: number, minute: number, second: number, nanosecond: number)
    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number, nanosecond: number)
    constructor(year: number, month: Month_2, day: number, hour: number, minute: number, second: number, nanosecond: number)
    constructor(date: LocalDate, time: LocalTime)
    readonly date: LocalDate;
    readonly day: number;
    readonly dayOfMonth: number;
    readonly dayOfWeek: DayOfWeek_2;
    readonly dayOfYear: number;
    readonly hour: number;
    readonly minute: number;
    readonly month: Month_2;
    readonly monthNumber: number;
    readonly nanosecond: number;
    readonly second: number;
    readonly time: LocalTime;
    // private value: LocalDateTime_2;
    /*not mapped: */ getValue$kotlinx_datetime(): LocalDateTime_2;
    readonly year: number;
    compareTo(other: LocalDateTime): number;
    equals(other: Object | null): boolean;
    getDayOfWeek(): DayOfWeek;
    getMonth(): Month;
    hashCode(): number;
    // private readObject(ois: ObjectInputStream): void;
    toString(): string;
    // private writeReplace(): Object;
}