import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { YearMonth as YearMonth_2 } from '../../java/time/YearMonth.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { LocalDate } from '../../kotlinx/datetime/LocalDate.d.ts'
import type { Month } from '../../kotlinx/datetime/Month.d.ts'
import type { YearMonth$Companion } from '../../kotlinx/datetime/YearMonth$Companion.d.ts'
export class YearMonth extends Object implements Serializable, Comparable<YearMonth> {
    static Companion: YearMonth$Companion;
    constructor(value: YearMonth_2)
    constructor(year: number, month: number)
    constructor(year: number, month: Month)
    readonly days: (Object | null)[];
    readonly firstDay: LocalDate;
    readonly lastDay: LocalDate;
    readonly month: Month;
    /*not mapped: */ getMonthNumber$kotlinx_datetime(): number;
    readonly numberOfDays: number;
    // private value: YearMonth_2;
    /*not mapped: */ getValue$kotlinx_datetime(): YearMonth_2;
    readonly year: number;
    compareTo(other: YearMonth): number;
    equals(other: Object | null): boolean;
    hashCode(): number;
    rangeTo(that: YearMonth): (Object | null)[];
    rangeUntil(that: YearMonth): (Object | null)[];
    // private readObject(ois: ObjectInputStream): void;
    toString(): string;
    // private writeReplace(): Object;
}