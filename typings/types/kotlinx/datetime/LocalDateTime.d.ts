import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { DayOfWeek } from '../../java/time/DayOfWeek.d.ts'
import type { LocalDateTime } from '../../java/time/LocalDateTime.d.ts'
import type { Month } from '../../java/time/Month.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { DayOfWeek } from '../../kotlinx/datetime/DayOfWeek.d.ts'
import type { LocalDate } from '../../kotlinx/datetime/LocalDate.d.ts'
import type { LocalDateTime$Companion } from '../../kotlinx/datetime/LocalDateTime$Companion.d.ts'
import type { LocalTime } from '../../kotlinx/datetime/LocalTime.d.ts'
import type { Month } from '../../kotlinx/datetime/Month.d.ts'
export class LocalDateTime extends Object implements Serializable, Comparable<LocalDateTime> {
    static Companion: LocalDateTime$Companion;
    constructor(value: LocalDateTime)
    constructor(year: number, month: Month, dayOfMonth: number, hour: number, minute: number, second: number, nanosecond: number)
    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number, nanosecond: number)
    constructor(year: number, month: Month, day: number, hour: number, minute: number, second: number, nanosecond: number)
    constructor(date: LocalDate, time: LocalTime)
    readonly date: LocalDate;
    readonly day: number;
    readonly dayOfMonth: number;
    readonly dayOfWeek: DayOfWeek;
    readonly dayOfYear: number;
    readonly hour: number;
    readonly minute: number;
    readonly month: Month;
    readonly monthNumber: number;
    readonly nanosecond: number;
    readonly second: number;
    readonly time: LocalTime;
    // private value: LocalDateTime;
    /*not mapped: */ getValue$kotlinx_datetime(): LocalDateTime;
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