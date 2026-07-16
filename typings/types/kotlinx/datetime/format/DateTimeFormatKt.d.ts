import type { Object } from '../../../java/lang/Object.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
export class DateTimeFormatKt extends Object {
    static minDigits(self: Padding, width: number): number;
    static spaces(self: Padding, width: number): number | null;
    static toKotlinCode(self: Padding): string;
}