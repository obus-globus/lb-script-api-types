import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Unit extends Enum<Unit> {
    static BITS: Unit;
    static BITS_PER_SECOND: Unit;
    static BYTES: Unit;
    static BYTES_PER_SECOND: Unit;
    static COUNT: Unit;
    static COUNT_PER_ITEM: Unit;
    static COUNT_PER_SECOND: Unit;
    static GIGABITS: Unit;
    static GIGABITS_PER_SECOND: Unit;
    static GIGABYTES: Unit;
    static GIGABYTES_PER_SECOND: Unit;
    static KILOBITS: Unit;
    static KILOBITS_PER_SECOND: Unit;
    static KILOBYTES: Unit;
    static KILOBYTES_PER_SECOND: Unit;
    static MEGABITS: Unit;
    static MEGABITS_PER_SECOND: Unit;
    static MEGABYTES: Unit;
    static MEGABYTES_PER_SECOND: Unit;
    static MICROSECONDS: Unit;
    static MILLISECONDS: Unit;
    static NONE: Unit;
    static PERCENT: Unit;
    static TERABITS: Unit;
    static TERABITS_PER_SECOND: Unit;
    static TERABYTES: Unit;
    static TERABYTES_PER_SECOND: Unit;
    static fromValue(paramarg0: string): Unit;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Unit;
    static values(): Unit[];
    private constructor(arg2: string)
    readonly value: string;
    getValue(): string;
    name(): "MICROSECONDS" | "MILLISECONDS" | "BYTES" | "KILOBYTES" | "MEGABYTES" | "GIGABYTES" | "TERABYTES" | "BITS" | "KILOBITS" | "MEGABITS" | "GIGABITS" | "TERABITS" | "PERCENT" | "COUNT" | "BYTES_PER_SECOND" | "KILOBYTES_PER_SECOND" | "MEGABYTES_PER_SECOND" | "GIGABYTES_PER_SECOND" | "TERABYTES_PER_SECOND" | "BITS_PER_SECOND" | "KILOBITS_PER_SECOND" | "MEGABITS_PER_SECOND" | "GIGABITS_PER_SECOND" | "TERABITS_PER_SECOND" | "COUNT_PER_SECOND" | "COUNT_PER_ITEM" | "NONE";
}