import type { Object } from '../../../java/lang/Object.d.ts'
import type { UtcOffset } from '../../../kotlinx/datetime/UtcOffset.d.ts'
import type { UtcOffsetFieldContainer } from '../../../kotlinx/datetime/format/UtcOffsetFieldContainer.d.ts'
import type { Copyable } from '../../../kotlinx/datetime/internal/format/parser/Copyable.d.ts'
export class IncompleteUtcOffset extends Object implements UtcOffsetFieldContainer, Copyable<IncompleteUtcOffset> {
    constructor(offsetIsNegative: boolean | null, offsetHours: number | null, offsetMinutesOfHour: number | null, offsetSecondsOfMinute: number | null)
    offsetHours: number | null;
    offsetIsNegative: boolean | null;
    offsetMinutesOfHour: number | null;
    offsetSecondsOfMinute: number | null;
    copy(): IncompleteUtcOffset;
    equals(other: Object | null): boolean;
    hashCode(): number;
    populateFrom(offset: UtcOffset): void;
    toString(): string;
    toUtcOffset(): UtcOffset;
}