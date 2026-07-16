import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { UtcOffset } from '../../kotlinx/datetime/UtcOffset.d.ts'
import type { UtcOffset$Companion } from '../../kotlinx/datetime/UtcOffset$Companion.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
export class UtcOffsetJvmKt extends Object {
    static UtcOffset(hours: number | null, minutes: number | null, seconds: number | null): UtcOffset;
    static parseOrNull(self: UtcOffset$Companion, input: CharSequence, format: DateTimeFormat<UtcOffset>): UtcOffset | null;
}