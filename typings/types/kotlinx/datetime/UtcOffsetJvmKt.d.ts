import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { UtcOffset } from '../../kotlinx/datetime/UtcOffset.d.ts'
import type { UtcOffset$Companion } from '../../kotlinx/datetime/UtcOffset$Companion.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
export class UtcOffsetJvmKt extends Object {
    static UtcOffset(paramarg0: number, paramarg1: number, paramarg2: number): UtcOffset;
    static parseOrNull(paramarg0: UtcOffset$Companion, paramarg1: CharSequence, paramarg2: DateTimeFormat<UtcOffset>): UtcOffset;
}