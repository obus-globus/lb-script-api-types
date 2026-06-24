import type { Object } from '../../java/lang/Object.d.ts'
import type { DateTimePeriod } from '../../kotlinx/datetime/DateTimePeriod.d.ts'
import type { KSerializer } from '../../kotlinx/serialization/KSerializer.d.ts'
export class DateTimePeriod$Companion extends Object {
    parse(text: string): DateTimePeriod;
    // private parseImpl<T extends unknown>(text: string, parseException: (param0: string, param1: number) => void, construct: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number) => T): T;
    parseOrNull(text: string): DateTimePeriod | null;
    serializer(): KSerializer<DateTimePeriod>;
}