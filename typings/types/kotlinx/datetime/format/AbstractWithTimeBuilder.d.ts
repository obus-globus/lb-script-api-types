import type { Object } from '../../../java/lang/Object.d.ts'
import type { LocalTime } from '../../../kotlinx/datetime/LocalTime.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder$WithTime } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithTime.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
import type { TimeFieldContainer } from '../../../kotlinx/datetime/format/TimeFieldContainer.d.ts'
import type { FormatStructure } from '../../../kotlinx/datetime/internal/format/FormatStructure.d.ts'
export interface AbstractWithTimeBuilder extends Object, DateTimeFormatBuilder$WithTime{
    addFormatStructureForTime(structure: FormatStructure<TimeFieldContainer>): void;
    amPmHour(padding: Padding): void;
    amPmMarker(am: string, pm: string): void;
    hour(padding: Padding): void;
    minute(padding: Padding): void;
    second(padding: Padding): void;
    secondFraction(fixedLength: number): void;
    secondFraction(minLength: number, maxLength: number): void;
    time(format: DateTimeFormat<LocalTime>): void;
}