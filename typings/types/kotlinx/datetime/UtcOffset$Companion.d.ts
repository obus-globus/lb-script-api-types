import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { UtcOffset } from '../../kotlinx/datetime/UtcOffset.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder$WithUtcOffset } from '../../kotlinx/datetime/format/DateTimeFormatBuilder$WithUtcOffset.d.ts'
import type { KSerializer } from '../../kotlinx/serialization/KSerializer.d.ts'
export class UtcOffset$Companion extends Object {
    readonly ZERO: UtcOffset;
    // private serialVersionUID: number;
    Format(block: (param0: DateTimeFormatBuilder$WithUtcOffset) => void): DateTimeFormat<UtcOffset>;
    orNull(hours: number | null, minutes: number | null, seconds: number | null): UtcOffset | null;
    parse(input: CharSequence, format: DateTimeFormat<UtcOffset>): UtcOffset;
    parse(offsetString: string): UtcOffset;
    serializer(): KSerializer<UtcOffset>;
}