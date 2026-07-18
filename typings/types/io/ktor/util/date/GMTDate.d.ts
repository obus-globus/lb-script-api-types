import type { GMTDate$Companion } from '../../../../io/ktor/util/date/GMTDate$Companion.d.ts'
import type { Month } from '../../../../io/ktor/util/date/Month.d.ts'
import type { WeekDay } from '../../../../io/ktor/util/date/WeekDay.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeEncoder } from '../../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
export class GMTDate extends Object implements Comparable<GMTDate> {
    static Companion: GMTDate$Companion;
    static write$Self$ktor_utils(self: GMTDate, output: CompositeEncoder, serialDesc: SerialDescriptor): void;
    constructor(seconds: number, minutes: number, hours: number, dayOfWeek: WeekDay, dayOfMonth: number, dayOfYear: number, month: Month, year: number, timestamp: number)
    readonly dayOfMonth: number;
    readonly dayOfWeek: WeekDay;
    readonly dayOfYear: number;
    readonly hours: number;
    readonly minutes: number;
    readonly month: Month;
    readonly seconds: number;
    readonly timestamp: number;
    readonly year: number;
    compareTo(other: GMTDate): number;
    component1(): number;
    component2(): number;
    component3(): number;
    component4(): WeekDay;
    component5(): number;
    component6(): number;
    component7(): Month;
    component8(): number;
    component9(): number;
    copy(): GMTDate;
    copy(seconds: number, minutes: number, hours: number, dayOfWeek: WeekDay, dayOfMonth: number, dayOfYear: number, month: Month, year: number, timestamp: number): GMTDate;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    write$Self(self: GMTDate, output: CompositeEncoder, serialDesc: SerialDescriptor): void;
}