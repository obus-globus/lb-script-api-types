import type { Object } from '../../../java/lang/Object.d.ts'
import type { LocalTime } from '../../../kotlinx/datetime/LocalTime.d.ts'
import type { AmPmMarker } from '../../../kotlinx/datetime/format/AmPmMarker.d.ts'
import type { TimeFieldContainer } from '../../../kotlinx/datetime/format/TimeFieldContainer.d.ts'
import type { Copyable } from '../../../kotlinx/datetime/internal/format/parser/Copyable.d.ts'
export class IncompleteLocalTime extends Object implements TimeFieldContainer, Copyable<IncompleteLocalTime> {
    constructor(hour: number | null, hourOfAmPm: number | null, amPm: AmPmMarker | null, minute: number | null, second: number | null, nanosecond: number | null)
    amPm: AmPmMarker | null;
    hour: number | null;
    hourOfAmPm: number | null;
    minute: number | null;
    nanosecond: number | null;
    second: number | null;
    copy(): IncompleteLocalTime;
    equals(other: Object | null): boolean;
    hashCode(): number;
    populateFrom(localTime: LocalTime): void;
    toLocalTime(): LocalTime;
    toString(): string;
}