import type { Object } from '../../../java/lang/Object.d.ts'
import type { DayOfWeekNames$Companion } from '../../../kotlinx/datetime/format/DayOfWeekNames$Companion.d.ts'
export class DayOfWeekNames extends Object {
    static Companion: DayOfWeekNames$Companion;
    constructor(monday: string, tuesday: string, wednesday: string, thursday: string, friday: string, saturday: string, sunday: string)
    constructor(names: string[])
    readonly names: string[];
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}