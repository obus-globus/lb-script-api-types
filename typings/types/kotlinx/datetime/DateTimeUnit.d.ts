import type { Object } from '../../java/lang/Object.d.ts'
import type { DateTimeUnit$Companion } from '../../kotlinx/datetime/DateTimeUnit$Companion.d.ts'
export class DateTimeUnit extends Object {
    static Companion: DateTimeUnit$Companion;
    protected constructor()
    protected formatToString(value: number, unit: string): string;
    times(scalar: number): DateTimeUnit;
}