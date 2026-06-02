import type { Object } from '../../java/lang/Object.d.ts'
import type { UtcOffset } from '../../kotlinx/datetime/UtcOffset.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
export class UtcOffset$Formats extends Object {
    static INSTANCE: UtcOffset$Formats;
    readonly FOUR_DIGITS: DateTimeFormat<UtcOffset>;
    readonly ISO: DateTimeFormat<UtcOffset>;
    readonly ISO_BASIC: DateTimeFormat<UtcOffset>;
}