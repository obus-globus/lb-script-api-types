import type { Object } from '../../java/lang/Object.d.ts'
import type { FixedOffsetTimeZone } from '../../kotlinx/datetime/FixedOffsetTimeZone.d.ts'
import type { UtcOffset } from '../../kotlinx/datetime/UtcOffset.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
export class UtcOffsetKt extends Object {
    static UtcOffset(): UtcOffset;
    static asTimeZone(self: UtcOffset): FixedOffsetTimeZone;
    static format(self: UtcOffset, format: DateTimeFormat<UtcOffset>): string;
    static getIsoUtcOffsetFormat(): DateTimeFormat<UtcOffset>;
}