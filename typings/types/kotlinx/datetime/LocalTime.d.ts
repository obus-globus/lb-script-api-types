import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { LocalTime } from '../../java/time/LocalTime.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { LocalTime$Companion } from '../../kotlinx/datetime/LocalTime$Companion.d.ts'
export class LocalTime extends Object implements Serializable, Comparable<LocalTime> {
    static Companion: LocalTime$Companion;
    constructor(value: LocalTime)
    constructor(hour: number, minute: number, second: number, nanosecond: number)
    readonly hour: number;
    readonly minute: number;
    readonly nanosecond: number;
    readonly second: number;
    // private value: LocalTime;
    /*not mapped: */ getValue$kotlinx_datetime(): LocalTime;
    compareTo(other: LocalTime): number;
    equals(other: Object | null): boolean;
    hashCode(): number;
    // private readObject(ois: ObjectInputStream): void;
    toMillisecondOfDay(): number;
    toNanosecondOfDay(): number;
    toSecondOfDay(): number;
    toString(): string;
    // private writeReplace(): Object;
}