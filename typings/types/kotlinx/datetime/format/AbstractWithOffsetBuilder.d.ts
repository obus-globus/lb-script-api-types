import type { Object } from '../../../java/lang/Object.d.ts'
import type { UtcOffset } from '../../../kotlinx/datetime/UtcOffset.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder$WithUtcOffset } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithUtcOffset.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
import type { UtcOffsetFieldContainer } from '../../../kotlinx/datetime/format/UtcOffsetFieldContainer.d.ts'
import type { FormatStructure } from '../../../kotlinx/datetime/internal/format/FormatStructure.d.ts'
export interface AbstractWithOffsetBuilder extends Object, DateTimeFormatBuilder$WithUtcOffset{
    addFormatStructureForOffset(structure: FormatStructure<UtcOffsetFieldContainer>): void;
    chars(value: string): void;
    offset(format: DateTimeFormat<UtcOffset>): void;
    offsetHours(padding: Padding): void;
    offsetMinutesOfHour(padding: Padding): void;
    offsetSecondsOfMinute(padding: Padding): void;
}